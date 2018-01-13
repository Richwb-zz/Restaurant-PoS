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
    seatGuests: (seating)=>{
        console.log ("seating",seating)
        return axios.post({
            url: encodeURI("http://localhost:4444/order/seat"),
            table: seating.table,
            guests: seating.guests,
            server: seating.server})
            .then(response =>{
                console.log(response);
                return response
            }).catch(error => {
                if (error) {
                    console.log(error);
                    return error;
                }
            })
    },
    placeOrder: (order)=>{
        return (
            axios.put({
                url: encodeURI("http://localhost:4444/order/"),
                "id": order.id,
                "order": order})
            .then(response => {
                console.log(response)
                return response;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
        )
    }
}