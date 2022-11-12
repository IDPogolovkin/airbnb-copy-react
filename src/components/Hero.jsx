import React from 'react'
import style from '../style.css'

const Hero = (props) => {
  return (
          <section className="hero">
            <link rel="stylesheet" href={style}></link>
            <img src={props.img} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
  )
}

export default Hero