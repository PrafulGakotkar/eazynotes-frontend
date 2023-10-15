import axios from "axios";

export default axios.create({
    baseURL:'icky-rifle-production.up.railway.app',
    headers:{
        "Content-Type": "application/json"
    }
})