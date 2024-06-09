import './App.css'
import Home from './pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Register from './pages/Register/Register'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Navigate to={"/"} /> : <Login />} />
        <Route path='/register' element={user ? < Navigate to={"/"} /> : <Register />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
