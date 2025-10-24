import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import ShowDetail from './Pages/ShowDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const location = useLocation()

  const hide = ['/login', '/register'].includes(location.pathname)

  return (
    <div className='knewave flex flex-col min-h-screen'>
        <ToastContainer />
        {!hide && <Navbar />}
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/product/:id' element={<ShowDetail />}/>            
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </main>
        {!hide && <Footer />}
    </div>
  )
}

export default App
