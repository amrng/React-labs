import React from 'react'
import style from "./Contact.module.css"

export default function Contact() {
  return (
    <>
<div className={`${style.bg} w-full position-relative `}>

    <section className={`${style.sec} grid grid-cols-2 container`}>
        <div className={`${style.back}`}></div>
        <div className={`text-center text-white mt-32 h-2/3`}>
          <h1 className='text-4xl font-black text-yellow-500 mb-14'>Signup For Newsletter</h1>

          <div className='mb-14'>
          <input type="text" className={`${style.inp} w-3/4`}/>
          <button className={`${style.btn} bg-yellow-500 w-1/4`}>Subscribe</button>
          </div>

           <div>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 me-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 me-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>

        </div>
    </section>
</div>
</>
  )
}
