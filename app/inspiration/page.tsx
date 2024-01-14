import Categories from '@/components/Categories'
import FaqList from '@/components/FaqList'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
const Inspiration = () => {
  return (
    <>
      <section className="bg-[url('/bg_main.svg')] bg-cover bg-center  ">
      <Navbar/>
      <Categories />
      <div className="relative z-10 mx-auto max-w-2xl text-center ">
            <h1 className="mb-5 text-description-3 font-semibold leading-8 md:leading-[3rem] text-black-100 md:text-heading-5 text-[25px] md:text-[30px] lg:text-[40px] lg:leading-[66px]">
              <span className="hero-text"> Positive Motivational Inspirational Quotes By Some philosophers </span>  
        
            </h1>
            <p className="mx-auto max-w-xs text-body-5 text-metal-600 md:max-w-lg md:text-body-3 mb-[60px] ">
            Two of the most important characteristics of good design are discoverability and understanding.
            </p>
            {/* <p className="mx-auto max-w-xs text-body-5 text-metal-600 md:max-w-lg md:text-body-3 mb-[60px] ">
              Unlocking the Power of Code to Transform Your Ideas into Stunning
              Web Realities.
            </p> */}
            {/* <div className=" mt-5 mb-10 flex flex-col items-center justify-center gap-5 md:flex-row">
              <a
                href=""
                className=" bg-black h-min w-fit justify-center rounded-md border border-metal-900  bg-metal-900 px-4 py-2.5 text-center text-body-5 font-medium capitalize text-white transition-all duration-75 ease-in  hover:bg-metal-800 focus:ring-4 focus:ring-metal-800 active:bg-metal-900"
              >
                Profile Page 
              </a>
            </div> */}
          </div>
     <section className='w-[50%] mx-auto mb-8'>
     <FaqList/>
     </section>
    <Footer/>
     </section>
    </>
  )
}

export default Inspiration