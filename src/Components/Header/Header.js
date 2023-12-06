import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const toProfile = () => {
        navigate('/profile')
    }
    const toLogin = () => {
        navigate('/login')
    }
    return (
        <div className="">

            <nav class="fixed top-0 z-50 w-full bg-blue-500 text-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">KLEDO TEST</span>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ms-3">
                                <div>
                                    <button onClick={toProfile} className='p-2 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md'>Profile</button>
                                    <button onClick={toLogin} className=' p-2 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md'>Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
