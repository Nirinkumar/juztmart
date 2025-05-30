import Item from "../pages/Item"
import './fashion.css'
import { useState } from "react"
import fashionData from "../assets/fashionData.js"


export default function Fashion(){

    const [products] = useState(fashionData)
    const [filteredProducts, setFilteredProducts] = useState(fashionData)

    const handleFilter = (cat) => {
    if (cat === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) => item.category === cat);
      setFilteredProducts(filtered);
    }
  };

   

    const fashionCollection = filteredProducts.map((item, index)=>

                <Item key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                desc={item.desc}
                price={item.price}
                offer={item.offer}
                category={item.category} />
            )

    return(
        <div className="fashion-container">
            <div className="fash-catg">
            <div className="fashion-category">
                {['all', 'men', 'women', 'kids'].map((cat) => (
                    <button className="catg-btn" key={cat} onClick={() => handleFilter(cat)}>
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
            </div>

            <div className="item-display">
                {fashionCollection}
            </div>
        </div>
    );
}