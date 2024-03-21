import './App.css'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Profile from './pages/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Profile />} /> 
      {/* <Route path='/profile' element={<Profile />} />   */}
    </Routes>
  )
}

export default App
