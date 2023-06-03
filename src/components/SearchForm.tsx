import * as React from 'react'
import { useState, useMemo } from 'react'
import { useAppDispatch } from '../app/hooks/hooks'
import { fetchWeather, changeCurrentCity } from '../app/features/cities/citiesSlice'

export default function SearchForm() {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()

  function changeInputValue(event: { target: { value: React.SetStateAction<string> } }) {
    setValue(event.target.value)
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    dispatch(changeCurrentCity(value))
    dispatch(fetchWeather(value))
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        value={value}
        onChange={changeInputValue}
        id='city-name'
        className='search-input'
        type='text'
      />
      <button type='submit' className='search-btn'></button>
    </form>
  )
}
