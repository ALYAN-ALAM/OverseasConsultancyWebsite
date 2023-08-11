import React from 'react'
import "./Service.scss"

export default function Service() {
  return (
    <div>
      <div className="service">
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">STUDY ABROAD - UK</span>
            <h1>UK waly</h1>
            <div className="user">
              <img className='pp' src="/img/consulatant.jpg" alt="" />
              <span>Khawar Bajwa</span>
              <div className="stars">
                <img src="/img/star.jpg" alt="" />
                <img src="/img/star.jpg" alt="" />
                <img src="/img/star.jpg" alt="" />
                <img src="/img/star.jpg" alt="" />
                <img src="/img/star.jpg" alt="" />
                <span>5</span>
              </div>
            </div>
            <div className="pic">
              <img src="/img/service.png" alt="" />
            </div>
            <h1>About this Service</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iure neque possimus tenetur magni sunt labore omnis dolor debitis consectetur, eos consequatur voluptatem laborum aliquam cum, molestias excepturi eaque veniam!</p>

            <div className="consultant">
              <h1>About Consultant</h1>
              <div className="user">
                <img src="/img/consulatant.jpg" alt="" />
                <div className="info">
                  <span>Khawar Bajwa</span>
                  <div className="stars">
                    <img src="/img/star.jpg" alt="" />
                    <img src="/img/star.jpg" alt="" />
                    <img src="/img/star.jpg" alt="" />
                    <img src="/img/star.jpg" alt="" />
                    <img src="/img/star.jpg" alt="" />
                    <span>5</span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From </span>
                    <span className="desc">UK</span>

                  </div>
                  <div className="item">
                    <span className="title">Language </span>
                    <span className="desc">English</span>

                  </div>
                  <div className="item">
                    <span className="title">Member Since </span>
                    <span className="desc">August 2023</span>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="right">

            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img className='pp' src="/img/consulatant.jpg" alt="" />
                  <div className="info">
                    <span>khawar bajwa</span>
                    <div className="country">
                      <img src="/img/pak.png" alt="" />
                      <span>Pakistan</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.jpg" alt="" />
                  <img src="/img/star.jpg" alt="" />
                  <img src="/img/star.jpg" alt="" />
                  <img src="/img/star.jpg" alt="" />
                  <img src="/img/star.jpg" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil maxime hic quidem non aperiam mollitia voluptatibus reprehenderit distinctio? Natus eum ab provident sequi? Officiis quam nam, maxime voluptatum eaque quaerat?</p>
              </div>
            </div>
            <div className="pricebox">
              <div className="price">
                <h3>UK Study visa</h3>
                <h2>$ 50</h2>
              </div>
              <p>UK visa is available Hurry up limited seats available</p>
              <div className="details">
                <div className="item">
                  <span>Visa process in 6 days</span>
                </div>
                <div className="item">
                  <span>Refundable fee</span>
                </div>
              </div>
              <div className="feat">
                <div className="item">
                  <img src="" alt=">" />
                  <span>Offer Letter</span>
                </div>
                <div className="item">
                  <img src="" alt=">" />
                  <span>File Completion</span>
                </div>
                <div className="item">
                  <img src="" alt=">" />
                  <span>Block Account</span>
                </div>
              </div>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
