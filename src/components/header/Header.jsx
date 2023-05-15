import { useState } from 'react';
import {HashLink as Link} from "react-router-hash-link";
import './Header.css';
const Header = () => {

    window.addEventListener("scroll", function () {

        const scrollUp = document.querySelector(".header");
          if(this.scrollY >= 80) scrollUp.classList.add("scroll-header");
          else scrollUp.classList.remove("scroll-header");
      });


const[Toggle,setToggle] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Shaheryar</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <Link to='#home' className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </Link>
                        </li>
                      
                        <li className="nav__item">
                        <Link to='#about' className="nav__link">
                            <i className="uil uil-user nav__icon"></i>About
                        </Link>
                        </li>
                        
                        <li className="nav__item">
                            <Link to='#skills' className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </Link>
                        </li>
                        <li className="nav__item">
                        <Link to='#qualification' className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>Qualification
                        </Link>
                        </li>
                        <li className="nav__item">
                        <Link to='#portfolio' className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </Link>
                        </li>
                        <li className="nav__item">
                        <Link to='#contact' className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contact
                        </Link>
                        </li>
                       
                    
                </ul>
                <i className="uil uil-times nav__icon nav__close" onClick={()=> setToggle(!Toggle)} ></i>
            </div>
            <div className="nav__toggle" onClick={()=> setToggle(!Toggle)}>
             <i className="uil uil-apps nav__icon" ></i>
            </div>
        </nav>
    </header>
  )
}

export default Header