import React from 'react';
import { Col, Row, Grid, Jumbotron, Panel } from 'react-bootstrap';
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
                        {props.tables.map( (item)=>{
                            let itemKey = Object.keys(item)[0]
                            let table=item[itemKey]
                        return (
                        <Col md={3} xs={2} key={table.name}>
                                <Panel onClick={()=> props.clicked(table.name)} bsStyle={ table.isOccupied? "danger" : "success" }>
                                    <Panel.Heading className="tablePanel" >
                                        <Panel.Title>
                                            <h2>{table.name}</h2 >
                                        {table.isOccupied ?  (
                                                <h3> Guests: {table.guestNumber} </h3>)
                                                : (<h3> Table Open </h3>)}
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

        