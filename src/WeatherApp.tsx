import React from 'react'
import { AppLayout } from './layout/AppLayout'
import { HomePage } from './pages/HomePage'

export const WeatherApp = () => {
  return (
    <>
        <AppLayout >
            <HomePage />
        </AppLayout>
    </>
  )
}
