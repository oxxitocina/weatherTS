import React from 'react'
import NowTab from '../../../components/NowTab'
import DetailsTab from '../../../components/DetailsTab'
import ForecastTab from '../../../components/ForecastTab'
import LoadingTab from '../../../components/LoadingTab'
import { useSelector } from 'react-redux'

interface NavbarState {
  navbar: {
    currentTab: string
  }
}

interface CitiesState {
  cities: {
    loading: 'loading' | 'idle' | 'rejected'
  }
}

export default function renderTabs() {
  const currentTab: string = useSelector((state: NavbarState) => state.navbar.currentTab)
  const loading: 'loading' | 'idle' | 'rejected' = useSelector(
    (state: CitiesState) => state.cities.loading,
  )

  function renderCurrentTab() {
    if (loading === 'loading') {
      console.log('rendering loading tab')
      return <LoadingTab />
    } else {
      switch (currentTab) {
        case 'now-tab':
          return <NowTab />
        case 'details-tab':
          return <DetailsTab />
        case 'forecast-tab':
          return <ForecastTab />
      }
    }
  }

  return <>{renderCurrentTab()}</>
}
