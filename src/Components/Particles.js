import React from 'react'
import './Particles.css'
import forest from './images/darkforest.jpg'


const Particles = () => {
    return (
        <>
           
             <div className='particles' styles={{backgroundImage:`url(${forest})`}}>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        <span ></span>
        </div>
        </>
    )
}

export default Particles
