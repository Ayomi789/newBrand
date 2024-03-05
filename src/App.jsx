import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Signup from './Signup'
import './login.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Login></Login>
   <Signup></Signup>
    </>
  )
}

export default App
