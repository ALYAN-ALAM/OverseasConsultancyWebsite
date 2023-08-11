import React from 'react'
import "./Featured.scss"
export default function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the right Consultancy service, right away</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="" alt="" />
                        <input type="text" placeholder='Search Consultancy Service'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular Searches:</span>
                    <button>Canada</button>
                    <button>UK</button>
                    <button>Australia</button>
                    <button>Germany</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/istockphoto-177046273-612x612-removebg-preview.png" alt="" />
            </div>

        </div>
    </div>
  )
}
