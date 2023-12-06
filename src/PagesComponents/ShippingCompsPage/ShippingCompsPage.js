import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

const ShippingCompsPage = () => {
    const navigate = useNavigate()
    const addShippingBtn = () => {
        navigate('/add-shipping-comps')
    }
    return (
        <div>
            <Sidebar />
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 min-h-screen">
                    <div className=" flex">
                        <h1 className='text-2xl font-bold'>Shipping Comps</h1>
                        <button onClick={addShippingBtn} className='px-3'><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Edit / Add_Plus_Circle">
                                <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg></button>
                    </div>
                    <div className="">
                        <div className="mt-3 rounded-lg bg-gray-100 p-3">
                            Nama
                        </div>
                        <div className="">
                            <ul>
                                <li className='my-2 ms-4'>
                                    Tony Stark
                                </li>
                                <li className='my-2 ms-4'>
                                    Tony Stark
                                </li>
                                <li className='my-2 ms-4'>
                                    Tony Stark
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingCompsPage
