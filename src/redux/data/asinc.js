import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCateqoryId, addTypeSalary, allChangeCateqory, allChangeTransactions, allChangeTypeSalary, allChangeValuts, allChangeWorkers, creatNewTransaction, creatNewWorkers, removeTransactionId, removeWorkersId, saveTransaction,saveWorkers } from "./data";
import { v4 as uuidv4 } from 'uuid';
import { clearTransitionElem } from "../settings/settings";
export const removeTransaction = createAsyncThunk(
    'data/removeTransaction',
    async (_id,{dispatch}) => {
    
        dispatch(removeTransactionId(_id))
    }
)
export const removeWorkers = createAsyncThunk(
    'data/removeWorkers',
    async (_id,{dispatch}) => {
        dispatch(removeWorkersId(_id))
    }
)
export const addNewCateqory = createAsyncThunk(
    'data/addNewCateqory',
    async (cateqory,{dispatch}) => {
        dispatch(addCateqoryId(cateqory))
    }
)

export const saveTransactionAsinc = createAsyncThunk(
    'data/saveTransactionAsinc',
    async (elem,{dispatch}) => {
        const newElem = {...elem, sum : +elem.sum}
        if(elem._id){
            dispatch(saveTransaction(newElem))
        } else {
             newElem._id = uuidv4()
            dispatch(creatNewTransaction(newElem))
        }
        dispatch(clearTransitionElem())
    }
)
export const saveWorkersAsinc = createAsyncThunk(
    'data/saveWorkers',
    async (elem,{dispatch}) => {
        const newElem = {...elem,sum : +elem.sum}
        if(elem._id){
            dispatch(saveWorkers(newElem))
        } else {
             newElem._id = uuidv4()
            dispatch(creatNewWorkers(newElem))
        }
        dispatch(clearTransitionElem())
    }
)
export const greatSalaryAsinc = createAsyncThunk(
    'data/greatSalaryAsinc',
    async (elem,{dispatch}) => {

      
        dispatch(addTypeSalary(elem))
    }
)
export const getAlldata = createAsyncThunk(
    'data/getAlldata',
    async (data,{dispatch}) => {
        const {cateqory, transactions,valuts,workers,typeSalary} = data;
        dispatch(allChangeValuts(valuts))
        dispatch(allChangeTransactions(transactions))
        dispatch(allChangeCateqory(cateqory))
        dispatch(allChangeWorkers(workers))
        dispatch(allChangeTypeSalary(typeSalary))


    }
)