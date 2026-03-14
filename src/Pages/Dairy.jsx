import React from 'react'
import Banner from '../Components/Banner'
import CategoryPage from './CategoryPage'
import bgImg from "../assets/dairy-banner.jpg"; 

const Dairy = () => {
  return (
    <div>
      <Banner title={"Dairy & eggs"} image={bgImg} />
      <CategoryPage categories={["Dairy"]} />
    </div>
  )
}

export default Dairy