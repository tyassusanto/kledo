import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'

const AddShippingComps = () => {
    return (
        <div>
            <Sidebar />
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 min-h-screen">
                    <div className="">
                        <h1 className='text-2xl font-bold'>Tambah Shipping Comps</h1>
                    </div>
                    <div className="">
                        <form action="">
                            <div className="max-w-sm p-12">
                                <div className="">
                                    <div className="mt-8 space-y-8">
                                        <div className="space-y-6">
                                            <label>Nama</label>
                                            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300" placeholder="Your Password" type='text' />
                                            <span className='text-red-400 text-sm font-bold pt-4'>Nama Harus Diisi</span>
                                        </div>
                                        <button className="font-bold h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddShippingComps
