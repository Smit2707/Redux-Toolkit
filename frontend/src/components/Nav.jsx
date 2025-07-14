import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { asyncLogoutUser } from '../store/actions/UserAction';

const Nav = () => {
    const location = useLocation();
    const user_details = useSelector(state => state.userReducer.users)
    const username = useSelector(state => state?.userReducer?.users?.name || "Username")
    const user_data = JSON.parse(localStorage.getItem("user"))
    // console.log(user_data)
    // console.log(user_details)
    if (["/login", "/signup"].includes(location.pathname)) {
        return null; // Don't show
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(asyncLogoutUser());
        navigate("/")
    }
    return (
        <nav className='flex  justify-between items-center'>
            <Link to="/" className='text-3xl tracking-widest'>Flone.</Link>
            <div className='flex gap-6'>
                <NavLink to="/" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Home</NavLink>
                <NavLink
                    to="/products" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Products</NavLink>
                {user_data ? <>
                    <NavLink
                        to="/admin/create-product" className="hover:text-black hover:bg-white px-2 py-1 ease-in-out duration-200 rounded-sm font-extralight tracking-widest ">Create Product
                    </NavLink>
                </> :
                    <h2></h2>}
            </div>
            <div className='flex items-center gap-5'>
                {user_data == null ?
                    <NavLink to="/login" className="btn btn-outline">Login</NavLink> :
                    <button onClick={handleLogout} className='btn btn-outline btn-error'>Logout</button>
                }
            </div>
        </nav>
    )
}

export default Nav