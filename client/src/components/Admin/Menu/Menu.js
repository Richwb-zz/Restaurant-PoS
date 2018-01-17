import React, { Component } from 'react';
import { Button, Well, Panel, Grid, Form, FormControl, FormGroup, ControlLabel, Row, Col, Table } from 'react-bootstrap'


const initialState = {
    newMenu: {
        name: "",
        description: "",
        cost: "",
        category: ""
    }
}

class Menu extends Component {
    state = initialState;


    changeHandler = (event, item) => {
        let menu = { ...this.state.newMenu }
        menu[item] = event.target.value
        this.setState({ newMenu: menu })

    }
    newMenuSubmitHandler = () => {
        console.log("submitted new menu")
        console.log("newServer", this.state.newMenu)
        this.props.addMenu(this.state.newMenu)
        this.resetToInitialState();
    }
    resetToInitialState = () => {
        this.setState(initialState, function () {
            console.log("state reset")
        })
    }
    render() {

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <Panel>
                            <Well>
                                <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            <th> Name </th>
                                            <th> Description </th>
                                            <th> Cost </th>
                                            <th> Category </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.menu.map(menu => {
                                            return (
                                                <tr key={menu._id}>
                                                    <td> {menu.name} </td>
                                                    <td> {menu.description}</td>
                                                    <td> {menu.cost} </td>
                                                    <td> {menu.category} </td>
                                                </tr>)
                                        }
                                        )}
                                        <tr>
                                            <td>
                                                <FormControl type="text" bsSize="small" value={this.state.newMenu.name} onChange={event => this.changeHandler(event, "name")} />
                                            </td>

                                            <td>
                                                <FormControl type="text" bsSize="small" value={this.state.newMenu.description} onChange={event => this.changeHandler(event, "description")} />
                                            </td>

                                            <td>
                                                <FormControl type="text" bsSize="small" value={this.state.newMenu.cost} onChange={event => this.changeHandler(event, "cost")} />
                                            </td>

                                            <td>
                                                <FormControl type="text" bsSize="small" value={this.state.newMenu.category} onChange={event => this.changeHandler(event, "category")} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Button bsSize="large" bsStyle="info" onClick={this.newMenuSubmitHandler}> Submit </Button>
                            </Well>
                        </Panel>
                    </Col>
                </Row>
                {/* <Row>
                <Col xs={12}>
                    <Panel>
                        <Well>
                            <Form horizontal>
                                <FormGroup>
                                    <div>
                                        <ControlLabel>New Menu Name</ControlLabel>
                                        <FormControl type="text" bsSize="small" value={this.props.menu.name} onChange={event => this.changeHandler(event,"name")} />

                                        <ControlLabel>New Menu Description</ControlLabel>
                                        <FormControl type="text" bsSize="small" value={this.props.menu.description} onChange={event => this.changeHandler(event, "description")} />

                                        <ControlLabel>New Menu Cost</ControlLabel>
                                        <FormControl type="text" bsSize="small" value={this.props.menu.cost} onChange={event => this.changeHandler(event, "cost")} />

                                        <ControlLabel>New Menu Category</ControlLabel>
                                        <FormControl type="text" bsSize="small" value={this.props.menu.category} onChange={event => this.changeHandler(event, "category")} />
                                    </div>
                                    <Button bsSize="large" bsStyle="info" onClick={this.newServerSubmitHandler}> Submit </Button>
                                </FormGroup>
                            </Form>
                        </Well>
                    </Panel>
                </Col>
            </Row> */}
            </Grid>
        )
    }


}
export default Menu;
