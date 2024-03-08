import React from 'react'
import { Link } from "react-router-dom"
import Journal from '../assets/notebook.png'
import Book from '../assets/Book.png'
import HomeB from '../assets/home.png'



function Footer(){
    return(
        <div className="btm-nav bg-zinc-500">
            <Link to='/'>
                <button>
                    <img src={HomeB} className='h-10 w-10'></img>
                </button>
            </Link>
            <Link to='/Challenges'>
                <button className="active">
                    <img src={Book} className="h-10 w-10"></img>
                </button>
            </Link>
            <Link to='/Journal'>
                <button>
                    <img src={Journal} className="h-10 w-10"></img>
                </button>
            </Link>
        </div>
    )
}




export default Footer