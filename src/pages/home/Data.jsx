import React from 'react'
import { Link } from 'react-router-dom'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Shaheryar Faraz
        </h1>

        <h3 className="home__subtitle">
            Mern Stack Developer
        </h3>
        <p className="home__description">
          Hi, I'm Full Stack (Mern Developer) 
          I build interactive websites that run across the platforms and devices.
        </p>

        <Link to="/contact" className="button">
          Say Hello
        </Link>
       

        
    </div>
  )
}

export default Data