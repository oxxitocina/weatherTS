import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import WeatherAPI from '../../API/WeatherApi'

export interface ICityWeather {
  base?: string
  clouds?: { all: number }
  cod?: number
  coord?: { lon: number; lat: number }
  dt?: number
  id?: number
  main: {
    feels_like?: number
    humidity?: number
    pressure?: number
    temp?: number
    temp_max?: number
    temp_min?: number
  }
  name: string
  sys?: {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
  }
  timezone?: number
  visibility?: number
  weather?: {
    description: string
    icon: string
    id: number
    main: string
  }[]
  wind?: { speed: number; deg: number }
}

interface InitialState {
  currentCity: string
  savedCities: string[]
  loading: 'loading' | 'idle' | 'rejected'
  cityData: ICityWeather
}

export const fetchWeather = createAsyncThunk(
  'cities/fetchWeatherByName',
  async function (city: string) {
    const response = await fetch(
      `${WeatherAPI.URL}?q=${city}&appid=${WeatherAPI.API_KEY}&units=metric`,
    )
    const result: ICityWeather = await response.json()
    return result
  },
)

const initialState: InitialState = {
  currentCity: localStorage.getItem('currentCity') || localStorage.setItem('currentCity', 'Bali'),
  savedCities: JSON.parse(localStorage.getItem('savedCities') || '[]'),
  loading: 'loading',
  cityData: {
    name: '',
    main: {
      temp: 0,
    },
  },
}

const name: string = 'cities'

export const citiesSlice = createSlice({
  name,
  initialState,
  reducers: {
    changeCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload
      localStorage.setItem('currentCity', action.payload)
    },
    addToSavedCities: (state, action: PayloadAction<string>) => {
      state.savedCities.push(action.payload)
      localStorage.setItem('savedCities', JSON.stringify(state.savedCities))
    },
    removeFromCities: (state, action: PayloadAction<string>) => {
      state.savedCities.splice(state.savedCities.indexOf(action.payload), 1)
      localStorage.setItem('savedCities', JSON.stringify(state.savedCities))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = 'loading'
        console.log('Data is loading')
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<ICityWeather>) => {
        state.loading = 'idle'
        state.cityData = action.payload
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = 'rejected'
      })
  },
})

export const { changeCurrentCity, addToSavedCities, removeFromCities } = citiesSlice.actions
export default citiesSlice.reducer
