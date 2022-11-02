import React from 'react'
import Posts from '../components/Posts'

const Home = () => {
    return (
            <div className='h-[95vh] md:h-[90vh] overflow-auto pb-9 flex flex-col hide-scrollbar'>
                <Posts />
            </div>

    )
}

export default Home