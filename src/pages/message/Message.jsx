import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
export default function Message() {
  return (
    <div>
        <div className="message">
          <div className="container">
            <span className="breadcrumbs">
              <Link to="/messages">Messages</Link> - Khawar
            </span>
            <div className="messages">
              <div className="item">
                <img src="/img/consulatant.jpg" alt="" />
                <p>Hello I need consultancy for UK </p>
              </div>
              <div className="item owner">
                <img src="/img/consulatant.jpg" alt="" />
                <p>Ok sir please share the details </p>
              </div>
              <div className="item">
                <img src="/img/consulatant.jpg" alt="" />
                <p>Hello I need consultancy for UK </p>
              </div>
              <div className="item owner">
                <img src="/img/consulatant.jpg" alt="" />
                <p>Ok sir please share the details </p>
              </div>
              <div className="item">
                <img src="/img/consulatant.jpg" alt="" />
                <p>Hello I need consultancy for UK </p>
              </div>
              <div className="item owner">
                <img src="/img/consulatant.jpg" alt="" />
                <p>Ok sir please share the details </p>
              </div>
            </div>
            <hr/>
            <div className="write">
              <textarea  name="" placeholder='write message' id="" cols="30" rows="10"></textarea>
              <button>Send</button>
            </div>

          </div>
        </div>
    </div>
  )
}
