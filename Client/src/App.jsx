import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  )
}

export default App
