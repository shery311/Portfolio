import React, { useState,useEffect } from 'react'
import { projectData } from './Data'
import { projectNav } from './Data'
import { WorksItems } from './WorksItems'

const Works = () => {

 const[item,SetItem]= useState({name:'all'});
 const[projects,SetProjects]= useState([]);
 const[active,SetActive]= useState(0);

 useEffect(() => {
    if(item.name === "all")  {
        SetProjects(projectData);
    }else{
        const newProjects = projectData.filter((project) =>{
            return project.category === item.name;
        });
        SetProjects(newProjects);
    }
 
 },[item]);

const handleClick = (e,index) => {

    SetItem({name:e.target.textContent});
    SetActive(index);
};


  return (
    <>
        <div className="work__filters">
        {projectNav.map((item,index) => {
            return (
                <span onClick={(e)=>{
                    handleClick(e,index)
                }} 
                className={`${active === index ? "active-work" : ''} work__item`} key={index}>
                    {item.name}
                </span>
            )
        })} 
    </div>

    <div className="work__container container grid">
        {projects.map((item) => {
              return(
                <WorksItems  item={item} key={item.id}/>
              )

        })}
    </div>
    
    </>
  )
}

export default Works