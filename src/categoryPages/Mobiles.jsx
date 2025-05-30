import React from 'react'
import mobilePhoneData from "../assets/mobileData"
import Item from '../pages/Item'
import './categories.css'

export default function Mobiles() {

  const allMobiles = mobilePhoneData.map((mobile)=>{
    return(
      <Item 
      key={mobile.id}
      id={mobile.id} 
      name={mobile.name}
      image={mobile.image}
      desc={mobile.desc}
      price={mobile.price}
      offer={mobile.offer}
      />
    )
  })
    
  return (
    <div className='page-container'>
        {allMobiles}
    </div>
  )
}
