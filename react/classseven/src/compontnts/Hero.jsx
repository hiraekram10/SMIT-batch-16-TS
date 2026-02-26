import React from 'react'

const Hero = () => {
  return (
    <div className='bg-amber-700 h-screen max-w-6xl mx-auto grid grid-cols-1 gap-x-1 gap-y-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
  <div className='bg-red-500 md:col-span-2 flex'>
    <div className='w-1/2 bg-amber-200'>hello</div>
     <div className='w-1/2 bg-amber-500'>hi</div>
  </div>
  <div className='bg-blue-500'>s</div>
  <div className='bg-yellow-500 '>c</div>
  <div className='bg-purple-500'>c</div>
  <div className='bg-green-500'>x</div>

    </div>
  )
}

export default Hero