import Link from 'next/link'
import React from 'react'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';


const Navbar = async () => {
  const {getUser} = getKindeServerSession()
  const user = await getUser()

  return (
  <nav className='py-5 flex items-center justify-between bg-gray-100 flex-wrap overflow-x-hidden'>
   
   <div className='flex items-center gap-6'>
      <Link href='/'>
      <h1 className='ml-4 text-2xl md:text-4xl font-semibold'>Blog with <span className='text-blue-600'>Aayush</span></h1>
      </Link>
   </div>
   
   <div className='flex items-center gap-6 flex-wrap'>
      <Link href='/' className='text-lg md:text-2xl font-semibold'>Home</Link>
      <Link href='/dashboard' className='text-lg md:text-2xl font-semibold'>Dashboard</Link>
   </div>
   
   {user ? (
       <div className='mr-6 flex flex-col md:flex-row items-center gap-4 md:gap-6'>
        <p className='text-sm md:text-base'>{user.given_name}</p>
        <LogoutLink>
          <button className='border-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-900 cursor-pointer'>Logout</button>
        </LogoutLink>
       </div>
   ) : (
       <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
          <LoginLink>
            <button className='border-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer'>Login</button>
          </LoginLink>
          <RegisterLink>
            <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer mr-4'>Register</button>
          </RegisterLink>
       </div>
   )}
  </nav>
  )
}

export default Navbar