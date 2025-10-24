import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-gray-50 ">
        <div className="flex flex-col gap-4 pt-6 pl-[30px] text-[15px]">

            <NavLink className="flex items-center gap-3 border-b border-black border-r-0 px-3 py-2 rounded-l hover:bg-green-500 duration-300" to={"/add"}>
                <img src={assets.add_icon} className="w-5 h-5" alt="" />
                <p className="hidden md:block">Add Item</p>

            </NavLink>

            <NavLink className="flex items-center gap-3 border-b border-black  border-r-0 px-3 py-2 rounded-l hover:bg-green-500 duration-300" to={"/list"}>
                <img src={assets.order_icon} className="w-5 h-5" alt="" />
                <p className="hidden md:block">List Item</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar
