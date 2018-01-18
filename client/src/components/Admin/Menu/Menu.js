import React, { Component } from 'react';
import { Button, Well, Panel, Grid, FormControl, Row, Col, Table } from 'react-bootstrap'
import { withAlert } from 'react-alert';

// makes it easy to reset the state of the page / clear the forms

const initialState = {
    newMenu: {
        name: "",
        description: "",
        cost: "",
        category: "appetizer"
    }
}

class Menu extends Component {
    state = initialState;

    //updates states immediately on change for all onChange events

    changeHandler = (event, item) => {
        let menu = { ...this.state.newMenu }
        menu[item] = event.target.value
        this.setState({ newMenu: menu })

    }
    //submits new menu item
    newMenuSubmitHandler = () => {
        this.props.addMenu(this.state.newMenu)
        this.resetToInitialState();
    }
    
    resetToInitialState = () => {
        this.setState(initialState, function () {
            this.props.alert.show('New Menu Item Successfully Submitted.')
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
                                                <FormControl
                                                 type="text" 
                                                 bsSize="small" 
                                                 value={this.state.newMenu.name} 
                                                 onChange={event => this.changeHandler(event, "name")} />
                                            </td>

                                            <td>
                                                <FormControl 
                                                type="text" 
                                                bsSize="small" 
                                                value={this.state.newMenu.description} 
                                                onChange={event => this.changeHandler(event, "description")} />
                                            </td>

                                            <td>
                                                <FormControl
                                                 type="text" 
                                                 bsSize="small" 
                                                 value={this.state.newMenu.cost} 
                                                 onChange={event => this.changeHandler(event, "cost")} />
                                            </td>

                                            <td>
                                                <FormControl
                                                 componentClass="select"
                                                 value={this.state.newMenu.category}
                                                 onChange={event => this.changeHandler(event,"category")}>
                                                    <option selected
                                                        value="appetizer"
                                                        > Appetizer 
                                                    </option>
                                                    <option
                                                        value="entree"
                                                        > Entree
                                                    </option>
                                                    <option
                                                        value="drink"
                                                        > Drink
                                                    </option>
                                                    <option
                                                        value="dessert"
                                                        > Dessert
                                                    </option>
                                                    <option
                                                        value="special"
                                                        > Special
                                                    </option>
                                                </FormControl>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Button 
                                bsSize="large" 
                                bsStyle="info" 
                                onClick={this.newMenuSubmitHandler}> Submit 
                                </Button>
                            </Well>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }


}
export default withAlert(Menu);
