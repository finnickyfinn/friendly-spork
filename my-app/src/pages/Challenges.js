import React from 'react'
import Wealthy from '../assets/Wealthy.webp'
import Speaking from '../assets/Speaking.jpeg'
import WLB from '../assets/WLB.png'
import Networking from '../assets/Networking.webp'



function Challenges() {
  return (
    <div className="grid gap-5 grid-cols-1 grid-rows-1 pt-5 pl-10">
        <div className="card card-compact w-96 pl-15 bg-base-200 shadow-2xl">
            <figure><img src={Wealthy} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Wealthy Lifestyle Skills</h2>
                <p>Learn the everyday skills of the wealthy with John Jones!</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Take Course</button>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96 bg-base-200 shadow-2xl">
            <figure><img src={Speaking} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Public Speaking & You</h2>
                <p>Have you ever wondered about the ins and out of public speaking? Go over them today to Marcus Brown!</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Take Course</button>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96 bg-base-200 shadow-2xl">
            <figure><img src={WLB} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Working a Lively Life</h2>
                <p>After working for a long time it becomes difficult to separate who you are at work vs home, this course aims to give tips to avoid that.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Take Course</button>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96 bg-base-200 shadow-2xl">
            <figure><img src={Networking} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Networking Nitpicks</h2>
                <p>Hear from top level CEO's on what they generally like and look for during times of networking</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Take Course</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Challenges