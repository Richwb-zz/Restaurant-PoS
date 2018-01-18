import React, { Component } from 'react'
import { Button, Well, Panel, FormControl, Row, FormGroup, ControlLabel, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { withAlert } from 'react-alert';

// makes it easy to reset the state of the page / clear the forms
const initialState = {
                    newServer: {
                        name: "",   
                        code: ""
                    }
                }
class Servers extends Component {
    state = initialState;
    //updates states immediately on change
    newServerNameChangeHandler = event => {
        let server = { ...this.state.newServer }
        server.name = event.target.value
        this.setState({ newServer: server })
    }
    //updates states immediately on change
    newServerCodeChangeHandler = event => {
        let server = { ...this.state.newServer }
        server.code = event.target.value
        this.setState({ newServer: server })
    }
      //Submits a new server
    newServerSubmitHandler = () => {
        //validation
        // if (this.state.newServer.name !== ""
        //  && typeof this.state.newServer.name === "string" 
        //  && typeof this.state.newServer.code === "number" ){
            this.props.addServer(this.state.newServer);

           this.resetToInitialState()

            
        // } else {
        //     this.props.alert.show("Validation failed",{type: "warning"})
        // }
    }
    resetToInitialState = () => {
        this.setState(initialState, function () {
            this.props.alert.show('Server Added', { type: "success" })
        })
    }
    
    render() {

        return (
                <Row>
                    <Col md={6} xs={12}>
                        <Panel>
                            <h3> Current Servers: </h3>
                            <ListGroup>
                            {this.props.servers.map((server) => (
                                    <ListGroupItem 
                                    key={server._id}> {server.name} 
                                    </ListGroupItem>
                            ))
                            }
                            </ListGroup>
                        </Panel>
                    </Col>
                    <Col md={6} xs={12}>
                        <Panel>
                            <Well>
                                <form>
                                    <FormGroup>
                                        <div>
                                            <ControlLabel>New Server Name</ControlLabel>
                                            <FormControl
                                             type="text" 
                                             bsSize="small" 
                                             value={this.state.newServer.name} 
                                             onChange={this.newServerNameChangeHandler} />
                                        </div>
                                        <div>
                                            <ControlLabel>New Server Pin Code</ControlLabel>
                                            <FormControl
                                             type="text" 
                                             bsSize="small" 
                                             value={this.state.newServer.code} 
                                             onChange={this.newServerCodeChangeHandler} />
                                        </div>
                                        <Button 
                                        bsSize="large" 
                                        bsStyle="info" 
                                        onClick={this.newServerSubmitHandler}> Submit 
                                        </Button>
                                    </FormGroup>
                                </form>
                            </Well>
                        </Panel>
                    </Col>
                </Row>
        )
    }


}
export default withAlert(Servers);