import React, { Component } from 'react';
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap';
import Menubuttons from "./MenuButtons";
const menu = [[{"name": "coke"},{"name": "water"}],[{"name": "salad"},{"name": "soup"}]];
let id = -1

class Order extends Component {
    state = {
        id: -1
    };

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
                </Col>
                <Col id="order-list" md={3}>
                    <Menubuttons menu={menu} id={this.state.id}/>
                </Col>
            </Row>
        );
    }
}
export default Order;