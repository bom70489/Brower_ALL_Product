import { useContext } from "react"
import Title from "../Components/Title"
import { AppContext } from "../Context/AppContext"

const Cart = () => {

  const context = useContext(AppContext)

  if (!context) return null

  const { cartItems , Remove } = context

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      <Title title="Your Cart" /> 
      {cartItems.length === 0 ? (
        <div className="mt-[270px]">
         <p className="text-center text-2xl">Your cart is empty.</p>
        </div>
      ) : (
        <div className="max-w-[1700px] mx-auto p-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center">
            {cartItems.map(item => (
              <div key={item.id} className="border w-[500px] px-3 py-1 rounded flex">
                <img src={item.image} className="w-[200px] mr-3 object-cover mb-2"/>
                <div className="w-full flex flex-col justify-between">
                  <div className="w-[250px]">
                    <h1 className="font-bold mb-2 text-center text-2xl">{item.name}</h1>
                    <p className="text-md mb-1 whitespace-normal break-words overflow-hidden">Description: {item.description}</p>
                    <p className="text-md">Price: {item.price} ฿</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <button onClick={() => Remove(item._id)} className="bg-red-500 w-full py-1 rounded-xl hover:bg-black hover:text-white duration-300">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary อยู่ขวาสุด */}
          <div className="flex justify-end mt-8">
            <div className="border rounded-xl shadow-md w-[300px] text-right">
              <h1 className="text-3xl mt-1 text-center uppercase">Summary : </h1>
              <p className="text-2xl text-center mt-1">{totalPrice} ฿</p>
              <button className="w-full bg-green-400 py-2 rounded-b-xl mt-4 cursor-pointer">Purchase</button>
            </div>
          </div>
        </div> )}
    </div>
  )
}

export default Cart
