import React from 'react'
import "./ServiceCard.scss"
import { Link } from 'react-router-dom'
export default function ServiceCard(item) {
  return (
    <Link to="/service/123" className='link'>
      <div className='servicecard'>
        <img src={item.img} alt="v" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="v" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="" alt="v" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="" alt="v" />
          <div className="price">
            <span>Starting</span>
            <h2>${item.price}</h2>
          </div>
        </div>


      </div>
    </Link>
  )
}
