import React from 'react';
import './featured.css';
import Desk from './desk.jpg';
import Img1 from './img4.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Expo from './expo.png';
import Footer from '../Footer/footer';

import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://eldaas.com/wp-content/uploads/2021/08/AI-for-Beginners_Cover.jpg"},
    { url: "https://eldaas.com/wp-content/uploads/2021/08/AI-for-Beginners_Cover.jpg"},
  
  ];

  const images2 = [
    
    { url: Img2},
    { url: Img3},
    
  
  ];


const Featured = () => {
    return(<>
    <div className='featured-container'>
    <div className='featured-strip'></div>
        <h1 className='featured-title'>Featured Resources</h1>
        <div className='featured-image-container'>
        <img className='featured-image' src={Desk} alt="Office" />
        <div className='featured-image-slider'>        
        <SimpleImageSlider
        autoPlay={true}
        width={508}
        height={304}
        images={images}
        showBullets={true}
        showNavs={false}
      />
      </div>
      <div className='featured-contact'>
          <h2>&#128240; Subscribe For More Free Featured Resources !</h2>
          <h4>Please submit your email address and subscribe</h4>
          <input type="text" placeholder="email" />
          <button>Subscribe</button>
      </div>
    </div>
    <div className='featured-image-slider2'>
    <SimpleImageSlider
        autoPlay={true}
        width={1400}
        height={500}
        images={images2}
        showBullets={true}
        showNavs={true}
      />    
    </div>
    <div className='featured-looking'>
        <h1>What are you looking for?</h1>
        <span>
            <button>Artificial Intelligence Products</button>
            <button>Cost Effective RADARS</button>
            <button>FPGA Design</button>
            <button>eISom-SDR</button>
            

        </span>    
        </div>
        <img className='featured-expo' src={Expo} alt="expo" />  
        <div className='featured-join'>
          <img src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt="Join Us"/>
          <h1>Join our Team<br/>Explore the Opportunities</h1>
          <p>Dream come true opportunity for those who aspire as high as a CXO!​<br/>Passion and perseverance alone can carry you there.​​<br/>We are a young startup in AI, with 11 years of design experience. Vast scope for growth awaiting you here.​</p>
          <button>Explore Careers</button>
        </div>
        <Footer />             
    </div> </>);
}
export default Featured;
