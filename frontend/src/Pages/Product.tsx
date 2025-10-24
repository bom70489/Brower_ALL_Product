import { useContext, useEffect, useState } from "react"
import Card from "../Components/Card"
import Title from "../Components/Title"
import { AppContext } from "../Context/AppContext"

const Product = () => {

  const context = useContext(AppContext)

  if (!context) { return null ; }

  const { products } = context
  const [ product , setProduct ] = useState<any[]>([])

  useEffect(() => {
    setProduct(products)
  } , [products])

  return (
    <div>
      <Title title="All Product" />
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center">
        {product.map((item) => (
            <Card 
              _id={item._id}
              image={item.image}
              name = {item.name}
              description={item.description}
              price={item.price}
           /> 
        ))}
      </div>
    </div>
  )
}

export default Product
