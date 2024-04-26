import { products } from "../constants"
import PopularProductCard from '../Component/PopularProductCard';
const popular = () => {
  return (
   <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold"> Our <span className="text-coral-red">Popular</span> products </h2>
      <p className="lg:max-w-lg mt-4 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after Selections.Discover a world class comfort ,Design ,and value</p>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm :grid-col-2 grid-col-1  sm:gap-4 gap-14 ">
        {
          products.map((product)=>(
            <PopularProductCard key={product.name} {...product}/>
          ))
        }
      </div>
    </div>
   </section>
  )
}

export default popular