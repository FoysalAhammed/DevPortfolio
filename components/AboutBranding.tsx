import React from 'react'

const AboutBranding = () => {
  return (
    <>
        <section className="pt-[60px] mb-[60px] ">
        <div className="branding_container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="mx-auto hero-text2  max-w-xs  text-[34px] xl:text-[36px] text-center items-center leading-[46px] text-headingColor font-[600] md:text-[36px] md:leading-[70px]">
                  We Work Globally We Think Globally
                </h1>
                <p className="mx-auto max-w-xs text-body-5 text-metal-600 md:max-w-lg md:text-body-3 mb-[60px]">
                Explore boundless possibilities by thinking globally and working globally with our innovative solutions. Our website demo showcases how seamlessly our products and services transcend geographical boundaries, empowering your business on a global scale. From integrated collaboration tools to adaptive interfaces, experience the future of global connectivity. Join us in embracing a world without limits, where your vision knows no borders. Take the first step towards a global presence and discover the transformative potential of our offerings.
                </p>
              </div>
              <div className="mt-[30px] items-center justify-center lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] hero-text leading-[56px] lg:text-[44px] lg:leading-[54px] font-[600] text-headingColor">
                    5+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                  <p className="text_pera"> Years Of Experience </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] hero-text2  lg:text-[44px] lg:leading-[54px] font-[600] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-600  rounded-full block mt-[-14px]"></span>
                  <p className="text_pera">Country Clients</p>
                </div>
                <div>
                  <h2 className="text-[36px] hero-text  leading-[56px] lg:text-[44px] lg:leading-[54px] font-[600] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-[#008035] rounded-full block mt-[-14px]"></span>
                  <p className="text_pera">Client Satisfaction </p>
                </div>
              </div>
            </div>
            <div className="flex move-2 gap-[30px] justify-end items-center">
              <div className="sm:ml-5 md:ml-5">
                <img className="w-full rounded-xl" src="/project6.png" alt="" />
              </div>
              <div className="mt-[30px]">
                <img src="/project1.png"alt="" className="w-full rounded-xl mb-[30px]" />
                <img src="/project2.png" alt="" className="w-full rounded-xl" />
              </div>
              <div className="mt-[-30px]">
                <img src="/project5.png"alt="" className="w-full rounded-xl mb-[30px]" />
                <img src="/project3.png" alt="" className="w-full rounded-xl mb-[30px]" />
                <img src="/project4.png" alt="" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutBranding
