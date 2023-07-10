import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Home from './component/Home.jsx'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
        
    </>
  )
}

export default App
