import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Homepage/LandingPage'
import LoginPage from './Auth/Login'
import DashboardLayout from './Dashboard/DashboardPage/DashboardLayout'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* <Route path='/' element ={<LandingPage />}/> */}
        <Route path='/' element ={<DashboardLayout />}/>
        <Route path='/login' element ={<LoginPage/>}/>
      {/* <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
    </>
  )
}

export default App
