import React from 'react'
import './Home.css'
import Navbar from './Navbar'

function Home(){


  return (
<div>
   <Navbar/>
    
        <div className="container">
      
    <div className="content">
        <div className="first">
            MUSIC FOR EVERYONE.
        </div>
        <div className="second">
            Millions of songs.No credit card needed.
        </div>
        <div className="third">
            <button className="btn">Get spotify free</button>
        </div>
    </div>
    
 </div>
 </div>

  )
}

export default Home