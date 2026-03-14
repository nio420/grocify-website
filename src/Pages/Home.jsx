import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Values from '../Components/Values'
import Products from '../Components/Products'
import Discount from '../Components/Discount'
import Process from '../Components/Process'
import Testimonial from '../Components/Testimonial'
import SectionReveal from '../Components/SectionReveal'

const Home = () => {
  return (
    <>
     <SectionReveal delay={0.5} direction="down" amount={0.8}> <Hero/></SectionReveal>
      <Category/>
     <SectionReveal delay={0.03} direction="left" amount={0.8}> <Values/></SectionReveal>
      <Products/>
      <SectionReveal delay={0.03} direction="down" amount={0.8}> <Discount/></SectionReveal>
      <SectionReveal delay={0.03} direction="down" amount={0.8}> <Process/></SectionReveal>
      <SectionReveal delay={0.03} direction="down" amount={0.8}> <Testimonial/></SectionReveal>
    </>
  )
}

export default Home