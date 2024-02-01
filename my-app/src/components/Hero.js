import React from 'react'
import Hero1 from '../assets/Sunrise.jpeg'



function Hero() {
    return(
<div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Hero1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Good Morning!</h2>
    <p>"When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love."   - Marcus Aurelius</p>
  </div>
</div>
    )
}








export default Hero