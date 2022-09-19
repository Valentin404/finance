import { createSlice } from "@reduxjs/toolkit"
import sun from './themaIcon/sun.png'
import moon from './themaIcon/moon.png'
import L from '../../Local/Local'
    const dataThema = {
        black : {
            name : 'black',
            body : 'rgb(42,42,42)',
            header : '#1f1f1f',
            color : 'white',
            active : "#b5b5b5",
            buttonBg : '#444444',
            line : "rgba(255, 255, 255, 0.442)",
            img : sun,
            grafic : {
                type : "#6f6e6e",
                valuts : "rgba(56, 56, 56, 0.8)",
                sum : "rgba(31, 31, 31, 0.8)",
            },
            chart : 'dark1'
        },
        light  : {
            name : 'light',
            body : 'rgb(255,255,255)',
            header : '#cecece',
            color : 'black',
            active : "#b5b5b5",
            buttonBg : '#d6d6d6',
            line : "rgba(70, 70, 70, 0.442)",
            img :moon,
            grafic : {
                type : "rgba(31, 31, 31, 0.7)",
                valuts : "rgba(56, 56, 56, 0.6)",
                sum : "#6f6e6e",
            },
            chart : 'light1'
        },
    }




const initialState = {
  thema : dataThema.light,
  error : {
    active : false,
    text : ''
  },
  leave : false,
  changePassword : false,
  transactionElem : {
    active : false,
    elem : null
  },
  cateqory : false,
  workers : {
    active : false,
    elem : null
  },
  salary : false
}

const settingsSlice = createSlice({
    name : 'settings',
    initialState,

    reducers : {
    changeThema(state){
        state.thema.name === dataThema.black.name 
            ? state.thema = dataThema.light
            : state.thema = dataThema.black

        L.setThema(state.thema.name)    
    },
    cgangeCurrentThema(state,action){
        state.thema = dataThema[action.payload]
        
    },
    leaveOn(state,action){
        state.leave = action.payload
    },
    changePasswordOn(state,action){
        state.changePassword = action.payload
    },
    openCreatTransaction(state,action) {
        state.transactionElem.active = action.payload
    },
    changeTransitionElem(state,action){
        state.transactionElem.active = true;
        state.transactionElem.elem = action.payload;
    },
    changeWorkersElem(state,action){
        state.workers.active = true;
        state.workers.elem = action.payload;
    },
    clearTransitionElem(state){
        state.transactionElem.active = false;
        state.transactionElem.elem = null;
    },
    openWorkers(state,action) {
        if(action.payload == false) state.workers.elem = null
        state.workers.active = action.payload
    },
    openSalary(state,action) {
        state.salary= action.payload
    },
    openNewCateqory(state,action) {
        state.cateqory = action.payload
    },
    creatError(state,action){
        state.error.active = true;
        state.error.text = action.payload;
    },
    closeError(state,action){
        state.error.active = false;
        state.error.text = '';
    }
    
}
})

export const {
    changeThema,
    openSalary,
    leaveOn,
    changeWorkersElem,
    changeTransitionElem,
    changePasswordOn,
    openCreatTransaction,
    openNewCateqory,
    openWorkers,
    creatError,
    closeError,
    cgangeCurrentThema,
    clearTransitionElem
} = settingsSlice.actions


export default settingsSlice.reducer