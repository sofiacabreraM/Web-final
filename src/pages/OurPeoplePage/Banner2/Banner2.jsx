import React from 'react';
import './Banner2.css'
import vector from "../../../../public/imgs/vectorBanner2.png"
function Banner2() {
  return (
    <div className='General-Div-Banner2'>
     <div className='Contenido'>
        <h1>WANT TO DISCUSS A PROJECT</h1>
        <button>Lets work together</button>
     </div>
     <div className='vector-Container'>
     <img src={vector} alt="vector" className='vector' />
     </div>
    </div>
  );
}

export default Banner2;
