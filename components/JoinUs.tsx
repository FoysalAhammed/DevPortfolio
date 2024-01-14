import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const JoinUs = () => {
  return (
    <>
        <section className=' containerr overflow-hidden pb-[40px]'>
            <div className="flex p-8 flex-col md:px-8 md:py-10 lg:flex-row lg:items-center lg:gap-0 lg:px-28 lg:py-12 items-start justify-between gap-5 rounded-md bg-[url('https://staticmania.cdn.prismic.io/staticmania/59c3bc39-d8bc-4382-80e9-db3c7f10230d_community.svg')] bg-cover bg-center bg-no-repeat">
          <div>
          <div className="flex justify-around items-center text-[35px] ">
           <a href='https://www.facebook.com/foysal7788' className='md:p-6 lg:p-6 xl:p-6 padingforsmall  text-[#316FF6] p-6 rounded-[50%] bg-white bg-opacity-30 '>
           <FaFacebookSquare className="" />
           </a>
           <a href='https://github.com/FoysalAhammed' className=' md:p-6 lg:p-6 xl:p-6 padingforsmall  text-[#2b3137] p-6 rounded-[50%] bg-white bg-opacity-30 '>
           <FaGithubSquare className="" />
           </a>
           <a className='text-[#0077b5] md:p-6 lg:p-6 xl:p-6 padingforsmall  rounded-[50%] bg-white bg-opacity-30 '>
           <FaLinkedinIn className="" />
           </a>
           
           <a href='/' className='text-[#d14266]  p-6 rounded-[50%] md:p-6 lg:p-6 xl:p-6 padingforsmall  bg-white bg-opacity-30 '>
           <FaInstagramSquare className="" />
           </a>
            
            </div>
            <div>
            <h2 className="mt-2 text-description-3 font-bold leading-[50px] tracking-[-1px] text-[50px] text-white md:text-description-2 lg:text-heading-5 hero-text2 md:hero-text lg:hero-text xl:hero-text">  Join the community </h2>
              <p className="max-w-sm text-body-5 font-normal text-white md:text-body-4">Become a member of a community of developers by supporting </p>
            </div>
          </div>
             <div className="">
                <a href="https://github.com/FoysalAhammed" className="flex items-center gap-2 rounded-md hover:bg-[#292c30]  bg-black px-4 py-2.5 text-body-5 text-white hover:bg-metal-800 md:px-6 md:py-3 md:text-body-4">
                  See Github Repository
                  <FaArrowTrendUp />
                  </a>
             </div>
          
            </div>
        </section>
    </>
  )
}

export default JoinUs


