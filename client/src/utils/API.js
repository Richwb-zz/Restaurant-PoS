import axios from 'axios'


export default {
    getMenu: () => {
        return axios.get("http://localhost:4444/menu")
    },
    getServers: ()=>{
        return axios.get("http://localhost:4444/servers")
    },
    getTables: ()=>{
        return axios.get("http://localhost:4444/check/unpaid")
    },
    seatGuests: (seating)=>{
        console.log ("seating",seating)
        return axios.post("http://localhost:4444/check/seat",seating)
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
    placeOrder: (order, dbresponse)=>{
        return axios.put("http://localhost:4444/order/"+ order.bill.id, order)
            .then(response => {
                dbresponse(response)
                return response;
            })
            .catch(error => {
                return error;
            })
    },
    submitPayment: (payment) => {
        console.log("submit payment in API",payment)
        let newPayment = {}
        newPayment.paid = true;
        newPayment.card = payment.card
        newPayment.amountTendered = payment.amount;
        newPayment.paymentType = payment.paymentType;
        console.log("newPayment",newPayment)
        let URL = encodeURI("http://localhost:4444/check/"+payment.bill.id)
        return (
            axios.put(URL,newPayment)
                .then(response => {
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        )
    },
    login:(code, setUser) => {
        return(
            axios.get(`http://localhost:4444/servers/login/${code}`)
                .then(response => {
                    setUser(response.data);
                    return response.data;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        )
    },
    addServer: (server) => {
        console.log("adding server ",server)
        if (server) {
        let newServer={};
        newServer.name = server.name
        newServer.code = server.code

            return (
                axios.post('http://localhost:4444/servers/add', newServer)
                    .then(response => {
                        return response;
                    })
                    .catch(error => {
                        console.log(error);
                        return error;
                    })
            )
        }
    }
}