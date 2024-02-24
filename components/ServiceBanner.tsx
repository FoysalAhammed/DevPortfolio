import React from "react";

const ServiceBanner = () => {
  return (
    <section className="hero w-[95%] mt-[1rem] capitalize space-y-20 first:pt-14 last:pb-20 md:first:pt-20 lg:space-y-30">
      <div className=" mx-auto mt-[50px] mb-[50px]  items-center justify-around">
        <div className="flex  items-center justify-between flex-col lg:flex-row">
          <div className="w-[100%] move-2 flex xl:w-[670px] items-center justify-center  capitalize">
            <img
              src="/chatimage.webp"
              className="    w-full  lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 "
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] items-center m-auto justify-center  capitalize">
            <h1 className=" mb-6 text-center md:text-[50px] font-bold hero-text text-[25px]">
              Our 24/7 Client Service{" "}
            </h1>
            <p className="mx-auto max-w-xs pl-7 pr-7 text-body-5 text-metal-600 md:max-w-lg md:text-body-3 mb-[60px] text-[#7c8e9a] md:text-body-3 ">
              Our customer service operates 24/7, ensuring round-the-clock
              assistance for our valued customers. Our dedicated support team is
              committed to providing timely and effective solutions, no matter
              the time of day. With continuous availability, we strive to
              deliver exceptional service and address inquiries promptly. <br />
              <strong>Contact: +880 1778-821588</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
