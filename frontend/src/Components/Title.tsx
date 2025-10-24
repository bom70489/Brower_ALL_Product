import { FaArrowRightLong } from "react-icons/fa6";

type header = {
    title : string
}

const Title = ({title} : header) => {
  return (
    <div className="ml-7 mt-6 mb-4 cursor-pointer inline-flex items-center text-2xl hover:text-red-500 duration-300">
      <FaArrowRightLong className="mr-3" />
      <span>{title}</span>
    </div>

  )
}

export default Title
