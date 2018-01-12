import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap';
import Menubuttons from "./MenuButtons";
import OrderList from "./OrderList";
import Hoc from "../Hoc/Hoc";
import placeOrder, {} from "../../utils/API"

class Order extends Component {
    
    state = {
        category: "",
    };

    addToOrder = (newItem) => {
        let orderList = this.props.table.pendingOrder;
        let itemIndex;
        
        itemIndex = orderList.findIndex(index => index.name === newItem.name);
        itemIndex !== -1 ? orderList[itemIndex].quantity = parseInt(orderList[itemIndex].quantity) + 1 : orderList.push(newItem);
        // this.setState({newOrderList: orderList});
        
        this.props.updatePendingOrder(orderList);
    }

    removeFromOrder = (itemToRemove) => {
        let orderList = this.props.table.pendingOrder;
        let itemIndex;

        itemIndex = orderList.findIndex(index => index.name === itemToRemove);
        orderList[itemIndex].quantity > 1 ? orderList[itemIndex].quantity = parseInt(orderList[itemIndex].quantity) - 1 : orderList.splice(orderList[itemIndex],1);
        // this.setState({newOrderList: orderList});
        
        this.props.updatePendingOrder(orderList);
    }

    onItemClick = event => {
        this.setState({
            category : event.target.id
        });
    }

    orderSubmit = () => {
        // this.setState({newOrderList: []});
        this.props.updatePendingOrder();
        this.props.orderSubmit(this.state.newOrderList);
    }

    updatePending = () => {
        this.props.updatePendingOrder(this.state.newOrderList);
    }

    render() {
        return (
            <Hoc>    
                <Row>
                    <Col id="section" md={2}>
                        <h2 onClick={(event) => this.onItemClick(event)} id={"drink"}>      Drinks     </h2>
                        <h2 onClick={(event) => this.onItemClick(event)} id={"appetizer"}>  Appetizers </h2>
                        <h2 onClick={(event) => this.onItemClick(event)} id={"entree"}>     Entree     </h2>
                        <h2 onClick={(event) => this.onItemClick(event)} id={"dessert"}>    Dessert    </h2>
                        <h2 onClick={(event) => this.onItemClick(event)} id={"special"}>    Specials   </h2>
                    </Col>
                    <Col id="items" md={7}>
                        <Menubuttons addToOrder={this.addToOrder.bind(this)} menu={this.props.menu} category={this.state.category} />
                    </Col>
                    <Col id="order-list" md={3}>
                        <OrderList newOrderList={this.state.newOrderList} removeFromOrder={this.removeFromOrder.bind(this)} newOrderList={this.props.table.pendingOrder} />
                    </Col>
                </Row>
                <div>
                    <Button onClick={() => this.orderSubmit()}>Submit</Button>
                </div>
            </Hoc>
        )
    }
};

export default Order;