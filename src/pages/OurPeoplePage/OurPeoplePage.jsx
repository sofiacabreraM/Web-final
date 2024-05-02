import React from 'react';
import './OurPeoplePage.css'
import Banner from './Banner/Banner'
import Cards from './Cards/Cards';
import Banner2 from './Banner2/Banner2';
import Biografia from './Biografias/Biografias';


import Image1 from '../../../public/imgs/OurPeople/img-caro.png'; 
import Image2 from '../../../public/imgs/OurPeople/img-lina.png'; 
import Image3 from '../../../public/imgs/OurPeople/img-maria.png'; 
import Image4 from '../../../public/imgs/OurPeople/img-sofy.png'; 


function OurPeople() {
  return (
    
    <div className='General-div'>
    <div className='banner1'>
    <Banner></Banner>
    </div>
    <div className="ImageContainer">
    <img src={Image3}/>
        <img src={Image4}/>
        <img src={Image1}/>
        <img src={Image2}/>
        
      </div>
      <div className='parrafo1'>
         <p>Our services encompass a wide spectrum of creative solutions, ranging from web design and app 
            development to graphic design, brand creation, and strategic positioning. Whether you're launching 
            a new brand, revamping an existing one, or seeking to enhance your online presence, we are here to
             bring your vision to life</p>
             <p className='parrafo2'>
             Our team is composed of strategic thinkers, creative minds, and visionaries who are passionate about 
             delivering exceptional results. We don't just design for the sake of aesthetics; we design for impact.
             By combining creativity with strategy, we ensure that every project we undertake is not only visually 
             stunning but also aligns with your goals and resonates with your audience.
             </p>
             <button className='read-more'>
               Read More
             </button>
       </div >
       <div className='Conatiner-Card'>
       <Cards></Cards>
      <div className='button-Container'>
      <button>Lets work together</button>
        </div></div>
        <div className='our-Vision'>
          <h4>Our vision</h4>
          <p>
          Our passion for creativity merges with a deep empathy towards the needs
          of our clients and their audiences. We are committed to delivering top-quality 
          results through collaboration, integrity, and a constant quest for innovation.
          Guided by dedication to excellence, we value continuous learning and passion
          in every project we undertake. These values are the essence of our work, driving
          each design we create and every solution we offer.
          </p>
        </div>
        <Biografia></Biografia>
        <Banner2></Banner2>
       
    </div>
   
  );
}

export default OurPeople;