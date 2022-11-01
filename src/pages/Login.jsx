import React from 'react'
import ButtonRegister from '../common/ButtonRegister'
import LogoIcon from '../img/Logo1.png'
import LogoIcon2 from '../img/Logo2.png'

const Login = () => {
    return (
        <div className='bg-gray-300 w-full h-screen flex items-center justify-center'>
            <div className='bg-white shadow-xl rounded-md w-full max-w-[380px] md:max-w-[740px] xl:max-w-[900px] h-[70%] mx-auto'>
                <div className='grid md:grid-cols-2 gap-4 h-full'>

                    <div className='hidden p-[3rem] md:flex flex-col gap-8 cover-image-login'>
                        <div className='flex justify-end xl:-mb-9'>
                            <img src={LogoIcon2} className='h-6 w-6' alt="" />
                        </div>
                        <h1 className='text-7xl font-bold break-words text-white'>Hello World.</h1>
                        <p className='text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque asperiores saepe minima mollitia inventore?</p>
                        <p className='text-sm text-white'>Don't you have an account?</p>
                        <ButtonRegister />
                    </div>

                    <div className='p-[3rem] flex flex-col justify-center gap-[3rem]'>
                        <div className='flex justify-center md:hidden'>
                            <img src={LogoIcon} className='h-[3.5rem] w-[3.5rem]' alt="" />
                        </div>
                        <h1 className='font-bold text-gray-600 text-3xl'>Login</h1>
                        <form action="" className='flex flex-col gap-7'>
                            <input
                                type="text"
                                placeholder='Username'
                                className='input-form'
                            />

                            <input
                                type="password"
                                placeholder='Password'
                                className='input-form'
                            />
                        </form>

                        <button className='button-1'>Login</button>
                        <div className='block md:hidden'>
                            <p className='text-sm text-gray-600 text-center'>Don't you have an account?</p>
                            <ButtonRegister />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login