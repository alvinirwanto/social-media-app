import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLogin = () => {
    return (
        <Link to='/login'>
            <button className='button-2'>Login</button>
        </Link>
    )
}

export default ButtonLogin