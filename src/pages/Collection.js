import React, { useState } from 'react'
import allCollectionData from "../assets/collectionData"
import Item from "./Item"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Collection() {

    const [products] = useState(allCollectionData)
    const [searchedProducts, setSearchedProducts] = useState(allCollectionData)

    function searchItem(e){
        const searchedValue = e.target.value.toLowerCase();
        const filteredSearch = products.filter((product)=>product.name.toLowerCase().includes(searchedValue))
        setSearchedProducts(filteredSearch)
        // console.log(searchedValue)
    }

    const collectionDataAll = searchedProducts.map((collection)=>{
        return <Item key={collection.id}
        name={collection.name}
        image={collection.image}
        desc={collection.desc}
        price={collection.price}
        offer={collection.offer}
        category={collection.category} />
    })

   

  return (
    <div className='collection'>
        <div className='search-bar'>
            <input type='text' placeholder='Search an item' onChange={searchItem} />
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
        <div className='collection-container'>
            {collectionDataAll}
        </div> 
    </div>
  )
}
