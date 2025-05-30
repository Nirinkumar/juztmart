import React from 'react'
import "./categories.css"
import cosmeticsAllData from "../assets/cosmeticData"
import Item from '../pages/Item'

export default function Cosmetics() {

    const allCosmeticsData = cosmeticsAllData.map((cosmetic)=>{
        return(
            <Item 
            key={cosmetic.id}
            id={cosmetic.id} 
            name={cosmetic.name}
            image={cosmetic.image}
            desc={cosmetic.desc}
            price={cosmetic.price}
            offer={cosmetic.offer}
            />
        )
    })
  return (
    <div className='page-container'>
        {allCosmeticsData}
    </div>
  )
}
