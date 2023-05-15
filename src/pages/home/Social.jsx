import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div className="home__social">
        <Link to="https://www.linkedin.com/in/shaheryar-faraz/" className="home__social-icon" target="_blank"> 
        <i class="uil uil-linkedin"></i>
        </Link>
        <Link to="" className="home__social-icon" target="_blank"> 
        <i class="uil uil-dribbble"></i>
        </Link>
         <Link to="https://github.com/shery311" className="home__social-icon" target="_blank"> 
            <i class="uil uil-github-alt"></i>
        </Link>
    </div>
  )
}

export default Social