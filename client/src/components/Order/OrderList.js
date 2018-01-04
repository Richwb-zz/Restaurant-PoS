import React, { Component } from 'react';

const OrderList = props => {
    console.log("test");
    console.log(props);
    return(
        props.newOrders
    );
};

export default OrderList;