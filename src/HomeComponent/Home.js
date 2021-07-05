import React from 'react'
import './Home.css'
import HomeHeader from './HomeHeader'
import HomeInformation from './HomeInformation'
import HomeSearch from './HomeSearch'
import HomeFotter from './HomeFotter'

const spacing = {
  marginBottom: "25px"
}

function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeInformation />
      <HomeSearch />
      <div style={spacing}></div>
      <HomeFotter />
      {/* Get-top-rated movies then use the id to get images and details from get-details and then use get-plots for further information also use get-genre */}
    </React.Fragment>
  )
}

export default Home
