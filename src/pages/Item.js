import React from "react"
import './Item.css'
import { Link } from "react-router-dom"

export default function Item(props) {
  return (
    <div className="fashion">
        <div className="men-fashion">
            <div className="card">
            <img src={props.image} alt="img" />
            <h5>{props.name}</h5>
            <p className="desc">{props.desc}</p>
            <p className="price">Rs.{props.price} <span>{props.offer}</span> </p>
            <Link className="item-buy-btn">Buy now</Link>
            <Link className="item-cart-btn">Add to Cart</Link>
            </div>
        </div>
     </div>
  )
}
