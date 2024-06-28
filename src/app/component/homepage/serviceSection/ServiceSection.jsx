"use client"
import UseTitle from '@/app/hook/UseTitle'
import React, { useEffect, useState } from 'react'

import ServiceCard from './serviceCard.jsx'
import { getServices } from '@/app/provider/getServices.js'

// 
//   }
const ServicesSection =  () => {
// const services = await getServices()

const  [data,setData]=useState([])
useEffect(()=>{
  fetch('http://localhost:3000/services/api/get-all')
.then(res=>res.json())
.then(data=> setData(data.result))

},[])



  return (
    <div>
      <UseTitle  heaidng1={'SERVICE'} title={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "} heading={"Our Service Area"}></UseTitle>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
{
  data.map(services=><ServiceCard services={services}></ServiceCard>)
} 
 

</div> 
<div className="text-center">
<button className=" w-44    my-4 h-16 text-center text-black rounded  hover:bg-[#FF3811cc] hover:text-white border ">Latest Project</button>
</div>
    </div>
  )
}

export default ServicesSection
