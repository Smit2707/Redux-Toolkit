import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

const Products = () => {

  const product_details = useSelector(state => state?.productReducer?.products)
  console.log(product_details)
  return (
    <>
      {product_details ? <>
        {/* <div className='flex bg-red-500 justify-between flex-wrap gap-6 items-center'> */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-auto gap-2 mt-5'>
          {product_details.map(({ id, description, category, image, title, price }, idx) => {
            return <ProductCard key={idx} id={id} description={description} category={category} image={image} title={title} price={price} />
          })}
        </div>
      </> : <div className='h-[90vh] w-full flex justify-center items-center'>
        <span className="loading loading-spinner loading-xl"></span><span className='text-xl'>Loading</span>
      </div>}

    </>
  )
}

export default Products;