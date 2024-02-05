import React from 'react'


function Journal() {
    return(
        <div className='pt-10 pl-20 content-center'>
            <input type="text" placeholder="Write About Your Day" className="input input-bordered input-primary w-full max-w-xs" />
            <div className="card bg-base-100 grid grid-cols-2 grid-rows-3 gap-4 pr-14 pt-10">
                <button className="btn">Morning Mindset</button>
                <button className="btn">Goals</button>
                <button className="btn">Growth Prompts</button>
                <button className="btn">Weekly Review</button>
                <button className="btn">Monthly Review</button>
                <button className="btn">View All Logs</button>
            </div>

        </div>

    )
}


// Make a pop up modoal for journal entry, find new icon, add jounral to dropdown menu, add list of all recent entries 






export default Journal