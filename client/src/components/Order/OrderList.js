import React, { Component } from 'react';
import { Button, Grid, Table } from 'react-bootstrap';

// Renders a list of all items selected in the Order screen
class OrderList extends Component {
    getOrderItems = (props) => {
        return (
            <Grid fluid>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>
                                Item
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Delete
                            </th>
                            </tr>
                    </thead>
                    <tbody>
                        {/* Loops through orderList from app.js state and dispays the item name, quantity and delete button */}
                        {props.newOrderList.map((item, index) => {
                            return (
                                <tr key={item._id}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                    <td>
                                        <Button id={item.name + "delete"} onClick={(event) => this.getItemToRemove(event)}>X</Button>
                                    </td>
                                </tr>
                            );
                        
                        })}
                    </tbody>
                </Table>
            </Grid>
        );
    };

    // called when delete ("X") button is clicked
    getItemToRemove = (event) => {
        // Retrieves the id information and removes the word delete to retrieve the item name
        const itemToRemove = event.target.id.replace("delete","");
        // passes the item to Order to be processed
        this.props.removeFromOrder(itemToRemove);
    }

    // Renders the page by calling function
     render(){
        return(
            this.getOrderItems(this.props)
        )
    };
}

export default OrderList;