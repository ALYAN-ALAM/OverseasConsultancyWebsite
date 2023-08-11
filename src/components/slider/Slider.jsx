import React from 'react'
import "./Slider.scss"
import Slider from 'infinite-react-carousel';
export default function Slider() {
  return (
    <div className='slider'>
      <div className="container">
        <Slider dots>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}
