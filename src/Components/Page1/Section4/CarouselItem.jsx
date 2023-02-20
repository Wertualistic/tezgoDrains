import React from 'react'

export const CarouselItem = ({img}) => {
  return (
    <div className='carousel-item inline-flex items-center'>
        <img src={img} alt="" className='w-[549px]'/>
    </div>
  )
}
