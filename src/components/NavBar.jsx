import React from 'react'
import Logo from '../MovieLogo.png'
import  {Link}  from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo}/>
        <Link to='/' className='text-black-500 text-3xl  font-bold'>Movies</Link>
        <Link to='/Watchlist' className='text-black-500 text-3xl font-bold'>WatchList</Link>
    </div>
  )
}

export default NavBar