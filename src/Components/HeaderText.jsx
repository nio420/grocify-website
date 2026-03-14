import React from 'react'

const HeaderText = ({text1, text2}) => {
  return (
    <div className='w-fit mx-auto'>
        <h2 className='md:text-5xl text-4xl font-bold'>
            <span className='text-orange-500'>{text1}</span> {text2}
        </h2>
        <div className='w-34 h-1 bg-orange-300 md:mt-4.5 mt-3 ml-auto'/>  
    </div>
  )
}

export default HeaderText