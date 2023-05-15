import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
const Frontend = () => {

    useEffect(() =>{
        AOS.init({
          duration:600,
          delay:150
        });
     },[])

  return (
    <div className="skills__content"  data-aos="slide-up">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Advance</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Advance</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Advance</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend