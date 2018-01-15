import React, { Component } from 'react';
import { Button, Grid, Table } from 'react-bootstrap';

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