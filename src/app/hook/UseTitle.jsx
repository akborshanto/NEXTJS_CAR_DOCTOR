import React from 'react'

const UseTitle = ({heaidng1,heading,title}) => {
  return (
    <div className='text-center my-6 font-bold '>
      <h1 className="text-red-500 text-2xl">{heaidng1}</h1>
    <h1 className="my-5 text-3xl lg:text-4xl">{heading}</h1>
    <p className="my-4 mt-4  text-[14px] lg:text-[18px] text-gray-500 mx-auto lg:w-[600px]">{title}</p>
    </div>
  )
}

export default UseTitle
