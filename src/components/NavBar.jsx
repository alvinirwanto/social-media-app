import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '../img/Logo1.png'

import { UilEstate } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { DarkModeContext } from '../context/DarkModeContext'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext)

    const { currentUser } = useContext(AuthContext)

    return (
        <div className='fixed md:sticky bottom-0 md:top-0 w-full'>
            <div className='w-full bg-white dark:bg-[color:var(--dark-base)] rounded-t-md shadow-md px-8 py-6 md:py-4 flex justify-between'>
                <div className='flex gap-[3.5rem] md:gap-8 xl:gap-6 items-center'>
                    <div className="hidden md:flex gap-3 items-center">
                        <img src={LogoIcon} className='h-5 w-5' alt="logo" />
                        <h1 className='hidden xl:block text-violet-700 font-bold text-base'>AL Social.</h1>
                    </div>
                    <Link to='/'>
                        <UilEstate height='21' width='21' className=' hover:text-violet-500 dark:text-white dark:hover:text-violet-500 scale-125 xl:scale-100' />
                    </Link>
                    {
                        darkMode ?
                            <UilSun
                                onClick={toggle}
                                height='23'
                                width='23'
                                className='cursor-pointer hover:text-violet-500 dark:text-white dark:hover:text-violet-500  scale-125 xl:scale-100'
                            />
                            :
                            <UilMoon
                                onClick={toggle}
                                height='23'
                                width='23'
                                className='cursor-pointer hover:text-violet-500 dark:text-white dark:hover:text-violet-500' />
                    }
                    {/* <UilApps height='20' width='20' /> */}
                </div>

                <div className='hidden md:flex gap-6 items-center'>
                    <div className='flex items-center gap-3 border-2 border-gray-500 rounded-md px-2 py-1'>
                        <UilSearch height='19' width='19' className='dark:text-white' />
                        <input type="text" placeholder='Search' className='focus:outline-none text-base w-[30vh] xl:w-[25vw] dark:bg-[color:var(--dark-base)] dark:text-white' />
                    </div>
                </div>
                

                {/* Button search when for mobile version */}
                <div className='gap-6 flex md:hidden items-center'>
                    <UilSearch height='21' width='21' className='cursor-pointer hover:text-violet-500 dark:text-white dark:hover:text-violet-500 scale-125' />
                </div>


                <div className='flex gap-[3.5rem] md:gap-8 xl:gap-6 items-center'>
                    <UilEnvelope height='23' width='23' className='cursor-pointer hover:text-violet-500 dark:text-white dark:hover:text-violet-500 scale-125 xl:scale-100' />
                    {/* <UilBell height='23' width='23' /> */}
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img src={currentUser.profilePic} className='h-8 w-8 rounded-full object-cover' alt="" />
                        <p className='hidden xl:block dark:text-white text-sm'>{currentUser.name}</p>
                    </div>
                </div>
            </div>


            {/* Mobile Version */}
            {/* <div className='w-full bg-white custom-shadow px-8 py-6 flex justify-between md:hidden'>
                <Link to='/' >
                    <UilEstate className='active:text-violet-500' />
                </Link>
                <UilMoon className='hover:text-violet-500' />
                <UilSearch className='hover:text-violet-500' />
                <UilEnvelope className='hover:text-violet-500' />
                <UilUser className='hover:text-violet-500' />
            </div> */}
        </div>
    )
}

export default NavBar