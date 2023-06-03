import { MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTab } from '../app/features/navbar/navbarSlice'

export default function Navbar() {
  const dispatch = useDispatch()

  function handleClick(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    const target = e.target as HTMLTextAreaElement
    const currentTab = target.id
    dispatch(changeTab(currentTab))
  }

  return (
    <div className='navigator'>
      <button
        onClick={(e) => {
          handleClick(e)
        }}
        id='now-tab'
      >
        Now
      </button>
      <button
        onClick={(e) => {
          handleClick(e)
        }}
        id='details-tab'
      >
        Details
      </button>
      <button
        onClick={(e) => {
          handleClick(e)
        }}
        id='forecast-tab'
      >
        Forecast
      </button>
    </div>
  )
}
