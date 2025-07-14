import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeleteProduct, asyncUpdateProduct } from '../store/actions/ProductAction';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { id } = useParams();
    const [isUpdate, setIsUpdate] = useState(false)
    console.log(isUpdate)
    // console.log(id)
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    const products = useSelector(state => state.productReducer.products)
    const users = useSelector(state => state.userReducer.users)
    // console.log(products)
    const product_detail = products?.find(elem => elem.id == id);
    console.log(product_detail)

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            image: product_detail?.image,
            title: product_detail?.title,
            description: product_detail?.description,
            price: product_detail?.price,
            category: product_detail?.category,
        }
    });

    const dispatch = useDispatch();

    const onError = (errors) => {
        Object.values(errors).forEach(err => {
            toast.error(err.message);
        });
    };
    const handleUpdateProduct = (product) => {
        console.log(product)
        dispatch(asyncUpdateProduct(product, id));
        toast.success("Product Updated Successfully.")
    }
    const handleDeleteProduct = () => {
        dispatch(asyncDeleteProduct(id));
        toast.success("Product Deleted Successfully.")
        navigate("/products")
    }

    return (
        <>
            <div className="hero w-full min-h-fit mt-20">
                <div className="hero-content w-full h-full flex-col lg:flex-row items-start justify-start">
                    <img
                        src={product_detail?.image}
                        className="max-w-xl h-full rounded-lg shadow-2xl"
                    />
                    <div className='h-full flex flex-col justify-between'>
                        <h1 className="text-5xl font-bold">{product_detail.title}</h1>
                        <p className="py-6">
                            {product_detail?.description}
                        </p>
                        <div className="card-actions justify-between items-center mb-2">
                            <h5 className='text-green-400 font-semibold text-xl'>{product_detail?.price} Rs</h5>
                            <div className="badge badge-outline">{product_detail?.category}</div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className="btn btn-lg btn-soft btn-success w-full">Buy Now</button>
                            {user.isAdmin &&
                                <button onClick={()=> setIsUpdate(true)} className="btn btn-lg btn-soft btn-info w-full">Update Product</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                user.isAdmin && <div className='flex items-center justify-center w-full h-full'>
                    <div className='bg-white border rounded-xl opacity-90  text-black h-[fit-content] w-full p-10 flex flex-col gap-5 justify-center items-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-4xl tracking-none mb-5 font-semibold '>Update Product</h2>
                            <p className='text-center text-sm tracking-wide opacity-75 font-light'>Start exploring and browse the variety of products.</p>
                        </div>
                        <form
                            className='flex flex-col items-start w-full gap-3'
                            onSubmit={handleSubmit(handleUpdateProduct, onError)}>

                            <div className='flex gap-3 w-full'>
                                <div className='flex flex-col gap-3 w-full'>
                                    {/* product name */}
                                    <div className='flex flex-col justify-start w-full items-start gap-3'>
                                        <label
                                            htmlFor="title"
                                            className='text-xl font-semibold'
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            {...register("title", { required: "Please Enter Product Name." })}
                                            type="text"
                                            // name="name"
                                            id="title"
                                            autoComplete='none'
                                            placeholder='Enter The Product Name'
                                            className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' />
                                    </div>

                                    {/* product price */}
                                    <div className='flex flex-col justify-start w-full items-start gap-3'>
                                        <label
                                            htmlFor="price"
                                            className='text-xl font-semibold'
                                        >
                                            Price
                                        </label>
                                        <input
                                            {...register("price", { required: "Please Enter Email." })}
                                            type="number"
                                            min={0}
                                            // name="email"
                                            id="price"
                                            autoComplete='none'
                                            placeholder='Enter Price'
                                            className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' />
                                    </div>

                                    {/* product description */}
                                    <div className='flex flex-col justify-start w-full items-start gap-3'>
                                        <label
                                            htmlFor="description"
                                            className='text-xl font-semibold'
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            {...register("description", { required: "Please Enter description." })}
                                            id="description"
                                            placeholder='Enter Description Of The Product'
                                            className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' ></textarea>
                                    </div>

                                    {/* product image */}
                                    <div className='flex flex-col justify-start w-full items-start gap-3'>
                                        <label
                                            htmlFor="image"
                                            className='text-xl font-semibold'
                                        >
                                            Product Image <span className='text-base font-extralight opacity-50'>(Enter Url)</span>
                                        </label>
                                        <input
                                            {...register("image", { required: "Please Enter Product Image." })}
                                            type='url'
                                            autoComplete='none'
                                            id="image"
                                            placeholder='Give The Image URL Of The Product'
                                            className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-3 w-full'>
                                    <div className='flex flex-col justify-start w-full items-start gap-3'>
                                        <label
                                            htmlFor="category"
                                            className='text-xl font-semibold'
                                        >
                                            Product Category
                                        </label>
                                        <select
                                            {...register("category", { required: "Please Select Product Category" })}
                                            className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg'
                                        >
                                            <option value="electronics">Electronics</option>
                                            <option value="fashion">Fashion</option>
                                            <option value="furniture">Furniture</option>
                                            <option value="kitchen">Kitchen</option>
                                            <option value="grocery">Grocery</option>
                                        </select>

                                    </div>
                                </div>
                            </div>



                            {/* update product button */}
                            <input
                                type="submit"
                                value="Update Product"
                                className='btn btn-xl btn-outline btn-info w-full mt-5'
                            />
                        </form>
                        <button
                        onClick={handleDeleteProduct}
                            className='btn btn-xl btn-outline btn-error w-full mt-0'
                        >Delete Product</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetails