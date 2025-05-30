import React from 'react'
import "./categories.css"
import accessoriesAllData from "../assets/accessories"
import Item from '../pages/Item'

export default function Accessories() {

    const allAccessoriesData = accessoriesAllData.map((accessory)=>{
        return(
            <Item 
            key={accessory.id}
            id={accessory.id} 
            name={accessory.name}
            image={accessory.image}
            desc={accessory.desc}
            price={accessory.price}
            offer={accessory.offer}
            />
        )
    })
  return (
    <div className='page-container'>
        {allAccessoriesData}
    </div>
  )
}
