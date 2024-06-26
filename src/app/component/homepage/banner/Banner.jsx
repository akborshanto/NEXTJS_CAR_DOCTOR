import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div>
 {/*      <Image alt='BANNER' src='/assets/images/banner/1.jpg' width={600} height={600}/>
 */}

      <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/assets/images/banner/1.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing </h1>
          <p className="mb-5">
          There are many variations of passages of  available, but the majority have suffered alteration in some form
          </p>
        <button className="bg-[#FF3811] w-44 hover:bg-[#FF3811cc] h-16 text-center text-white rounded mx-5">Discover More</button>
        <button className=" w-44 border h-16 text-center text-white rounded hover:bg-[#FF3811cc]">Latest Project</button>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Banner
const banner=[
    {
        title:"A car, or an automobile, is a motor vehicle with wheels. ",
        descriptioN:"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they"
        ,next:"#slide2",
        prev:"#slid4"
    },



    {
        title:"A car, or an automobile, is a motor vehicle with wheels. ",
        descriptioN:"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they"
        ,next:"#slide3",
        prev:"#slide1"
    },
    {
        title:"A car, or an automobile, is a motor vehicle with wheels. ",
        descriptioN:"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they"
        ,next:"#slide4",
        prev:"#slid2"
    },
    {
        title:"A car, or an automobile, is a motor vehicle with wheels. ",
        descriptioN:"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they"
        ,next:"#slide1",
        prev:"#slide3"
    },
]