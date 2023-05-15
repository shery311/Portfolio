import React from 'react'
import"./home.css"
import Social from './Social'
import Data from './Data';
import ScrollDown from './ScrollDown';
import animate from "../../assets/animate.json";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
                
                {/* <div className="home__img"></div> */}
                <div className="animate">
               <Lottie 
               animationData={animate}
               />
               </div>
                <Data/>
             
                
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home