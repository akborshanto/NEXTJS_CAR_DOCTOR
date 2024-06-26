import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto'>
    <footer className="footer text-white font-bold font-serif p-10">
    <nav>
      <h6 className="footer-title text-red-500 lg:text-xl font-bold">Services</h6>
      <a className="hover:text-red-500 hover:underline ">Branding</a>
      <a className="hover:text-red-500 hover:underline ">Design</a>
      <a className="hover:text-red-500 hover:underline ">Marketing</a>
      <a className="hover:text-red-500 hover:underline ">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title text-red-500 lg:text-xl font-bold">Company</h6>
      <a className="hover:text-red-500 hover:underline ">About us</a>
      <a className="hover:text-red-500 hover:underline ">Contact</a>
      <a className="hover:text-red-500 hover:underline ">Jobs</a>
      <a className="hover:text-red-500 hover:underline ">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title text-red-500 lg:text-xl font-bold">Legal</h6>
      <a className="hover:text-red-500 hover:underline -red">Terms of use</a>
      <a className="hover:text-red-500 hover:underline ">Privacy policy</a>
      <a className="hover:text-red-500 hover:underline ">Cookie policy</a>
    </nav>
  </footer>
    </div>
  )
}

export default Footer

