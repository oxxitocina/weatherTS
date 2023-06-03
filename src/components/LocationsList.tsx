import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../app/hooks/hooks'
import { changeCurrentCity, fetchWeather } from '../app/features/cities/citiesSlice'
import { Link } from 'react-router-dom'

export default function LocationsList() {
  const dispatch = useAppDispatch()
  const savedCities = useAppSelector((state) => state.cities.savedCities)

  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = event.target as HTMLTextAreaElement
    if (target.textContent !== null) {
      dispatch(changeCurrentCity(target.textContent))
      dispatch(fetchWeather(target.textContent))
    }
  }

  return (
    <div className='location'>
      <div className='added-locations'>
        <p>Added Locations:</p>
      </div>

      <div className='locations-container'>
        <ul className='locations-list'>
          {savedCities.map((city) => {
            return (
              <li
                key={city}
                onClick={(event) => {
                  handleClick(event)
                }}
              >
                {city}
              </li>
            )
          })}
        </ul>
      </div>

      <div className='settings-container'>
        <Link to={`/settings`}>Settings</Link>
      </div>
    </div>
  )
}
