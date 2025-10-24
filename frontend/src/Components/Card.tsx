import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


type card = {
    _id: string
    name : string
    description : string
    price : number
    image : string
}

const Card = ({image , name , description , price , _id} : card) => {

  const context = useContext(AppContext)
  
  if(!context) return null
  const { addTocart } = context;

  const handleAddcart = (e : React.MouseEvent<HTMLDivElement , MouseEvent>) => {
      e.stopPropagation()
      e.preventDefault()
      addTocart({ _id , image , name , description , price})
  }

  console.log(handleAddcart);

  return (
    <Link to={`/product/${_id}`} className="border w-[250px] rounded-b-xl cursor-pointer hover:-translate-y-1 duration-300">
        <img src={image} className="mb-1 border-b object-cover h-60 w-full" />
        <div className="p-2">
            <h1 className="uppercase text-lg mb-3">{name}</h1>
            <p className="mb-1 truncate">{description}</p>
        </div>
          <div onClick={handleAddcart} className="text-center  bg-green-400 rounded-b-xl flex items-center justify-center">
            <button className="py-1">{price} ฿</button>
            <p className="ml-2"><FaCartPlus /></p>
          </div>
    </Link>
  )
}

export default Card
