import { Link } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuX } from "react-icons/lu";
import { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const [open , setOpen] = useState<boolean>(false)
  
  const openmenu = () => {
      setOpen(!open)
  }

  const [visible , setVisible] = useState<boolean>(false)

  const openlogout = () => {
    setVisible(!visible)
  }

  const context = useContext(AppContext)

  if (!context) {
    return <p></p>
  }

  const { username  , navigate , setUsername , token , setToken} = context 

  const logout = () => {
    navigate('/register')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUsername('')
    setToken('')
    toast.success("Logged out successfully!")
  }

  

  return (
    <div className="bg-black px-4 py-3 text-white max-w-full relative">
      {/* Computer */}
      <div className="flex justify-between items-center">
        <div className='flex justify-center items-center'>
          {/* left */}
          <div className=''>
            <Link to={"/"}><img src="/Frame_1__1_-removebg-preview.png" className='w-[120px]' /></Link>
          </div>
          {/* middle */}
          <div className="hidden justify-center items-center ml-6 md:flex ">
              <Link to={"/"} className='mr-5 hover:text-red-500 duration-300'>Home</Link>
              <Link to={"/product"} className='mr-5 hover:text-green-500 duration-300'>Product</Link>
          </div>
        </div>
          {/* Right */}
          <div className='md:flex hidden justify-center items-center'>
              <div className='mr-7 relative text-2xl'>
                <Link to={"/cart"}>
                  <IoMdCart />
               </Link>
                <div className='absolute top-[-10px] right-[-7px]'>
                  <p className='text-sm border rounded-full w-[20px] h-[20px] text-center bg-gray-700'>{context.cartItems.length}</p>                  
                </div>
              </div>
          

          {/* menu login */}
            <div 
                onClick={openlogout} 
                className='flex justify-center items-center mr-5 cursor-pointer hover:-translate-y-1 duration-300 relative text-2xl'
              >
                {token && username && <p className='text-lg mr-2'>{username}</p>}
                <IoMdPerson />
                
                {visible && (
                  <div className='absolute right-0 top-full bg-white text-black rounded shadow-md mt-2 z-10'>
                    <p 
                      onClick={logout} 
                      className='px-4 py-2 cursor-pointer hover:bg-gray-200 text-lg'
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </div>

          {/* Mobile */}
          <div className='md:hidden mr-4'>
              <div onClick={openmenu} className='flex justify-center items-center text-2xl'>
                {open ? <LuX /> : <RxHamburgerMenu />}
              </div>
              <div className='absolute top-full w-screen bg-gray-200 z-10 left-0 '>
                {open && <div className='text-black flex flex-col p-2'>
                          <div className='w-full text-center'>
                           <Link to={"/"} className='block'>Home</Link>
                           <hr className='mb-3 mt-1'/>
                          </div>
                          <div className='w-full text-center'>
                           <Link to={"/product"} className='block'>Product</Link>
                           <hr className='mb-3 mt-1'/>
                          </div>
                          <div className='w-full text-center'>
                           <Link to={"/login"} onClick={logout}  className='block'>Login</Link>
                          <hr className='mb-3 mt-1'/>
                          </div>
                        </div>}
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
