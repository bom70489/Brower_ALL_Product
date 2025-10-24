import { useContext , useState , useEffect  } from "react"
import Card from "../Components/Card"
import Title from "../Components/Title"
import { AppContext } from "../Context/AppContext"

const Home = () => {

  const context = useContext(AppContext)
  
    if (!context) { return null ; }
  
    const { products } = context
    const [ product , setProduct ] = useState<any[]>([])
  
    useEffect(() => {
      setProduct(products)
    } , [products])

  return (
    <div>
        <Title title="Recommend For You"/>
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center">
          {product.slice(0 , 2).map((item) => (
           <Card 
              _id={item._id}
              image={item.image}
              name = {item.name}
              description={item.description}
              price={item.price}
           /> 
          ))}
        </div>
        <Title title="Shop"/>
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 justify-items-center">
          {product.slice(0 , 5).map((item) => (
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

export default Home
