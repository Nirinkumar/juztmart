import React from 'react'
import homeFurnitureData from "../assets/furniture"
import Item from '../pages/Item'
import './categories.css'

export default function Furniture() {

  const allHomeFurniture = homeFurnitureData.map((furniture)=>{
    return(
      <Item 
      key={furniture.id}
      id={furniture.id} 
      name={furniture.name}
      image={furniture.image}
      desc={furniture.desc}
      price={furniture.price}
      offer={furniture.offer}
      />
    )
  })
    
  return (
    <div className='page-container'>
        {allHomeFurniture}
    </div>
  )
}