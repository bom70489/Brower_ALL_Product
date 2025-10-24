import { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axios from "axios";

const ShowDetail = () => {

  const { id } = useParams<{ id: string }>()
  const [productsData , setProductData] = useState<any>(null)
  const context = useContext(AppContext)
  if(!context) return null
  const { backendURl } = context

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        
        const response = await axios.get(backendURl + `/api/product/${id}`)
        if(response.data.success) {
          setProductData(response.data.product)
      } else {
        console.log(response.data);
      }
    } catch (error : any) {
        console.error("Error fetching blog : " , error);
      }
    }
    fetchBlogData()
  } , [id , backendURl])

  if(!productsData) return <p className="text-2xl mt-[300px] text-center">Loading....</p>

  return (
    <>
    <Link to={'/'}><Title title="Back to home page" /></Link>
    <div className="flex flex-col lg:flex-row max-w-[1300px] border mx-auto mt-[50px]">
      <div className="">
        <img src={productsData.image} className="w-full max-w-[400px] mx-auto h-auto object-cover rounded"/>
      </div>
      <div className="w-full mt-3">
          <h1 className="text-center text-4xl">{productsData.name}</h1>
          <p className="text-xl mt-3 text-pretty ml-3">Description : {productsData.description}</p>
          <p className="text-xl mt-3 ml-3">Price : {productsData.price} ฿</p>
      </div>
    </div>
    </>
  )
}

export default ShowDetail
