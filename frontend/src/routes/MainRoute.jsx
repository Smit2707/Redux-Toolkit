import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import ProfileUser from '../pages/user/ProfileUser'
import ProductDetails from '../pages/ProductDetails'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/products' element={<Products />} />
            <Route path='/userprofile' element={<ProfileUser />} />
            <Route path='/admin/create-product' element={<CreateProduct />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
        </Routes>
    )
}

export default MainRoute