"use client"
import { getSingleServices } from '@/app/provider/getServices'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const ServiceDetails = ({params}) => {


const  [data,setData]=useState('')
useEffect(()=>{
  fetch(`http://localhost:3000/services/api/${params.id}`)
.then(res=>res.json())
.then(data=> setData(data.result))

},[])

const {_id,title,price,img,description,facility}=data || {}

  return (
    <div>
      SE$Rvice dtails

<h1>{data.title}</h1>
<Image src={img} alt='image' width={500} height={500}></Image>
<h3>{price}</h3>
<p>{description}</p>


{/* facilty */}

{
  facility?.map(facility=>
<div>

<h1>{facility.name}</h1>
<p>{facility.details}</p>
</div>


  )
}


    </div>
  )
}

export default ServiceDetails
