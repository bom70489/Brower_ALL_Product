import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"

const Register = () => {
  const context = useContext(AppContext)

  if (!context) {
    return null;
  }

  const { token , setToken , backendURl , setUsername , navigate} = context

  const [name , setName] = useState<string>('')
  const [email , setEmail] = useState<string>('')
  const [password , setPassword] = useState<string>('')

  const handleClick = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
        const response = await axios.post(`${backendURl}/api/user/register` , {name , email , password})
        if(response.data.success) {
            const { token, username, userId } = response.data 

            localStorage.setItem("token", token)
            localStorage.setItem("username", username)
            localStorage.setItem("userId", userId)  
            setToken(response.data.token)
            setUsername(name)
            toast.success("Registration successfully!")
        } else {
            toast.error(response.data.message)
        }
    } catch (error : any) {
        console.log(error);
        toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token) {
        navigate('/')
    }
  } , [token])

  return (
    <div  className="flex justify-center items-center h-screen">
        <form onSubmit={handleClick} className="border py-3 w-[600px] px-6 rounded-3xl">
            <h1 className="text-2xl mb-3 text-blue-400">Register Page</h1>
            <div className="flex flex-col mb-3">
                <label htmlFor="email" className="mb-1">Email:</label>
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="border py-1 px-2 w-full"/>
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="name" className="mb-1">Name:</label>
                <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="border py-1 px-2 w-full"/>
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="password" className="mb-1">Password:</label>
                <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="border py-1 px-2 w-full"/>
            </div>
            <button type="submit" className="w-full mb-1 text-white bg-black duration-300 cursor-pointer hover:bg-green-400 hover:text-black py-2">Submit</button>
            {/* if not hace account */}
            <div className="flex">
                <p className="mr-3">If you have a account.</p>
                <Link to={'/login'} className="text-blue-500 underline">Login</Link>
            </div>
        </form>
    </div>
  )
}

export default Register
