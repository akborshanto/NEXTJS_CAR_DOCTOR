'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {

/* userINFO get koarar jnno */
const sesstion=useSession()
console.log(sesstion)

    const navItem=[

{
    path:"/",
    title:"HOME"
},
{
    path:"/about",
    title:"About"
},
{
    path:"/services",
    title:"Sevices"
},
{
    path:"/blog",
    title:"Blog"
},
{
    path:"/contact",
    title:"Contact"
},

    ]
  return (
    <div>
    <div className="navbar container mx-auto bg-white t text-black font-bold  ">
    <div className="navbar-start p-2">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul 
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow ">
          {/* NAVbar */}
          {

            navItem?.map(nav=><Link href={nav.path} className=" uppercase  font-bold text-[16px]  my-2 hover:text-red-500  hover:underline hover:underline-offset-8">{nav.title}</Link>)
        
        
        }

        </ul>
      </div>
     {/* logo */}
<Link href='/'>
<Image alt="LOGO" src="/assets/logo.svg" height={60} width={100} />
      

</Link>

      
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {

    navItem?.map(nav=><Link href={nav.path} className=" uppercase  font-bold text-xl mx-4 hover:text-red-500  hover:underline hover:underline-offset-8">{nav.title}</Link>)


}
      </ul>
    </div>
    <div className="navbar-end">

    <TiShoppingCart  className="bg-red-500 rounded-full text-white  text-[26px] lg:text-4xl p-2 mx-0 lg:mx-2 hover:bg-none hover:text-black" />
    {
      sesstion.data ?  <Link href='/login' className="btn btn-outline text-red-500 hover:bg-red-400 hover:text-white sm:p-2 mx-1 lg:mx-2" title={sesstion.data.user.email}>Log Out</Link> 
      :
      <Link href='/login' className="btn btn-outline text-red-500 hover:bg-red-400 hover:text-white sm:p-2 mx-1 lg:mx-2">Login</Link>
    }
   
      <a className="btn btn-outline text-red-500 hover:bg-red-400 hover:text-white p-2">Appointment</a>
   
    </div>
  </div>
    </div>
  )
}

export default Navbar
