import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";



const Backend = () => {

    useEffect(() =>{
        AOS.init({
          duration:600,
          delay:150
        });
     },[])

  return (
    <div className="skills__content" data-aos="slide-up">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                <h3 className="skills__name">Node Js</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                <h3 className="skills__name">Express Js</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Postman</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Rest Api</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend