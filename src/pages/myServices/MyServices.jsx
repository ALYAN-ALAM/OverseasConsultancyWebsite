import React from 'react'
import "./MyServices.scss"
import { Link } from 'react-router-dom'
export default function MyServices() {
  return (
    <div>
        <div className="myServices">
          <div className="container">
            <div className="title">
              <h1>Services</h1>
              <Link to="/add">Add new service</Link>
            </div>
            <table>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <img className='img' src="" alt="v" />
                </td>
                <td>UK</td>
                <td>88</td>
                <td>789</td>
                <td>
                  <img className='delete' src="" alt="delete" />
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
                  <img className='delete' src="" alt="delete" />
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
                  <img className='delete' src="" alt="delete" />
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
                  <img className='delete' src="" alt="delete" />
                </td>

              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}
