import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Common/Navbar'
import Login from './Components/Common/Login'
import Register from './Components/Common/Register'
function App() {
 

  return (
  <>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/register' element={<Register/>}/>
  </Routes>
  </>
  )
}

export default App
