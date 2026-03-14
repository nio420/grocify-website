import React from 'react'
import CategoryPage from './CategoryPage'
import Banner from '../Components/Banner'
import bgImg from '../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <Banner title={"Meat & seafood"} image={bgImg} />
      <CategoryPage categories={["Seafood"]}  />
    </div>
  )
}

export default Seafood