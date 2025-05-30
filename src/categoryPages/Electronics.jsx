import React from 'react'
import './categories.css'
import electronicsAllData from "../assets/electronicData"
import Item from '../pages/Item'

export default function Electronics() {

    const allElectronicsData = electronicsAllData.map(((elec)=>{
        return(
            <Item 
            key={elec.id}
            id={elec.id}
            name={elec.name}
            image={elec.image}
            desc={elec.desc}
            price={elec.price}
            offer={elec.offer}
            />
        )
    }))

  return (
    <div className='page-container'>
        {allElectronicsData}
    </div>
  )
}
