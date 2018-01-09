import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap';
import Menubuttons from "./MenuButtons";
import OrderList from "./OrderList";
import Hoc from "../Hoc/Hoc";
import placeOrder from "../../utils/API"
const menu = [[{"name": "coke"},{"name": "water"}],[{"name": "salad"},{"name": "soup"}]];

class Order extends Component {
    state = {
        id: -1,
        newOrderList: []
    };

    addToOrder = (newItem) => {
        let orderList = this.props.newOrderList;
        let itemIndex;
        
        itemIndex = orderList.findIndex(index => index.name === newItem.name);
        itemIndex !== -1 ? orderList[itemIndex].quantity = parseInt(orderList[itemIndex].quantity) + 1 : orderList.push(newItem);
        this.setState({newOrderList: orderList});
    }

    removeFromOrder = (itemToRemove) => {
        let orderList = this.state.newOrderList;
        let itemIndex;

        itemIndex = orderList.findIndex(index => index.name === itemToRemove);
        orderList[itemIndex].quantity > 1 ? orderList[itemIndex].quantity = parseInt(orderList[itemIndex].quantity) - 1 : orderList.splice(orderList[itemIndex],1);
        this.setState({newOrderList: orderList});
    }

    onItemClick = (event) => {
        this.setState({
            id : event.target.dataset.id
        });
    }

    submitOrder = () => {
        let currentOrderList = this.props["tables"]["table1"]["bill"]["items"];
        let currentItemIndex;
        
        this.state.newOrderList.map((newItem) => {
            currentItemIndex = currentOrderList.findIndex(index => index.name === newItem.name);
            currentItemIndex !== -1 ? currentOrderList[currentItemIndex].quantity = parseInt(currentOrderList[currentItemIndex].quantity) + parseInt(newItem.quantity) : currentOrderList.push(newItem);
        });
        this.setState({[["tables"]["table1"]["bill"]["items"]]: currentOrderList});
    }

    render() {
        return (
            <Hoc>    
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
                        <OrderList newOrderList={this.state.newOrderList} removeFromOrder={this.removeFromOrder.bind(this)} newOrders={this.state.newOrderList} />
                    </Col>
                </Row>
                <div>
                    <Button onClick={this.submitOrder()}>Submit</Button>
                </div>
            </Hoc>
        )
    }
};

export default Order;