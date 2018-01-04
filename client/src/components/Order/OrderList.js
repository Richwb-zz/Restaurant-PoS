import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap';

const getOrderItems = (newOrders) => {
    return (
        <Row>
        {newOrders.map((item, index) => {
            return (
                <div class={"row" + index}>
                    <Col md={6}>
                        {item}
                    </Col>
                    <Col md={6} >
                        <Button id={"row" + index} onClick={(event) => removeItem(event)}>X</Button>
                    </Col>
                </div>
            );
        
        })}
        </Row>
    );
};

const removeItem = (event) => {
    const element = document.getElementsByClassName(event.target.id)
    element[0].parentNode.removeChild(element[0]);

}

const OrderList = props => {
    return(
        getOrderItems(props.newOrders)                 
    );
};

export default OrderList;