import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UilEllipsisH } from '@iconscout/react-unicons'
import { UilCommentDots } from '@iconscout/react-unicons'
import { UilShare } from '@iconscout/react-unicons'

import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'
import Comments from '../components/Comments'

const PostItem = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false)

    const liked = false

    return (
        <div className='bg-white dark:bg-[color:var(--dark-base)] py-6 mx-3 md:mx-5 px-6 rounded-md shadow-md'>

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={post.profilePic} className='h-[2.5rem] w-[2.5rem] rounded-full object-cover' />
                    <div className=''>
                        <Link to={`/profile/${post.userId}`}>
                            <h3 className='text-sm font-semibold dark:text-[color:var(--dark-text)]'>{post.name}</h3>
                        </Link>
                        <p className='text-xs font-medium text-gray-500'>1 min ago</p>
                    </div>
                </div>
                <UilEllipsisH height='20' width='20' className='dark:text-[color:var(--dark-text)]' />
            </div>

            <div className='mt-5'>
                <img src={post.img} className='rounded-md object-cover h-[25rem] w-full' alt="" />

                <div className='flex items-center gap-5 mt-4'>
                    {
                        liked
                            ? <RiHeart3Fill className='cursor-pointer h-8 w-8 text-red-500' />
                            : <RiHeart3Line className='hover:text-violet-500 cursor-pointer h-8 w-8 dark:text-[color:var(--dark-text)] dark:hover:text-violet-500' />

                    }
                    <UilCommentDots
                        onClick={() => setCommentOpen(!commentOpen)}
                        height='29'
                        width='29'
                        className='hover:text-violet-500 cursor-pointer dark:text-[color:var(--dark-text)] dark:hover:text-violet-500' />

                    <UilShare height='31' width='31' className='hover:text-violet-500 cursor-pointer dark:text-[color:var(--dark-text)] dark:hover:text-violet-500' />
                </div>

                <div className='mt-2 text-sm text-gray-500'>
                    127 likes
                </div>

                <div className='mt-4 dark:text-[color:var(--dark-text)]'>
                    <p className='text-base'>
                        <Link to={`/profile/${post.userId}`}>
                            <span className='text-base font-semibold'>{post.name} </span>
                        </Link>
                        {post.desc}
                    </p>
                </div>
                
                {/* && mean is if it is true */}
                {commentOpen && <Comments/>}
            </div>

        </div>
    )
}

export default PostItem