import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Homepage/LandingPage'
import LoginPage from './Auth/Login'
import DashboardLayout from './Dashboard/DashboardPage/DashboardLayout'
import CreateAds from './CreateAds/CreateAd'
import Signup from './Auth/Signup'
import MyAds from './MyAds/MyAds'
import Analytics from './Analytics/Analytics'
import WalletPage from './Wallet/Wallet'
import Settings from './Settings/UsersSetting'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element ={<LandingPage />}/>
        <Route path='/dashboard' element ={<DashboardLayout />}/>
        <Route path='/createAds' element ={<CreateAds />}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/myAds' element ={<MyAds/>}/>
        <Route path='/analytics' element ={<Analytics/>}/>
        <Route path='/wallet' element ={<WalletPage/>}/>
        <Route path='/settings' element ={<Settings/>}/>
    </Routes>
    </>
  )
}

export default App
