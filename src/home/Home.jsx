import React from 'react'
import style from './Home.module.css'

export default function Home() {
  return (
<>
<div className={`${style.bg} w-full`}>

    <section className={`grid grid-cols-2 gap-14 container mx-20`}>
        <div className={`${style.back}`}></div>
        <div className={`text-center text-white mt-32`}>
          <h4 className='text-3xl font-bold mb-3'>31th octobar 2018</h4>
          <h1 className='text-6xl font-black text-yellow-500 mb-3'>Halloween Party</h1>
          <span className=''>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</span><br />
          <button className={`${style.btn} text-center bg-yellow-500 text-violet-950 mt-14 font-black text-2xl`}>Explore More</button>
        </div>
    </section>
</div>
</>
  )
}
