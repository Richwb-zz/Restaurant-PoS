import React, {Component} from 'react';
import { Col, Button, Row, Grid, Jumbotron, Panel } from 'react-bootstrap';
import { SetSeatModal } from '../Modals/SetSeatModal';
import './Table.css';


const table = props => {

    // closeModal(e) {
    //     console.log("working closeModal")
    //     e.preventDefault();
    //     this.setState({
    //         modalToggle: false
    //     });
    // }

    // handleTableClick(e) {
    //     e.preventDefault();
    //     const modalAction = !this.state.modalToggle;
    //     // const seatCheck = this.state.isOccupied ? false : true;
    //     this.setState({
    //         modalToggle: modalAction
    //     });


        return(
            <Grid fluid>
                <Grid>
                    <Jumbotron className="text-center">
                        <h1> Eat At Joes </h1>
                        <h2> Select a table to perform functions </h2>
                    </Jumbotron>
                    <Row>
                        {props.tables.map( (table)=>{
                        return (
                        <Col md={3} xs={2} key={table.name}>
                                <Panel onClick={()=> props.clicked(table.name)} bsStyle={ table.isOccupied? "danger" : "success" } data-value="test">
                                    <Panel.Heading data-value="test" className="tablePanel" >
                                        <Panel.Title data-value="test">
                                            <h2 data-value="test" >{table.name}</h2 >
                                        {table.isOccupied ?  (
                                                <h3> Guests: {table.guestNumber} </h3>)
                                                : (<h3 data-value= "test"> Table Open </h3>)}
                                    </Panel.Title>
                                </Panel.Heading>
                            </Panel>
                        </Col>
                        )
                    })
                    }
                    </Row>
                </Grid>
            </Grid> 
            )
        }
export default table;

        