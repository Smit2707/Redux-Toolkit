import { toast } from 'react-toastify'
import axios from '../../api/AxiosConfig'
import { loadUser } from '../reducers/UserSlice'
import { loadProduct } from '../reducers/ProductSlice'

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/products", product)
        console.log(res)
        dispatch(asyncGetProduct());
    } catch (error) {
        toast.error(error)
    }
}
export const asyncUpdateProduct = (product, id) => async (dispatch, getState) => {
    try {
        const res = await axios.patch("/products/" + id, product)
        dispatch(asyncGetProduct());
        console.log(res)
    } catch (error) {
        toast.error(error)
    }
}
export const asyncGetProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadProduct(data));
        console.log(data);
    } catch (error) {
        toast.error(error);
    }
}
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id);
        dispatch(loadProduct(data));
    } catch (error) {
        toast.error(error);
    }
}