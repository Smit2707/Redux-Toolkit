import { toast } from 'react-toastify'
import axios from '../../api/AxiosConfig'

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        toast.error(error)
    }
}
export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.get("/users", user)
        console.log(res)
    } catch (error) {
        toast.error(error)
    }
}
export const asyncUserDetails = () => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        toast.error(error)
    }
}