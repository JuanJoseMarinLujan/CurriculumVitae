import React from 'react'

function WorksItems({item}) {
  return (
    <div key={item.id} className="work__card">
      <img src={item.image} alt="" className='work__img'/>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} className="work__button" target="_blank">Ver <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
    </div>
  )
}

export default WorksItems