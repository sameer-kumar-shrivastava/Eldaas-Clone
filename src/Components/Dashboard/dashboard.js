import React from 'react';
import './dashboard.css';
import Video from './vdio.mp4'

const Dashboard = () => {
    return(<>
    <div className='dashboard-container'>
    <video loop autoPlay muted className='dashboard-video'>
        <source
          src={Video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h1 className='dashboard-title'>We envision creation of a world of <br/> Intelligent Products</h1>
      <p className='dashboard-desc'>The world in the coming decades of 21st century will be a world with intelligent products which can make decisions like human beings. Our vision is to contribute significantly to the creation of this new way of life. Our offerings are innovated to create decision making machines, products, and solutions.</p>
      <button className='dashboard-button'>Explore Our Offerings</button>
        </div>

    
    </>)
} 
export default Dashboard;