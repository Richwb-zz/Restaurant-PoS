import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap';
import Menubuttons from "./MenuButtons";
import OrderList from "./OrderList";
const menu = [[{"name": "coke"},{"name": "water"}],[{"name": "salad"},{"name": "soup"}]];

class Order extends Component {
    state = {
        id: -1,
        newOrderList: []
    };

    addToOrder = (orderList) => {
        const addToOrder = this.state.newOrderList;
        addToOrder.push(orderList);
        this.setState({newOrderList:addToOrder});
    }

    onItemClick = (event) => {
        this.setState({
            id : event.target.dataset.id
        });
    }
    
    render() {
        return (
            <Row>
                <Col id="section" md={2}>
                    <h2 onClick={(event) => this.onItemClick(event)} data-id="0"> Drinks     </h2>
                    <h2 onClick={(event) => this.onItemClick(event)} data-id="1"> Appetizers </h2>
                    <h2 onClick={(event) => this.onItemClick(event)} data-id="2"> Entree     </h2>
                    <h2 onClick={(event) => this.onItemClick(event)} data-id="3"> Dessert    </h2>
                    <h2 onClick={(event) => this.onItemClick(event)} data-id="4"> Specials   </h2>
                </Col>
                <Col id="items" md={7}>
                    <Menubuttons addToOrder={this.addToOrder.bind(this)} menu={menu} id={this.state.id} />
                </Col>
                <Col id="order-list" md={3}>
                    <OrderList newOrders={this.state.newOrderList} />
                </Col>
            </Row>
        );
    }
}
export default Order;