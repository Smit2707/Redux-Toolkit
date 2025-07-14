import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({ id, description, title, price, category, image }) => {
    const navigate = useNavigate();
    // console.log(id)
    return (
        <div className="card bg-base-100 w-96 shadow-sm cursor-pointer overflow-hidden">
            <figure
                className='h-[255px]'
            >
                <img
                    className='object-contain w-full h-full'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-between items-center">
                    <h5>{price} Rs</h5>
                    <div className="badge badge-outline">{category}</div>
                </div>
            </div>
            <div className='w-full'>
                <Link to={`/product-details/${id}`} className='btn btn-soft btn-success w-1/2'>View Details</Link>
                <Link className='btn btn-soft btn-success w-1/2'>Buy Now</Link>
            </div>
            {/* <button onClick={() => console.log("hello cart")} className='btn btn-outline btn-success'>Add To Cart</button> */}
        </div>
    )
}

export default ProductCard