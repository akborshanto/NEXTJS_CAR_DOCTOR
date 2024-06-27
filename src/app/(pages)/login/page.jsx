"use client"
import Image from 'next/image'
import React from 'react'
import { FaGooglePlusG ,FaFacebookSquare, FaGithub} from "react-icons/fa";

import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';


const Login = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    const form=e.target;
    const user={

      email:form.email.value,
      password:form.password.value
    }



  }
  return (
    <div>
    <div className="hero bg-white  text-black ">
    <div className="hero-content   flex-col-reverse lg:flex-row lg:justify-between gap-8">
      <div className="text-center lg:text-left">
   
       <Image src='/assets/images/login/login.svg' alt='image' width={500} height={500}></Image>
      </div>
      <div className="card bg-white  w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl lg:text-3xl font-bold  text-red-500 text-center  animate-pulse my-5">Login now!</h1>
        <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
        <label className="label">
          <span className="label-text"> Email</span>
        </label>
        <input name='email' type="email" placeholder="email" className="input hover:border-red-500 text-black bg-white" required />
        
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">  Password</span>
        </label>
        <input name='password' type="password" placeholder="password" className="input hover:border-red-500 text-black bg-white" required />
        
      </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-white  text-xl my-3">Sign In</button>
            <p className='font-bold text-center my-2'>or Sign In with</p>
          </div>
        </form>
<div className=' text-red-500  animate-bounce text-4xl flex justify-center items-center gap-4 my-2'>
<FaGooglePlusG  className='text-5xl'/>
<FaGithub />
</div>

<h3 className='text-center font-bold text-xl my-4'>            Have an account? <span className='font-bold text-red-500'> <Link href='/register'>Sign In</Link></span>

</h3>



      </div>
    </div>
  </div>
    </div>
  )
}

export default Login
