import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Features from '../../components/features/Features'

export default function Home() {
  return (
    <>
      
        <div className="home">
          <Featured/>
          <Features/>
        </div>
      
    </>
  )
}
