import React from 'react'
import { Link } from "react-router-dom"
import './home.css'

export default function PageList(props) {
  return (
    <div className="categories">
        <div className="category-list">
            <Link to={props.link} className='category-link'>
            <img src={props.image} alt="img" />
            <p>{props.name}</p>
            </Link>
        </div>
    </div>
  )
}
