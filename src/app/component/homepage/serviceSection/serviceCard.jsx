import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({services}) => {
    const {title,img,price,_id}=services || {}
  return (
    <div>
    <div className="card bg-white text-black w-96 shadow-xl p-6 rounded-lg">
    <figure>
 <Image src={img} width={340} height={340} className='rounded' alt='imgae'></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p1 className="text-red-500 font-bold">price: <span className='text-xl'>{price}</span></p1>
      <div className="card-actions justify-end">
      <Link href={`/services/${services._id}`}>
      <button className="btn btn-outline btn-error hover:text-white font-bold">View Detail</button>
      
      </Link>
   
      </div>
    </div>
  </div>
    </div>
  )
}

export default ServiceCard
