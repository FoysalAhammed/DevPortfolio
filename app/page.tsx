
import AboutBranding from "@/components/AboutBranding";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";

import Navbar from "@/components/Navbar";
import NewsSlider from "@/components/NewsSlider";
import ProjectCard from "@/components/ProjectCard";
import ServiceBanner from "@/components/ServiceBanner";
import SlidGallery from "@/components/SliderGallery";
import { dummyData } from "@/constants";




export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = async () => {

  const dataa = dummyData;

  if (dataa.projects?.length === 0) {
    return (
 <>
      <section className="md:bg-[url('/bg_main.svg')] bg-center bg-cover lg:bg-[url('/bg_main.svg')] xl:bg-[url('/bg_main.svg')]  ">
      <Navbar/>
      <Categories />
      <Hero/>
    <section className="flexStart flex-col paddings mb-16 ">
    <p className="no-result-text text-center">Comming Soon New Projects</p>
    </section>
    
    </section>
     <NewsSlider/>
     <AboutBranding/>
     <SlidGallery/>
     <ServiceBanner/> 
     <JoinUs/>
    <Footer/>  
 </>
    )
  }
  
  return (
<>
<section className=" ">
      <Navbar/>
      <Categories />
      <Hero  />
    <section className="flexStart flex-col   paddings mb-16 ">
      <section className="projects-grid  ">
                {
         dataa.projects.map((datas) => (
            <ProjectCard
            key={datas.id}
            id={datas.id}
            image={datas?.image}
            title={datas?.title}
            name={"Foysal Ahammed"}
            avatarUrl="/profile01.jpg"
            userId={""}
          />
         ))
       }
      </section>
    </section>
    
    </section>

     <NewsSlider/>
     <AboutBranding/>
     <SlidGallery/>
     <ServiceBanner/> 
     <JoinUs/>
    <Footer/>  
</>
  )
};

export default Home;
