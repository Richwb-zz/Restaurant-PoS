import React, { Component } from 'react'
import { Button,Panel, Grid, Row, Col, Container } from 'react-bootstrap'

const table = (props) => {
        return (
            <Col xs={12} md={4}>
                <Panel bsStyle={props.isOccupied ? return "success" : return "danger"}>
                    <h2 bsStyle="panel-heading"> {props.name}</h2>
                    { props.isOccupied ? return ( 
                        <h3> Number of Guests: {props.guestNumber}</h3>
                        <h3> Current Bill Total: {props.bill.total}</h3>
                        <h4> Server:  {props.server} </h4>
                    ) :
                    return (
                        <h3> Open / Unoccupied </h3>
                    )}
                </Panel>
            </Col>
        )
    }


}
export default Table;