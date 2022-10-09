import React from 'react'
import Heander from '../../Heander/Heander';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './Home.css';

function Home() {
  return (
    <>
      <Heander />
      <div className='home'>
      <Posts />
      <Sidebar />
      </div>
      
    </>
  )
}

export default Home
