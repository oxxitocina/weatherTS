import { useSelector } from 'react-redux'
import { ICityWeather } from '../app/features/cities/citiesSlice'

interface CitiesState {
  cities: {
    cityData: ICityWeather
  }
}

export default function DetailsTab() {
  const cityData: ICityWeather = useSelector((state: CitiesState) => state.cities.cityData)

  return (
    <div className='details-tab'>
      <div className='details'>{cityData.name}</div>

      <div className='details-container'>
        <ul className='details-list'>
          <li className='details_temperature'>
            Temperature: {cityData.main.temp}
            <sup>°</sup>{' '}
          </li>
          <li className='details_feels_like'>
            Feels like: {cityData.main.feels_like}
            <sup>°</sup>
          </li>
          <li className='details_weather'>
            Weather: {cityData?.weather !== undefined ? cityData?.weather[0]?.main : ''}
          </li>
          <li className='details_sunrise'>Sunrise: {cityData.sys?.sunrise}</li>
          <li className='details_sunset'>Sunset: {cityData.sys?.sunset}</li>
        </ul>
      </div>
    </div>
  )
}
