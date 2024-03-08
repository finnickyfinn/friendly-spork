import React from 'react'
import Holding from '../assets/Holding.webp'
import Bibble from '../assets/Bibble.jpeg'
import Sneeze from '../assets/Sneeze.jpeg'
import Talk from '../assets/Talk.jpeg'

function Account() {
  return (
    <>
        <div className="avatar placeholder pt-10 pl-44 pb-5">
            <div className="bg-neutral-300 text-neutral-content rounded-full w-24">
                <span className="text-3xl">MK</span>
            </div>
        </div> 
        <div tabIndex={0} className="collapse border border-base-300 bg-slate-300"> 
            <div className="collapse-title text-xl font-medium">
                Past Courses
            </div>
            <div className="collapse-content"> 
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item bg-slate-400 rounded-box">
                        <div className="card w-96 h-96 bg-base-300 shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img src={Bibble} alt="Shoes" className="h-52 rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Keeping Time for Faith</h2>
                                <p>Get ready for another eye-opening experience with hosts...</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="carousel-item bg-slate-400 rounded-box ">
                        <div className="card w-96 h-96 bg-base-100 shadow-2xl">
                                <figure className="px-10 pt-10">
                                    <img src={Holding} alt="Shoes" className="h-52 rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Motivating Yourself</h2>
                                    <p>Being your biggest fan is an essential skill to push...</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                        </div>
                    </div> 
                    <div className="carousel-item bg-slate-400 rounded-box">
                        <div className="card w-96 h-96 bg-base-100 shadow-2xl">
                                <figure className="px-10 pt-10">
                                    <img src={Sneeze} alt="Shoes" className="h-52 rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Work Life Balance</h2>
                                    <p>When you enter the workforce, your life and job become...</p>
                                     <div className="card-actions">
                                        <button className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                        </div>
                    </div> 
                    <div className="carousel-item bg-slate-400 rounded-box">
                        <div className="card w-96 h-96 bg-base-100 shadow-2xl">
                                <figure className="px-10 pt-10">
                                    <img src={Talk} alt="Shoes" className="h-52 rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Effective Communication</h2>
                                    <p>Learn how to properly introduce your original ideas into...</p>
                                    <div className="card-actions">
                                            <button className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        

    </>
  )
}

export default Account