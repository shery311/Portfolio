import React from 'react'


export const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
     <img src={item.image} alt="" className='work__img'/>
     <h3 className="work__title">{item.title}</h3>
     <a href={`${item.link}`} target='_blank' rel="noreferrer" className="work__button">
        Demo <div className="i bx bx-right-arrow-alt work__button-icon"></div>
     </a>
    </div>
  )
}
