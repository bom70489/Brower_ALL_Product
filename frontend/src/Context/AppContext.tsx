import axios from "axios";
import React , { createContext , useEffect, useState , type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


type ProductType = {
  _id: string    
  image: string
  name: string
  description: string
  price: number
}

interface AppContextType {
    username : string;
    setUsername : (name : string) => void;
    cartItems: ProductType[]
    products : any[]
    // Backend
    addTocart: (product: ProductType) => void;
    Remove: (itemId: string) => void;
    backendURl : string
    token : string
    setToken : (newToken : string) => void
    navigate: ReturnType<typeof useNavigate>
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
    children : ReactNode;
}

export const AppProvider : React.FC<AppProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<ProductType[]>([])
    const [token , setToken] = useState(localStorage.getItem('token') || '')
    const [username , setUsername] = useState(localStorage.getItem('username') || '')
    const [products , setProducts] = useState<any[]>([])
    const navigate = useNavigate()

    const backendURl = import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        const saveToken = localStorage.getItem('token');
        const savedUsername = localStorage.getItem('username');

        if(saveToken) {
            setToken(saveToken)
        }

        if (savedUsername) {
            setUsername(savedUsername)
        }
    } , [])

    const updateToken = (newToken : any) => {
        setToken(newToken);
        if(newToken) {
            localStorage.setItem('token' , newToken)
        } else {
            localStorage.removeItem('token');
        }
    }

    const setUser = (name: string) => {
    setUsername(name);
    if (name) {
      localStorage.setItem("username", name);
    } else {
      localStorage.removeItem("username");
    }
  };

    const getProductsData = async () => {
        try {
            
            const response = await axios.get(backendURl + "/api/product/list")
            if(response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    } , [])


    const addTocart = async (product : ProductType) => {
        try {
            
            if(!token) {
                toast.error("Please login!")
                navigate("login")
                return;
            }

            const response = await axios.post(backendURl + "/api/cart/add" , { ItemId : product._id } , {
                headers : { Authorization : `Bearer ${token}` }
            })
            
            if(response.data.success) {
                await getUserCart()
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserCart = async () => {
        try {
            if (!token) return navigate("/register");

            const response = await axios.get(backendURl + "/api/cart/get" , {
                headers : { Authorization : `Bearer ${token}` }
            })

            if (response.data.success) {
                setCartItems(response.data.cartData)
            } else {
                toast.error(response.data.message)
            }
        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const Remove = async (ItemId: string) => {
        try {
            if (!token) return navigate("/register")
            
            const response = await axios.post(backendURl + "/api/cart/remove", { ItemId } , {
                headers : { Authorization : `Bearer ${token}` }
            })

            if(response.data.success) {
                await getUserCart()
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
        }
    }


    useEffect(() => {
        if (token) {
            getUserCart()
        }
    } , [token])

    
    const value = {
            username , setUsername : setUser ,  cartItems , addTocart , 
            backendURl  , token , setToken : updateToken , navigate , products , getUserCart , Remove
    }   

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}