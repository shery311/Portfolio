import "./qualification.css";

const Qualification = () => {

  return (
    
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Experience</h2>
      <div className="main-div">
      <div className="qualification__container container">
        <div className="box-container left">
         <div className="text-box">
            <h2>CLOUD PRIMERO</h2>
            <small>2018-2019</small>
            <p>WEB DEVELOPER  
            </p>
            <span className='left-arrow'></span>
            
         </div>
         <span className='left-dot1'></span>
        </div>

        <div className="box-container right">
         <div className="text-box">
            <h2>TRADEMOR MARKETING </h2>
            <small>2020-2021</small>
            <p>TEAM LEAD - ACCOUNT PERFORMANCE & MANAGEMENT (ALIBABA INC)
            </p>
            <span className='right-arrow'></span>
         </div>
         <span className='right-dot1'></span>
        </div>

        <div className="box-container left">
         <div className="text-box">
            <h2>Zaviya Solutions</h2>
            <small>2022-2023</small>
            <p> React Developer 
            </p>
            <span className='left-arrow'></span>
            
         </div>
         <span className='left-dot2'></span>
        </div>

        {/* <div className="box-container right">
         <div className="text-box">
            <h2>Alpha Inc</h2>
            <small>2021-2023</small>
            <p>the success of every wevsite depends on search engine optimization and digital marketing strategy.
                If you are on first page of all major search..
            </p>
            <span className='right-arrow'></span>
         </div>
         <span className='right-dot2'></span>
        </div> */}
      </div>
      </div>
 </section>
 
  )
}

export default Qualification