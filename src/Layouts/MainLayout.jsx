import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navbar'

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className='mb-20'>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout