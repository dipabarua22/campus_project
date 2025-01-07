import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'
import Advisor from './Home_Component/Advisor'
import Scheduling from './Home_Component/Scheduling'


const Home = () => {
  return (
    <>
    <div className='hero container'>
      <div className="Hero-text">
        <h1>Safe and Reliable Transport for Our Students and Staff </h1>
        <p>We take pride in providing a well-organized transport service ensuring a comfortable journey for all students and staff members
        </p>
      </div>  
      <br />
        <button className='btn'>Get started <img src={dark_arrow} alt="" /></button>
    </div>
    <Advisor/>
    <Scheduling/>
    </>
    
  )
}
export default Home
