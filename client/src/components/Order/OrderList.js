import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap';

class OrderList extends Component {
    getOrderItems = (props) => {
        return (
            <div>
                <Row>
                    <Col md={4}>
                        Item
                    </Col>
                    <Col md={4}>
                        Quantity
                    </Col>
                    <Col md={4}>
                        Delete
                    </Col>
                </Row>
                {props.newOrderList.map((item, index) => {
                    return (
                        <Row>
                            <Col md={4}>
                                {item.name}
                            </Col>
                            <Col id={item.name + "count"} md={4}>
                                {item.quantity}
                            </Col>
                            <Col md={4} >
                                <Button id={item.name + "delete"} onClick={(event) => this.getItemToRemove(event)}>X</Button>
                            </Col>
                        </Row>
                    );
                
                })}
            </div>
        );
    };

    getItemToRemove = (event) => {
        const itemToRemove = event.target.id.replace("delete","");
        this.props.removeFromOrder(itemToRemove);
    }

     render(){
        return(
            this.getOrderItems(this.props)
        )
    };
}

export default OrderList;