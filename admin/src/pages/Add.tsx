import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

interface tokens {
    token : string;
}

const Add : React.FC<tokens> = ({token}) => {

  const [image , setImage] = useState<File | null>(null)

  const [name , setName] = useState<string>('')
  const [description , setDescription] = useState<string>('')
  const [price , setPrice] = useState<string>('')

  const onSubmit = async (e : any) => {
    e.preventDefault()

    try {
        const formData = new FormData()

        formData.append("name" , name)
        formData.append("description" , description)
        formData.append("price" , price)
        
        image && formData.append("image" , image)

        const response = await axios.post(backendUrl + "/api/product/add" , formData , {
            headers : { token }
        })

        if(response.data.success) {
            toast.success(response.data.message)
            setName('')
            setDescription('')
            setPrice('')
            setImage(null)
        } else {
            console.log(response.data.message);
        }
    } catch (error : any) {
        console.log(error);
        toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full items-start gap-3">
        <div>
            <p className="mb-2 text-2xl mt-4">Upload Image</p>
            <div className="flex gap-2 mt-5">
                <label htmlFor="image">
                    <img src={!image ? assets.upload_area : URL.createObjectURL(image)} className="w-[130px]" />
                    <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files?.[0] || null)} />
                </label>
            </div>
        </div>

        <div className="w-full mt-2">
            <p className="mb-2">Product Name : </p>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='w-full border max-w-[500px] px-3 py-2' required placeholder='Type here'/>
        </div>

        <div className="w-full mt-2">
            <p className="mb-2">Product Description : </p>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className='w-full border max-w-[500px] px-3 py-2' required placeholder='Type here'/>
        </div>

        <div className="w-full mt-2">
            <p className="mb-2">Product Price : </p>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className='w-full border max-w-[500px] px-3 py-2' required placeholder='Type here'/>
        </div>

        <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  )
}

export default Add
