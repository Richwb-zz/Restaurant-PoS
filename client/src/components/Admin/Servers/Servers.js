import React, { Component } from 'react'
import { Button, Well, Panel, FormControl, Row, FormGroup, ControlLabel, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const initialState = {
                    newServer: {
                        name: "",   
                        code: ""
                    }
                }
class Servers extends Component {
    state = initialState;

    newServerNameChangeHandler = event => {
        let server = { ...this.state.newServer }
        server.name = event.target.value
        this.setState({ newServer: server })
    }
    newServerCodeChangeHandler = event => {
        let server = { ...this.state.newServer }
        server.code = event.target.value
        this.setState({ newServer: server })
    }
    newServerSubmitHandler = () => {
        console.log("submitted new Server")
        console.log("newServer", this.state.newServer.name, this.state.newServer.code)
        this.props.addServer(this.state.newServer)
        this.setState(initialState)
    }
    render() {

        return (
                <Row>
                    <Col md={6} xs={12}>
                        <Panel>
                            <h3> Current Servers: </h3>
                            <ListGroup>
                            {this.props.servers.map((server) => (
                                    <ListGroupItem key={server._id}> {server.name} </ListGroupItem>
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
                                            <FormControl type="text" bsSize="small" value={this.state.newServer.name} onChange={this.newServerNameChangeHandler} />
                                        </div>
                                        <div>
                                            <ControlLabel>New Server Pin Code</ControlLabel>
                                            <FormControl type="text" bsSize="small" value={this.state.newServer.code} onChange={this.newServerCodeChangeHandler} />
                                        </div>
                                        <Button bsSize="large" bsStyle="info" onClick={this.newServerSubmitHandler}> Submit </Button>
                                    </FormGroup>
                                </form>
                            </Well>
                        </Panel>
                    </Col>
                </Row>
        )
    }


}
export default Servers;