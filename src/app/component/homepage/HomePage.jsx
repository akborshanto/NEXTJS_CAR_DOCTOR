import React from 'react'
import Banner from './banner/Banner'
import About from './about/About'
import ServiceSection from './serviceSection/ServiceSection'

import Product from './productSecton/Product'
import Team from './teamSection/Team'
import Feture from './feture/Feture'
import Testimonial from './testimonial/Testimonial'
import Contact from './contactSection/Contact'

const HomePage = () => {
  return (
    <div className='  bg-white text-black font-semibold font-serif '>

      <Banner></Banner>
      <About></About>
     <ServiceSection></ServiceSection>
     <Contact></Contact>
     <Product></Product>
     <Team></Team>
     <Feture></Feture>
     <Testimonial></Testimonial>

    </div>
  )
}

export default HomePage
