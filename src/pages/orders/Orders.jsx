import React from 'react'
import "./Orders.scss"
import { Link } from 'react-router-dom'
export default function Orders() {
  
    const currentUser={
      id:"1",
      username: "khawar",
      isConsultant: true
  }

  
  return (
    <div>
        <div className="orders">
          <div className="container">
            <div className="title">
              <h1>Orders</h1>
              
            </div>
            <table>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                {<th>{currentUser.isConsultant ? "Consultant" : "Student"}</th>}
                <th>Contact</th>
              </tr>
              <tr>
                <td>
                  <img className='img' src="" alt="v" />
                </td>
                <td>UK</td>
                <td>88</td>
                <td>789</td>
                <td>
                  <img className='delete' src="" alt="message" />
                </td>

              </tr>

              
              <tr>
                <td>
                  <img className='img' src="" alt="v" />
                </td>
                <td>UK</td>
                <td>88</td>
                <td>789</td>
                <td>
                  <img className='delete' src="" alt="message" />
                </td>

              </tr>

              
              <tr>
                <td>
                  <img className='img' src="" alt="v" />
                </td>
                <td>UK</td>
                <td>88</td>
                <td>789</td>
                <td>
                  <img className='delete' src="" alt="message" />
                </td>

              </tr>

              
              <tr>
                <td>
                  <img className='img' src="" alt="v" />
                </td>
                <td>UK</td>
                <td>88</td>
                <td>789</td>
                <td>
                  <img className='delete' src="" alt="message" />
                </td>

              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}
