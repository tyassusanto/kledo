import React from 'react'
import LoginPage from './PagesComponents/LoginPage/LoginPage'
import Header from './Components/Header/Header'
import DashboardPage from './PagesComponents/DashboardPage/DashboardPage'
import ProfilePage from './PagesComponents/ProfilePage.js/ProfilePage'
import { Route, Routes } from 'react-router-dom'
import ShippingCompsPage from './PagesComponents/ShippingCompsPage/ShippingCompsPage'
import AddShippingComps from './PagesComponents/AddShippingComps/AddShippingComps'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/shipping-comps' element={<ShippingCompsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </BrowserRouter> */}

      <Routes>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />}>

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/shipping-comps" element={<ShippingCompsPage />} />
            <Route path='/add-shipping-comps' element={<AddShippingComps />} />
          </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
