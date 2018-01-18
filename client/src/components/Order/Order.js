// Order Window to place orders.

// Menubuttons displays imports the items in the center of the screen
// Order list displays the far right list of items
// Hoc is a self wrapper for react

import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Well } from 'react-bootstrap';
import Menubuttons from "./MenuButtons";
import OrderList from "./OrderList";
import Hoc from "../Hoc/Hoc";


class Order extends Component {
    // State category holds the selected food category to be displayed ex:entree
    state = {
        category: "",
    };

    // Passed as prop to Menu buttons and processes the clicking of an item to be added to the pending order
    addToOrder = (newItem) => {
        //props.table is passed in from app.js and is information for that table from state.
        let orderList = this.props.table.pendingOrder;
        let itemIndex;
        
        //Looks to see if the item already exists in orderList if found increase its quantity count by 1 if not found push the information into the list.
        itemIndex = orderList.findIndex(index => index.name === newItem.name);
        itemIndex !== -1 ? orderList[itemIndex].quantity = parseInt(orderList[itemIndex].quantity,10) + 1 : orderList.push(newItem);
        
       //function passed in from app.js and adds the item to app.js' pendingOrder state
        this.props.updatePendingOrder(orderList);
    }

    /* 
        When the remove button ("X") is clicked in orderList this function is called to remove 1 unit of that item from the list. 
    */
    removeFromOrder = (itemToRemove) => {
        let orderList = this.props.table.pendingOrder;
        let itemIndex;

        // Find the index position of the item in the list
        itemIndex = orderList.findIndex(index => index.name === itemToRemove);
        
        // if quantity of item is greater then 1 subtract 1 from the quantity else remove the item completely
        orderList[itemIndex].quantity > 1 ? orderList[itemIndex].quantity = parseInt(orderList[itemIndex].quantity,10) - 1 : orderList.splice(orderList[itemIndex],1);  
        
        // call function in app.js to update app.js state
        this.props.updatePendingOrder(orderList);
    }

    // Sets state of category with the name of the category clicked
    onItemClick = event => {
        this.setState({
            category : event.target.id
        });
    }

    // Upon clicking the Submit button this function is called
    // Calls the following functions residing in app.js to move the orders from pending to ordered
    orderSubmit = () => {
        
        // Empties app.js pendingOrder State for active table
        this.props.updatePendingOrder();
        
        // Passes the information to app.js for processing
        this.props.orderSubmit(this.state.newOrderList);
    }

    updatePending = () => {
        this.props.updatePendingOrder(this.state.newOrderList);
    }

    // Renders a list of categories, the items the ordered list and a submit button
    render() {
        return (
            <Grid fluid>  
                <Hoc>    
                    <Row>
                        <Col id="section" md={2}>
                            <Panel>
                                <Well>
                                    <h2 onClick={(event) => this.onItemClick(event)} id={"drink"}>      Drinks     </h2>
                                    <h2 onClick={(event) => this.onItemClick(event)} id={"appetizer"}>  Appetizers </h2>
                                    <h2 onClick={(event) => this.onItemClick(event)} id={"entree"}>     Entree     </h2>
                                    <h2 onClick={(event) => this.onItemClick(event)} id={"dessert"}>    Dessert    </h2>
                                    <h2 onClick={(event) => this.onItemClick(event)} id={"special"}>    Specials   </h2>
                                </Well>
                            </Panel>
                        </Col>
                        <Col id="items" md={4}>
                            <Panel>
                                <Well>
                                    <Menubuttons addToOrder={this.addToOrder.bind(this)} menu={this.props.menu} category={this.state.category} />
                                </Well>
                            </Panel>
                        </Col>
                        <Col id="order-list" md={6}>
                            <Panel>
                                <Well>
                                    <OrderList removeFromOrder={this.removeFromOrder.bind(this)} newOrderList={this.props.table.pendingOrder} />
                                </Well>
                            </Panel>
                        </Col>
                    </Row>
                    <div>
                        <Button onClick={() => this.orderSubmit()}>Submit</Button>
                    </div>
                </Hoc>
            </Grid>
        )
    }
};

export default Order;