"use client"
import React from "react";
import Image from "next/image";


const Contact = () => {
  return (
    <div className=" p-4 lg:p-8">
      <div className=" bg-black h-[350px] lg:h-[250px] flex gap-4 my-4 rounded-lg flex-col lg:flex-row items-center justify-around ">



        <div className="item text-white font-bold flex gap-4  ">
        <Image src='/assets/icons/check.svg' alt="CLOCK" width={50} height={50}></Image>
          <div className="icon">
          </div>
          <div className="title">
          <h3>We are open monday-friday</h3>
          <h2 className=" text-xl lg:text-2xl font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="item text-white font-bold flex gap-4  ">
        <Image src='/assets/icons/check.svg' alt="CLOCK" width={50} height={50}></Image>
          <div className="icon">
          </div>
          <div className="title">
          <h3>We are open monday-friday</h3>
          <h2 className=" text-xl lg:text-2xl font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="item text-white font-bold flex gap-4  ">
        <Image src='/assets/icons/check.svg' alt="CLOCK" width={50} height={50}></Image>
          <div className="icon">
          </div>
          <div className="title">
          <h3>We are open monday-friday</h3>
          <h2 className=" text-xl lg:text-2xl font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Contact;
