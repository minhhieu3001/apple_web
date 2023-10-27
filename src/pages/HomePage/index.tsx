import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import HomeContainer from '../../containers/HomeContainer'

function HomePage() {
  return (
    <MainLayout headerColor='black'>
        <HomeContainer/>
    </MainLayout>
  )
}

export default HomePage