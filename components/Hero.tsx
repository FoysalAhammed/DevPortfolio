import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <section className="hero pt-7 capitalize space-y-20 first:pt-14 last:pb-20 md:first:pt-20 lg:space-y-30 md:bg-[url('/bg_main.svg')] bg-center bg-cover lg:bg-[url('/bg_main.svg')] xl:bg-[url('/bg_main.svg')] ">
        <div className="hero-area">
          <div className="relative z-10 mx-auto max-w-2xl text-center ">
            <h1 className="mb-5 text-description-3 font-semibold leading-8 md:leading-[3rem] text-black-100 md:text-heading-5 text-[25px] md:text-[45px] lg:text-[56px] lg:leading-[66px]">
              <span className="hero-text"> Empowerfull </span> <br /> Web Development With{" "}
              <span className="hero-text block"> Foysal Ahammed </span>
            </h1>
            <p className="mx-auto max-w-xs text-body-5 text-metal-600 md:max-w-lg md:text-body-3 mb-[60px] ">
            Two of the most important characteristics of good design are discoverability and understanding.
            </p>
          </div>
          <div className="relative -z-0 mt-[-4rem]  items-center justify-center lg:flex">
            <img
              src="/herohero.jpg"
              className="color:transparent"
              alt=""
              width="1400"
              height="720"
            />
          </div>
        </div>
      </section>
      <section className="hero mt-10 space-y-20 first:pt-14 last:pb-20 md:first:pt-20 lg:space-y-30">
        <div className="hero-area">
          <div className="relative z-10 mx-auto max-w-2xl text-center ">
            <h1 className="hero-text mb-3 text-description-3 font-semibold leading-8  text-black-100 md:text-heading-5 lg:text-[56px] lg:leading-[66px]">
            Showcasing the Art of Web Development {" "}
            </h1>
            <p className="mx-auto max-w-xs text-body-5 text-metal-600 md:max-w-lg md:text-body-3">
              Unlocking the Power of Code to Transform Your Ideas into Stunning
              Web Realities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
