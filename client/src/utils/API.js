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
    placeOrder: (order)=>{
        return (
            
            axios.put("http://localhost:4444/order/" + order.id, {[order] : order})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
        )
    }
}