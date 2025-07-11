import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation();
    if (["/login", "/signup"].includes(location.pathname)) {
        return null; // Don't show
    }
    return (
        <nav className='flex  justify-between items-center'>
            <Link to="/" className='text-3xl tracking-widest'>Flone.</Link>
            <div className='flex gap-6'>
                <NavLink to="/" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Home</NavLink>
                <NavLink to="" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Shop</NavLink>
                <NavLink to="" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Blogs</NavLink>
                <NavLink to="/products" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Products</NavLink>
                <NavLink to="" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">About</NavLink>
                <NavLink to="" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Contact</NavLink>
            </div>
            <div>
                <NavLink to="/login" className="text-black bg-white font-semibold border text-lg px-5 py-1 ease-in-out duration-200 rounded-full tracking-widest hover:bg-transparent hover:text-white hover:border hover:font-light">Login</NavLink>
            </div>
        </nav>
    )
}

export default Nav