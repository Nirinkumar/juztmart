import React from 'react'
import toysMoreData from "../assets/toys"
import Item from '../pages/Item'
import './categories.css'

export default function Toys() {

  const allToyData = toysMoreData.map((toy)=>{
    return(
      <Item 
      key={toy.id}
      id={toy.id} 
      name={toy.name}
      image={toy.image}
      desc={toy.desc}
      price={toy.price}
      offer={toy.offer}
      />
    )
  })
    
  return (
    <div className='page-container'>
        {allToyData}
    </div>
  )
}