import React, { useContext } from 'react'

import { UilMapMarker } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'
import { AuthContext } from '../context/AuthContext'

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <div className='flex flex-col mt-6 gap-4 ml-8 xl:mx-8'>
            <div className='bg-white dark:bg-[color:var(--dark-base)] shadow-md rounded-md overflow-clip relative'>
                <div className='bg-gradient-to-r from-[#a810dba6] to-[#00000094] w-full h-[15vh] xl:h-[20vh] absolute top-0'>
                </div>
                <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full h-[15vh] xl:h-[20vh] object-cover' />

                <div className="flex justify-center -mt-[2.5rem] xl:-mt-[3rem]">
                    <img src={currentUser.profilePic} alt="" className='h-[5rem] xl:h-[6rem] w-[5rem] xl:w-[6rem] object-cover rounded-full shadow-xl z-[999]' />
                </div>

                <div className='flex flex-col gap-1 items-center justify-center mt-6'>
                    <h2 className='text-lg xl:text-xl font-semibold dark:text-[color:var(--dark-text)]'>{currentUser.name}</h2>
                    <h3 className='text-medium text-sm xl:text-base text-gray-500'>Front End Web Developer</h3>
                </div>

                <div className='flex flex-col gap-3 px-4 xl:px-8 my-8'>

                    <div className='grid grid-cols-[1fr_6fr] gap-2 items-center dark:text-[color:var(--dark-text)]'>
                        <UilMapMarker />
                        <p className='break-words text-sm'>Jakarta, Indonesia</p>
                    </div>

                    <div className='grid grid-cols-[1fr_6fr] gap-2 items-center dark:text-[color:var(--dark-text)]'>
                        <UilSuitcaseAlt />
                        <p className='break-words text-sm'>PT Max Solution Indonesia</p>
                    </div>

                </div>

                <div className='flex justify-center items-center mb-6'>
                    <button className='py-3 font-semibold text-sm xl:text-base text-violet-500 hover:text-violet-600 w-full'>
                        Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeftBar