import { createAsyncThunk } from "@reduxjs/toolkit";
import { closeError, creatError } from "./settings";

export const newError = createAsyncThunk(
    'settings/removeTransaction',
    async (text,{dispatch}) => {
        dispatch(creatError(text))
        setTimeout(()=>dispatch(closeError()),2000)
    }
)
