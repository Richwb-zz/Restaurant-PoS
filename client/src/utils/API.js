import axios from 'axios'


export default {
    getMenu: () => {
        return axios.get("http://localhost:4444/menu")
    },
    getServers: ()=>{
        return axios.get("http://localhost:4444/servers")
    },
    getTables: ()=>{
        return axios.get("http://localhost:4444/tables")
    },
    seatGuests: ()=>{
        return axios.get("http://localhost:4444/order/seat")
    },
    placeOrder: ()=>{
        return axios.get("http://localhost:4444/order/place")
    }
}