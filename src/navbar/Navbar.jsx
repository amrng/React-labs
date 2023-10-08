import React from 'react'
import { Link } from 'react-router-dom'
import hat from "../imgs/hat.png"

export default function Navbar() {
  return (
    <>
<nav className="bg-violet-950 w-full z-40">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
        <div className="flex flex-shrink-0 items-center">
          <Link to={""}>
          <img className="h-10 w-auto hover:shadow-yellow-500 z-50" src={hat} alt="Your Company" />
          </Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link to={""} className="text-white hover:bg-yellow-500 rounded-md px-3 py-2 fw-bold">Home</Link>
            <Link to={"about"} className="text-white hover:bg-yellow-500 rounded-md px-3 py-2 fw-bold ">About Party</Link>
            <Link to={"gallery"} className="text-white hover:bg-yellow-500 rounded-md px-3 py-2 fw-bold ">Gallery</Link>
            <Link to={"contact"} className="text-white hover:bg-yellow-500 rounded-md px-3 py-2 fw-bold ">Contact</Link>
          </div>
        </div>
        <div className='hidden sm:ml-6 sm:block'>
        <div className="drop flex flex-shrink-0 items-center text-white">
            <Link to={""} className="text-white hover:bg-yellow-500 rounded-md px-3 py-2 fw-bold "><i class="fa-solid fa-bars fa-lg"></i></Link>
        </div>
        </div>
      </div>
    </div>
  </div>

</nav>


    
    
    </>
  )
}
