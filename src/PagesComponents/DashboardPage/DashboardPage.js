import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'

const DashboardPage = () => {
  return (
    <div>
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 text-center min-h-screen grid">
          <div className="place-self-center">
            <h1 className='font-bold text-2xl text-gray-700'>Selamat Datang</h1>
            <h1 className='font-bold text-xl text-gray-500'>Selamat Datang</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
