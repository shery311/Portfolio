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
        I'm a passionate Full Stack MERN Developer with a keen interest in blockchain technology. 
        I'm excited to leverage these skills to revolutionize the digital landscape
        </p>

        <Link to="/contact" className="button">
          Say Hello
        </Link>
       

        
    </div>
  )
}

export default Data