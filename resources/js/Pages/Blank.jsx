import React from 'react'
import Emp_Home from '@/Pages/Employee/Emp_Home'
import Emp_Profile from '@/Pages/Employee/Emp_Profile'
import Emp_Attendance from '@/Pages/Employee/Emp_Attendance'
import SimpleCard from '@/Components/TitleDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/Components/Navbar';
import Login from './Auth/Login'

export default function Blank() {
  return (
    <div>
      
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Emp_Home />}/>
        <Route path='Profile' element={<Emp_Profile />}/>
        <Route path='Attendance' element={<Emp_Attendance />}/>
      </Routes>
    </BrowserRouter>
    </div>

  )
}