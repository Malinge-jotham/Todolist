import React from 'react'

function Contact() {
  return (
    <div className="text-center max-w-[600px] mx-auto mt-10">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-sm leading-7 text-gray">
          Subcibe to our email in order to fet the latest updates and new services
        </p>
        <form
          
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="text-sm text-gray-400 bg-Teal sm:p-3 p-2 shadow-md font-bold">
            Subscribe
          </button>
        </form>
      </div>
   
  )
}

export default Contact