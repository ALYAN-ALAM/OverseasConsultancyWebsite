import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
export default function Messages() {
  
    const currentUser={
      id:"1",
      username: "khawar",
      isConsultant: true
  }
  const message = "I need Consultancy for UK"
  
  return (
    <div>
        <div className="messages">
          <div className="container">
            <div className="title">
              <h1>Messages</h1>
              
            </div>
            <table>
              <tr>
                <th>Consultant</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              <tr>
                <td className='active'>
                  Khawar
                </td>
              <td> <Link to="/message/12" className='link'>{message.substring(0,70)}...</Link></td>
                <td>1 Day ago</td>
                <td>
                  <button>Mark as read</button>
                </td>
                

              </tr>

              
              <tr>
                <td className='active'>
                  Khawar
                </td>
              <td> <Link to="/message/12" className='link'>{message.substring(0,70)}...</Link></td>
                <td>1 Day ago</td>
                <td>
                  <button>Mark as read</button>
                </td>
                

              </tr>

              
              <tr>
                <td>
                  Khawar
                </td>
              <td> <Link to="/message/12" className='link'>{message.substring(0,70)}...</Link></td>
                <td>1 Day ago</td>
                
                

              </tr>

              
              <tr>
                <td>
                  Khawar
                </td>
              <td> <Link to="/message/12" className='link'>{message.substring(0,70)}...</Link></td>
                <td>1 Day ago</td>
                
                

              

              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}
