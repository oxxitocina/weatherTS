import { useEffect } from 'react'
import SearchForm from './components/SearchForm'
import Navbar from './components/Navbar'
import LocationsList from './components/LocationsList'
import renderTabs from './app/features/utils/renderTabs'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from './app/features/cities/citiesSlice'
import { useAppDispatch, useAppSelector } from './app/hooks/hooks'

function App() {
  const dispatch = useAppDispatch()
  const currentCity = useAppSelector((state) => state.cities.currentCity)

  useEffect(() => {
    dispatch(fetchWeather(currentCity))
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <SearchForm />

        <div className='grid-container'>
          <div className='main-tab'>
            {renderTabs()}
            <Navbar />
          </div>
          <LocationsList />
        </div>
      </div>
    </div>
  )
}

export default App
