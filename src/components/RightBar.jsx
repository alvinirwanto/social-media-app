import React from 'react'
import TrendsItem from '../common/TrendsItem'

const RightBar = () => {
    return (
        <div className='flex flex-col gap-4 ml-8 xl:mx-8'>
            <div className='flex flex-col gap-6 rounded-md bg-white dark:bg-[color:var(--dark-base)] shadow-md w-full px-4 xl:px-9 py-9 mx-auto mt-6'>
                <h3 className='text-lg font-semibold dark:text-[color:var(--dark-text)]'>Trends for you</h3>
                <div className='flex flex-col gap-4'>
                    <TrendsItem where='Indonesia' hashtag='#InstagramDown' share='90K' />
                    <TrendsItem where='Indonesia' hashtag='#Itaewon' share='121K' />
                    <TrendsItem where='Indonesia' hashtag='#ReactJS' share='10K' />
                    <TrendsItem where='Indonesia' hashtag='#KPOP' share='50K' />
                </div>
            </div>
            <button className='w-full bg-violet-500 border-2 border-violet-500 text-white py-3 shadow-md rounded-md hover:bg-transparent hover:text-violet-500 duration-200'>
                Share Post
            </button>
        </div>
    )
}

export default RightBar