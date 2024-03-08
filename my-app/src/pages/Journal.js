import React from 'react'


function Journal() {
    return(
    <>
        <div className='pt-10 pl-20 content-center'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn pl-28 pr-28" onClick={()=>document.getElementById('my_modal_1').showModal()}>Write an Entry</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-slate-500">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">2/9/2024</span>
                            <span className="label-text-alt">12:00pm</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="What's on your mind?"></textarea>
                    </label>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            <div className="card bg-base-100 grid grid-cols-2 grid-rows-3 gap-4 pr-14 pt-10 pb-5">
                <button className="btn">Morning Mindset</button>
                <button className="btn">Goals</button>
                <button className="btn">Growth Prompts</button>
                <button className="btn">Weekly Review</button>
                <button className="btn">Monthly Review</button>
                <button className="btn">View All Logs</button>
            </div>

        </div>
        <div className="collapse collapse-arrow bg-slate-200">
            <input type="radio" name="my-accordion-2" checked="checked" /> 
            <div className="collapse-title text-xl font-medium">
                January 2024
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-200">
        <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                December 2023
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
        </div>
            <div className="collapse collapse-arrow bg-slate-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                November 2022
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
        </div>
    </>

    )
}








export default Journal