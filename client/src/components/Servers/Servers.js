import React, { Component } from 'react'
import { Button, Well, Panel, FormControl, FormGroup, ControlLabel, Grid, Row, Col, Jumbotron } from 'react-bootstrap'

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
            <Grid>
                <Jumbotron>
                    <h1> Servers </h1>
                </Jumbotron>
                <Row>
                    <Col md={6} xs={12}>
                        <Panel>
                            <h2> Current Servers: </h2>
                            {this.props.servers.map((server) => (
                                <Well key={server._id}>
                                    <h3> {server.name} </h3>
                                </Well>
                            ))
                            }
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
                                            <ControlLabel>New Server Code</ControlLabel>
                                            <FormControl type="text" bsSize="small" value={this.state.newServer.code} onChange={this.newServerCodeChangeHandler} />
                                        </div>
                                        <Button bsSize="large" bsStyle="info" onClick={this.newServerSubmitHandler}> Submit </Button>
                                    </FormGroup>
                                </form>
                            </Well>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }


}
export default Servers;