import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const Comments = () => {

    const { currentUser } = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <div>
            <div>
                <img src={currentUser.profilePic} alt="" />
            </div>
            {
                comments.map(comment => {
                    return (
                        <div className='mt-6 grid grid-cols-[1fr_9fr] items-start'>
                            <img src={comment.profilePicture} alt="" className='h-[2.5rem] w-[2.5rem] rounded-full object-cover' />

                            <div className='flex flex-col items-start '>
                                <span className='font-semibold text-sm dark:text-[color:var(--dark-text)]'>{comment.name}</span>
                                <p className='text-sm break-words dark:text-[color:var(--dark-text)]'>{comment.desc}</p>
                                <span className='text-xs font-medium text-gray-500 mt-2'>1 hour age</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments