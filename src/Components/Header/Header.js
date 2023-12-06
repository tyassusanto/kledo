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
        <div className='bg-blue-500 py-3'>
            <div className="px-2 text-white flex justify-between">
                <h1 className='text-2xl'>KLEDO TEST</h1>
                <div className="text-lg">
                    <button onClick={toProfile} className='p-2 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md'>Profile</button>
                    <button onClick={toLogin} className=' p-2 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Header
