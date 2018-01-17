import React from 'react'
import { Button,Row,Col } from 'react-bootstrap';

const createReciept = (items) => {
    console.log(items);
    return(
        items.map(item => {
            return(
                <Row>
                    <Col md={3}>{item.name}</Col>
                    <Col md={3}>{item.quantity}</Col>
                    <Col md={3}>${item.charge}</Col>
                </Row>
            );
        })
    )
}

const print = props => {
    return (
        <div>
            <Row>
                <Col md={3}><h3>Item</h3></Col>
                <Col md={3}><h3>#</h3></Col>
                <Col md={3}><h3>Cost</h3></Col>  
            </Row>
                {createReciept(props.table.bill.items)}
            <Row>
                <Col mdOffset={4} md={6}><h4>Sub-Total: ${(props.table.bill.total).toFixed(2)}</h4></Col>
            </Row>
            <Row>
                <Col mdOffset={4} md={6}><h4>Tax: ${(props.table.bill.total * 0.07).toFixed(2)}</h4></Col>
            </Row>
            <Row>
                <Col mdOffset={4} md={6}><h4>Total: ${(props.table.bill.total * 1.07).toFixed(2)}</h4></Col>
            </Row>


        </div>
        // <Button> thug lyfe </Button>
    )
}

export default print;
