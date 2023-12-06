import React from 'react'
import LoginPage from './PagesComponents/LoginPage/LoginPage'
import Header from './Components/Header/Header'
import DashboardPage from './PagesComponents/DashboardPage/DashboardPage'
import ProfilePage from './PagesComponents/ProfilePage.js/ProfilePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
