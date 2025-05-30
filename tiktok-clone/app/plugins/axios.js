import axios from "axios";


export default defineNuxtPlugin((NuxtApp)=>{

    axios.defaults.withCredentials = true
    axios.defaults.baseURL = "http://localhost:8001"

    return {
        provide :{
            axios: axios
        }
    }
})