"use client"
import {useState} from 'react';
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai" 
import Navbar from './Navbar';

const FaqCard = ({item}:any) => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }
  return (
 <section>
       <div className='  p-3 lg:p-5 rounded-[12px] border border-solid border-[#b84c3e] mb-5 cursor-pointer '>
        <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
            <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                {item.question}
            </h4>
            <div className={`${isOpen && "bg-[#b84c3e] text-white border-none"} w-7  h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
                {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </div>
        </div>
        {
            isOpen && <div className="mt-4">
                <p className="text-[14px] leading-5 lg:text-[16px] first-line:lg:leading-7 font-[400] text-textColor">
                    {item.content}
                </p>
            </div>
        }
        
    </div>
 </section>
  )
}

export default FaqCard