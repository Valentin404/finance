import { loginizatio } from "./user/user"
import data from '../data.json'
import {getAlldata} from './data/asinc'
import L from '../Local/Local'
import { cgangeCurrentThema } from "./settings/settings"

export const authorization = () => dispatch => {

   const password = L.getToken()
   
   if(password){
      dispatch(loginizatio())

   }

   const thema = L.getThema()
   if(thema){
      dispatch(cgangeCurrentThema(thema))
   }


   if(true){
      const {cateqory, transactions,valuts} = data
      dispatch(getAlldata(data))
   }
}

