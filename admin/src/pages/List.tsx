import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

interface tokens {
    token : string
}

const List : React.FC<tokens> = ({token}) => {

  const [list , setList] = useState<any[]>([]);
 
  const fetchlist = async () => {
    try {
        const response = await axios.get(backendUrl + "/api/product/list")
        if(response.data.success) {
            console.log(response.data);
            setList(response.data.product);
        } else {
            toast.error(response.data.message)
        }
    } catch (error : any) {
        console.log(error);
        toast.error(error.message)
    }
  }

  const Remonve = async (id : string) => {
    try {
        
        const response = await axios.post(backendUrl + "/api/product/remove" , {id} , {
            headers : {token}
        })

        if(response.data.success) {
            toast.success(response.data.message)
            await fetchlist()
        } else {
            toast.error(response.data.message)
        }

    } catch (error : any) {
        console.log(error);
        toast.error(error.message)
    }
  }

    useEffect(() => {
        fetchlist();
    } , [])
  return (
    <>
      <p className='mb-2'>All Products</p>
      <div className='flex flex-col gap-2'>

        <div className='hidden md:grid grid-cols-[1fr_1fr_3fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            <b>Price</b>
            <b className='text-center'>Action</b>
        </div>

        {
           list.map((item , index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_1fr_3fr_1fr_1fr] items-center gap-2 px-2 py-1 border text-sm'>
                <img className='w-16' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price} {currency}</p>
                <p onClick={() => Remonve(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
           ))
        }

      </div>
    </>
  )
}

export default List
