import { createSlice } from "@reduxjs/toolkit"
import { saveElem } from "./asinc"


const initialState = {
     valuts : [],
     cateqory : [],
     transactions : [],
     workers : [],
     typeSalary : []
}

const dataSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
        removeTransactionId(state,action){
            state.transactions = state.transactions.filter(elem => elem._id !== action.payload)
        },
        removeWorkersId(state,action){
            state.workers = state.workers.filter(elem => elem._id !== action.payload)
        },
        addCateqoryId(state,action){
            state.cateqory.push(action.payload)
        },
        addTypeSalary(state,action){
            state.typeSalary.push(action.payload)
        },
        saveTransaction(state,action){
            const elem = state.transactions.find(elem => elem._id == action.payload._id)
                for(const key in action.payload){
                    elem[key] = action.payload[key]
                }
        },
        creatNewTransaction(state,action){
            state.transactions.push(action.payload)
        },
        saveWorkers(state,action){
            const elem = state.workers.find(elem => elem._id == action.payload._id)
                for(const key in action.payload){
                    elem[key] = action.payload[key]
                }
        },
        creatNewWorkers(state,action){
            state.workers.push(action.payload)
        },
        allChangeCateqory(state,action){
            state.cateqory = action.payload
        },
        allChangeTransactions(state,action){
            state.transactions = action.payload
        },
        allChangeValuts(state,action){
            state.valuts = action.payload
        },
        allChangeWorkers(state,action){
            state.workers = action.payload
        },
        allChangeTypeSalary(state,action){
            state.typeSalary = action.payload
        },
}
})

export const {
    removeTransactionId,
    removeWorkersId,
    allChangeTypeSalary,
    addTypeSalary,
    saveWorkers,
    creatNewWorkers,
    allChangeCateqory,
    allChangeTransactions,
    allChangeValuts,
    addCateqoryId,
    saveTransaction,
    allChangeWorkers,
    creatNewTransaction,
} = dataSlice.actions


export default dataSlice.reducer