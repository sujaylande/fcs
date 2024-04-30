import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  )
}

export default App
