import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

interface NavberProps {
    setToken : (tokne : string) => void;
}


const Login : React.FC<NavberProps> = ({setToken}) => {

    const [email , setEmail] = useState<string>('')
    const [password , setPassword] = useState<string>('')

    const onSunmitHandler = async (e : any) => {
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + '/api/user/admin' , {email , password})

            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
        <div className="bg-white shadow-md rounded-g px-8 py-4 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSunmitHandler}>
            <div className="mb-3 min-w-72">
                <label htmlFor="name" className="mb-1">Email:</label>
                <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email" className="rounded-md w-full px-3 py-2 border border-gary-300 outline-none"/>
            </div>
            <div className="mb-3 min-w-72">
                <label htmlFor="password" className="mb-1">Password:</label>
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" className="rounded-md w-full px-3 py-2 border border-gary-300 outline-none"/>
            </div>
            <button type="submit" className="w-full mb-1 text-white bg-black duration-300 cursor-pointer hover:bg-green-400 hover:text-black py-2">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login
