import React from 'react'
import { Link } from 'react-router-dom'

const ButtonRegister = () => {
    return (
        <Link to='/register'>
            <button className='button-2'>Register</button>
        </Link>
    )
}

export default ButtonRegister