import React from 'react'
import style from "./Gallery.module.css"
import img4 from "../imgs/4.jpg"
import img2 from "../imgs/2.jpg"
import img3 from "../imgs/3.jpg"
import img1 from "../imgs/1.jpg"
import img11 from "../imgs/1.1.png"
import img22 from "../imgs/2.2.png"


export default function Gallery() {
  return (
        <>
<div className={`${style.bg} w-full`}>
    <section className={`${style.back} py-16`}>
        <div className={`text-center text-white px-26 mb-16`}>
          <h1 className='text-4xl font-black text-yellow-500'>Halloween Gallery</h1>
        </div>

      <div className={`text-white px-20  grid grid-cols-4`}>
        <div >
        <h1 className='px-6 text-lg font-black text-yellow-500'>Vampire Sherk</h1>
        <h2 className='px-6 text-base font-bold text-white mb-2'>Special Guest</h2>
        <div className='relative '>
            <img className='w-full h-full' src={img4} alt="" />
          <div className='absolute top-0 right-0 w-full h-full opacity-0 duration-300 hover:opacity-100  bg-violet-950 bg-opacity-75'>
              <div className='flex flex-col items-end p-5'>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>
        </div>

        <div >
        <div className='relative '>
            <img className='w-full h-full' src={img2} alt="" />
          <div className='absolute top-0 right-0 w-full h-full opacity-0 duration-300 hover:opacity-100  bg-violet-950 bg-opacity-75'>
              <div className='flex flex-col items-end p-5'>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>
        <h1 className='px-6 text-lg font-black text-yellow-500'>Tukang Sihir</h1>
        <h2 className='px-6 text-base font-bold text-white mb-2'>Exclusive Guest</h2>
        </div>

        <div >
        <h1 className='px-6 text-lg font-black text-yellow-500'>Horror Fantsma</h1>
        <h2 className='px-6 text-base font-bold text-white mb-2'>Exclusive Guest</h2>
        <div className='relative '>
            <img className='w-full h-full' src={img3} alt="" />
          <div className='absolute top-0 right-0 w-full h-full opacity-0 duration-300 hover:opacity-100  bg-violet-950 bg-opacity-75'>
              <div className='flex flex-col items-end p-5'>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>
        </div>

        <div >
        <div className='relative '>
            <img className='w-full h-full' src={img1} alt="" />
          <div className='absolute top-0 right-0 w-full h-full opacity-0 duration-300 hover:opacity-100  bg-violet-950 bg-opacity-75'>
              <div className='flex flex-col items-end p-5'>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i className="fa-brands fa-facebook-f fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500 mb-5`}><i class="fa-brands fa-twitter fa-lg"></i></button>
              <button className={`${style.threeBtn} text-center border-4 text-yellow-500 border-yellow-500`}><i class="fa-brands fa-linkedin fa-lg"></i></button>
              </div>
          </div>
        </div>
        <h1 className='px-6 text-lg font-black text-yellow-500'>Blooddy Ricker</h1>
        <h2 className='px-6 text-base font-bold text-white mb-2'>Premium Guest</h2>
        </div>
      </div>


        <div className={`text-center text-white px-26 mt-44 mb-16`}>
          <h1 className='text-4xl font-black text-yellow-500'>Halloween Testimonial</h1>
        </div>

        <div className='grid grid-cols-2 gap-5 p-10'>
          <div className='grid grid-cols-2'>
          <div className='flex items-center justify-center'>
              <img className='' src={img11} alt="" />
          </div>
          <div>
              <h1 className='text-lg font-black text-yellow-500 mb-4'>Tukang Shihir</h1>
              <h2 className='text-base font-bold text-white mb-5'>Man Eater</h2>
              <span className='block text-white'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.</span><br />
          </div>
          </div>
         
         <div className='grid grid-cols-2 gap-1'>
          <div className='flex items-center justify-center'>
              <img src={img22} alt="" />
          </div>
          <div>
              <h1 className='text-lg font-black text-yellow-500 mb-4'>Tukang Shihir</h1>
              <h2 className='text-base font-bold text-white mb-5'>Man Eater</h2>
              <span className='block text-white'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.</span><br />
          </div>
        </div>
         </div>

    </section>
</div>
</>
  )
}
