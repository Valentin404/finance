import axios from 'axios'


const financeAPI = axios.create({
    baseURL: ''
})

const checkError = (res) => res.data.massage === 'good' ? res.data.session : Promise.reject('status error')


export default {
    login : ()=> new Promise((resolve)=> setTimeout(()=> resolve({status:200}),300))
}

