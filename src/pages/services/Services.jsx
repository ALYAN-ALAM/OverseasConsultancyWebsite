import React, { useState } from 'react'
import "./Services.scss"
import {gigs} from "../../data"
import ServiceCard from "../../components/servicecard/ServiceCard"
export default function Services() {
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
    <div>
      <div className="services">
        <div className="container">
          <span className="breadcrumbs">STUDY ABROAD - UK</span>
          <h1>UK waly</h1>
          <p>Explore UK consultancy</p>
          <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input type="text" placeholder='min' />
              <input type="text" placeholder='max' />
              <button>Apply</button>
            </div>
            <div className="right">
              <span className="sortBy">Sort By</span>
              <span className="sortType">{sort === "sales" ? "Best consulant" : "new consultant"}</span>
              <img src="" alt="v" onClick={() => { setOpen(!open) }} />
              {open && (<div className="rightMenu">
                {sort === "sales" ? <span onClick={() => { reSort("createdAt") }}>New Consultant</span>
                  : <span onClick={() => { reSort("sales") }}>Best consulants</span>}
              </div>)}
            </div>

          </div>
          <div className="cards">
            {gigs.map((service)=>(
              
              <ServiceCard key={service.id} item={service}/>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
