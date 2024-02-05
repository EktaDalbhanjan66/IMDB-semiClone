import React from 'react'


function Pages({NextpageFn,PreviouspageFn,pageNumber}) {
  return (
    <div className='bg-gray-500 w-full h-[50px] mt-8 flex justify-center items-center '>
        <div onClick={PreviouspageFn} className='px-8 cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={NextpageFn} className='px-8 cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pages