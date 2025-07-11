import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid'
import { asyncRegisterUser } from '../store/actions/UserAction';
import { useDispatch } from 'react-redux'
const Register = () => {

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

  const handleSignUp = (user) => {
    user.id = nanoid()
    user.isAdmin = false;
    console.log(user)
    dispatch(asyncRegisterUser(user));
    reset();
    navigate("/login")
  }
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='bg-white border rounded-xl opacity-90  text-black h-[fit-content] w-fit p-10 flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-4xl tracking-wide mb-5 font-semibold '>Sign Up</h2>
          <p className='text-center text-sm tracking-wide opacity-75 font-light'>Start exploring and browse the variety of products.</p>
        </div>
        <form
          className='flex flex-col items-start w-full gap-3'
          onSubmit={handleSubmit(handleSignUp, onError)}>
          {/* name */}
          <div className='flex flex-col justify-start w-full items-start gap-3'>
            <label
              htmlFor="name"
              className='text-xl font-semibold'
            >
              Name
            </label>
            <input
              {...register("name", { required: "Please Enter Name." })}
              type="text"
              // name="name"
              id="name"
              autoComplete='none'
              placeholder='Enter Your Name'
              className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' />
            {/* <small className='text-[crimson] font-[500]'>{errors?.name?.message}</small> */}
          </div>
          {/* email */}
          <div className='flex flex-col justify-start w-full items-start gap-3'>
            <label
              htmlFor="email"
              className='text-xl font-semibold'
            >
              Email
            </label>
            <input
              {...register("email", { required: "Please Enter Email." })}
              type="email"
              // name="email"
              id="email"
              autoComplete='none'
              placeholder='Enter Email Address'
              className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' />
            {/* <small className='text-[crimson] font-[500]'>{errors?.email?.message}</small> */}

          </div>
          {/* password */}
          <div className='flex flex-col justify-start w-full items-start gap-3'>
            <label
              htmlFor="password"
              className='text-xl font-semibold'
            >
              Password
            </label>
            <input
              {...register("password", { required: "Please Enter Password." })}
              type="password"
              // name="password"
              id="password"
              placeholder='Enter Password'
              className='outline-none px-4 w-full text-base  py-2 border border-gray-500 rounded-lg' />
            {/* <small className='text-[crimson] font-[500]'>{errors?.password?.message}</small> */}
          </div>

          <input
            type="submit"
            value="Sign Up"
            className='btn btn-outline w-full mt-5'
          />
        </form>
        <p>Already Have A Account ? <Link to="/login" className='text-blue-600 hover:underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register