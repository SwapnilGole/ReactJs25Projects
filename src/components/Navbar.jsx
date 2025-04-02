import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-500 p-2'>
      <div className='flex m-auto justify-between max-w-7xl items-center'>
        <Link to='/'><h2 >25React Projects</h2></Link>
        <ul className='flex gap-4'>
        <Link to='/'><li className='text-red-500'>Home</li></Link>
          <Link to='/accordian'><li>Accordian</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar