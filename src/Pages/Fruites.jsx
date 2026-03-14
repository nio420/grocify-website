import React from 'react'
import Banner from '../Components/Banner'
import CategoryPage from './CategoryPage'
import bgImg from "../assets/fruits-banner.jpg"; 

const Fruites = () => {
  return (
    <div>
      <Banner title={"Fruits & vegetables"} image={bgImg} />
      <CategoryPage categories={["Fruits", "Vegetables"]} />
    </div>
  )
}

export default Fruites