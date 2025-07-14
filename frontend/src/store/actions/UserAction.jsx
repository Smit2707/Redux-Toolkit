import { toast } from 'react-toastify'
import axios from '../../api/AxiosConfig'
import { loadUser, removeUser } from '../reducers/UserSlice'

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
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]));
    } catch (error) {
        toast.error(error)
    }
}
export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (user) dispatch(loadUser(user));
        else console.log("User Not Logged In.")
    } catch (error) {
        toast.error(error)
    }
}
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeUser())
        toast.success("Logged Out Successfully.")
    } catch (error) {
        toast.error(error)
    }
}