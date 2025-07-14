import { nanoid } from 'nanoid';
import React from 'react'
import { asyncRegisterUser } from '../../store/actions/UserAction';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { asyncCreateProduct } from '../../store/actions/ProductAction';

const CreateProduct = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();

  const onError = (errors) => {
    Object.values(errors).forEach(err => {
      toast.error(err.message);
    });
  };

  const handleCreateProduct = (product) => {
    product.id = nanoid()
    console.log(product)
    dispatch(asyncCreateProduct(product));
    reset();
    navigate("/products")
  }
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='bg-white border rounded-xl opacity-90  text-black h-[fit-content] w-full p-10 flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-4xl tracking-none mb-5 font-light '>Create Product</h2>
          <p className='text-center text-sm tracking-wide opacity-75 font-light'>Start exploring and browse the variety of products.</p>
        </div>
        <form
          className='flex flex-col items-start w-full gap-3'
          onSubmit={handleSubmit(handleCreateProduct, onError)}>

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
                  {...register("category", {required:"Please Select Product Category"})}
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



          {/* create product button */}
          <input
            type="submit"
            value="Create Product"
            className='btn btn-xl btn-outline w-full mt-5'
          />
        </form>
      </div>
    </div>
  )

}

export default CreateProduct;