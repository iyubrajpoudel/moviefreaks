import React from 'react'
import "./Home.scss"
import HeroBanner from './hero-banner/HeroBanner'

const Home = () => {
  return (
    <>
    <div className="wrapper">
      <div className="container">
        <section>
          <HeroBanner/>
        </section>
        <section>
          <div className="try" style={{minHeight : `200vh`}}>gibbrish</div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Home