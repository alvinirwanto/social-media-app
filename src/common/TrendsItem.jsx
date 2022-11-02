import React from 'react'

const TrendsItem = (props) => {
    return (
        <div className='p-2'>
            <p className='text-gray-500 text-xs xl:text-sm pb-1 font-medium'>Trending in {props.where}</p>
            <p className='text-black dark:text-[color:var(--dark-text)] text-sm xl:text-base font-semibold'>{props.hashtag}</p>
            <p className='text-gray-400 text-xs xl:text-sm'>{props.share} Shares</p>
        </div>
    )
}

export default TrendsItem