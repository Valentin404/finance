import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAlldata } from "../data/asinc"
import data from '../../data.json'
import { newError } from "../settings/asinc"
import L from '../../Local/Local'
const initialState = {
   isAdmin : null,
   password : false,
   token : null,
   date : null,
}



export const loginAsink = createAsyncThunk(
    'user/loginAsink',
    async (password,{dispatch}) => {
        const p =L.getToken();
        const oldPass = p ? p : '12345'

        if(password !== oldPass) return dispatch(newError('Не правельный пароль'))
        dispatch(loginizatio(true))
        dispatch(getAlldata(data))
        L.setToken(password)
    }
)
export const changePassword = createAsyncThunk(
    'user/changePassword',
    async (password,{dispatch}) => {
        console.log(password);
        L.setToken(password)

        // dispatch(loginizatio(true))
    }
)



const userSlice = createSlice({
    name : 'user',
    initialState,

    reducers : {
   
    loginizatio(state,action){
        state.password = true;
        state.isAdmin = true
    },
    leaveUser(state){
        state.isAdmin = null;
        state.password = false;
        state.date = null;
        state.token = null;
    }


}
})

export const {
    loginizatio,
    leaveUser,
} = userSlice.actions



export default userSlice.reducer







