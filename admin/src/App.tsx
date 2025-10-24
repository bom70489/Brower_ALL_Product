import { useEffect, useState } from "react"
import Navber from "./components/Navber"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '฿'

const App = () => {

  const [token , settoken] = useState<string>(localStorage.getItem('token') || '')

  useEffect(() => {
    localStorage.setItem('token' , token)
  } , [token])

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      { token === "" ? <Login setToken={settoken} /> :
      <>
      <Navber setToken={settoken}/>
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto">
          <Routes>
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
          </Routes>
        </div>
      </div>
      </>}
    </div>
  )
}

export default App
