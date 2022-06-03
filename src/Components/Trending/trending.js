import React from 'react';
import './trending.css';
import TrendingImg from './trending1.jpg';

const Trending = () =>{
    return(
    <>
    <div className='trending-container'>
        <div className='trending-background'></div>
         <img className='trending-image' src={TrendingImg} alt="Trending"/> 
        <div className='trending-tag'></div>
        <h1 className='trending-title'>Top Trending!</h1>
        <h3 className='trending-subtitle'>Explore latest Updates...</h3>
        <p className='trending-desc'>Follow the Latest News, Articles, Blogs & Events from ELDAAS here!</p>
        <div className='trending-news-container'>
            <div className='trending-news1'>
                <span className='trending-news-date'>&#128197; 2020 | 2021</span>
                  <span className='trending-news-p'>
                    <p>Events: <strong>elCONNECT</strong> – Initiative to Collaborate with Colleges​ to​ build AI…<span className='blue-link'>Know More</span><br/>
                     <strong>elAIt 2021</strong> – The novel AI hunt of 2021…<span className='blue-link'>Know More</span><br/>
                    Launch of AI Powered range of elSoMs and more…<span className='blue-link'>Know More</span></p>
                </span>
            </div>
            <div className='trending-news2'>
                <span className='trending-news-date'>&#128197; 16/08/2021</span>
                <span className='trending-news-p1'>
                    <p>Blog: Choosing a System on Module is not an option it’s an opportunity… <span className='blue-link'>Read More</span></p>
                </span>
            </div>
            <div className='trending-news3'>
                <span className='trending-news-date'>&#128197; 2020 | 2021</span>
                <span className='trending-news-p2'>
                    <p>Article: EDGE AI is nothing but a technological combination of two words,<br/> where AI algorithm is processed…<span className='blue-link'>Read More</span></p>
                </span>
            </div>
            <div className='trending-news4'>
                <span className='trending-news-date'>&#128197; 2020 | 2021</span>
                <span className='trending-news-p3'>
                    <p>Blog: Considerations for high-frequency designs beyond 20GHz…<span className='blue-link'>Read More</span></p>
                </span>
            </div>

        </div>
    </div>

    </>);
}
export default Trending;