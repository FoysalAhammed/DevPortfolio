
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'

import Categories from '@/components/Categories'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { dummyData } from '@/constants'

  const Profiles = async () => {

    const dataa = dummyData;
    return(
        <section className="">
      <Navbar/>
      <Categories />
        <section className='flexCenter flex-col max-w-10xl w-full mx-auto paddings'>
        <section className="flexBetween max-lg:flex-col gap-10 w-full">
            <div className='flex items-center flex-col w-full'>
                <Image src="/profile01.jpg" width={200} height={200} className="rounded-[50%] border-dotted border-2 border-red-500 " alt="user image" />
                <p className=" text-[30px] lg:text-4xl md:text-4xl hero-text font-bold mt-10">Md Foysal Ahammed</p>
                <p className="md:text-4xl  text-3xl font-extrabold md:mt-6 mt-5 max-w-lg"> Web Developer👋</p>
                
                <div className="flex mt-8  justify-around gap-5 w-full flex-wrap">
                    <Button 
                        title="Follow" 
                        leftIcon="/plus-round.svg" 
                        bgColor="bg-light-white-400 !w-max" 
                        textColor="text-black-100" 
                    />
                    <Link href={`mailto:hanif.mia2233@gmail.com`}>
                        <Button title="Hire Me" leftIcon="/email.svg" />
                    </Link>
                </div>
            </div>
                <Image
                    src="/profile-posttt.png"
                    width={739}
                    height={554}
                    alt="project image"
                    className='rounded-xl'
                />
          
       </section>

       <section className="flexStart flex-col lg:mt-28 mt-16 w-full">     
      <p className="w-full text-left text-lg font-semibold">Recent Work</p>
      <section className="projects-grid ">
      {
         dataa.projects.map((datas) => (
            <ProjectCard
            key={datas.id}
            id={datas.id}
            image={datas?.image}
            title={datas?.title}
            name={"Foysal Ahammed"}
            avatarUrl={"/profile01.jpg"}
            userId={""}
          />
         ))
       }
      </section>

    </section>
   </section>
   <Footer/>
   </section>
)
        }

export default Profiles