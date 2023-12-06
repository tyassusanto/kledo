import React from 'react'
import Header from '../../Components/Header/Header'

const ProfilePage = () => {
    return (
        <div className="items-center justify-center p-20">
            <div>
                <h1 className="text-xl font-bold text-center">Profile</h1>
            </div>
            <div className="rounded-3xl bg-gray-100 p-12 mt-5 flex ">
                <div className="flex-grow">
                    <div className="mt-8 space-y-8">
                        <div className="mb-3">
                            <h2 className='text-gray-500 font-bold text-xl'>Nama</h2>
                            <p className=' font-bold '>Tony Stark</p>
                        </div>
                        <div className="mb-3">
                            <h2 className='text-gray-500 font-bold text-xl'>Alamat</h2>
                            <p className=' font-bold '>Malibu</p>
                        </div>
                        <div className="mb-3">
                            <h2 className='text-gray-500 font-bold text-xl'>No. Hp</h2>
                            <p className=' font-bold '>123</p>
                        </div>
                        <div className="mb-3">
                            <h2 className='text-gray-500 font-bold text-xl'>Email</h2>
                            <p className=' font-bold '>ts@mail.com</p>
                        </div>
                        <div className="mb-3">
                            <h2 className='text-gray-500 font-bold text-xl'>Motto</h2>
                            <p className=' font-bold '>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className="top-1">
                    <img className='object-cover w-36 h-36 rounded-full' src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" alt="Profile Picture" />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
