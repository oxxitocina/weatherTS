import { ICityWeather } from '../app/features/cities/citiesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../app/features/cities/citiesSlice'
import { addToSavedCities, removeFromCities } from '../app/features/cities/citiesSlice'
import imgMask from '../assets/img/mask.png'
import imgCloud from '../assets/img/cloud.png'

interface CitiesState {
  cities: {
    cityData: ICityWeather
    currentCity: string
    savedCities: string[]
  }
}

export default function NowTab() {
  const dispatch = useDispatch()
  const cityData: ICityWeather = useSelector((state: CitiesState) => state.cities.cityData)
  const currentCity: string = useSelector((state: CitiesState) => state.cities.currentCity)
  const savedCities: string[] = useSelector((state: CitiesState) => state.cities.savedCities)

  function handleButton() {
    if (!savedCities.includes(currentCity)) {
      dispatch(addToSavedCities(currentCity))
    } else {
      dispatch(removeFromCities(currentCity))
    }
  }

  function renderButton() {
    if (!savedCities.includes(currentCity)) {
      return <button onClick={handleButton} id='heart' className='heart-empty' />
    } else {
      return <button onClick={handleButton} id='heart' className='heart-empty fill' />
    }
  }

  return (
    <div className='now-tab'>
      <div className='temperature'>
        <p>{cityData.main.temp}</p>
        <div className='mask'>
          <img src={imgMask} alt='mask' />
        </div>
      </div>

      <div className='cloud'>
        <img src={imgCloud} alt='cloud' />
      </div>

      <div className='city'>{cityData.name}</div>

      {renderButton()}
    </div>
  )
}
