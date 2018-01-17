import React, {Component} from 'react';
import { Button, Well, ListGroup, ListGroupItem, DropdownButton, MenuItem, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Hoc from '../../../Hoc/Hoc';

//initial state 
const initialState = {
    paymentMethod: "Payment Method",
    amountTendered: "",
    card: {
        cardNumber: "",
        cardExp: "",
        cvc: ""
    }
};


class Checkout extends Component {
    state = initialState;
    

    resetToInitialState = () => {
        this.setState(initialState)
    }
    payment = method => {
        this.setState({paymentMethod: method})
    }
    handleAmountChange=(event) => {
        //could use some validation if time allows
        this.setState({amountTendered: event.target.value})
    }
    handleCreditChange=(event) => {
        //could use some validation if time allows
        let card={...this.state.card}
        card.cardNumber = event.target.value
        this.setState({card: card})
    }
    handleExpChange=(event) => {
        //could use some validation if time allows
        let card = { ...this.state.card }
        card.cardExp = event.target.value
        this.setState({ card: card })
    }
    handleCvcChange=(event) => {
        //could use some validation if time allows
        let card = { ...this.state.card }
        card.cvc = event.target.value
        this.setState({ card: card })
    }

    submitPayment=()=>{
        let paymentObject = {}
        paymentObject.amount = this.state.amountTendered;
        paymentObject.paymentType = this.state.paymentMethod;
        paymentObject.card = this.state.card;
        paymentObject.bill = this.props.table.bill; 
        //send the object "down the chain"
        this.props.submitPayment(paymentObject)
        //reset the state
        this.resetToInitialState();
    }


    render() {
        //conditional rendering based on the pulldown menu
        let paymentMethodRender = null;
        switch(this.state.paymentMethod){
            
            case("Cash"):
            paymentMethodRender = (
                <Hoc>
                    <FormControl 
                    type="text" 
                    value={this.state.amountTendered} 
                    placeholder="Cash Tendered" 
                    onChange={this.handleAmountChange}/>
                    <Button 
                    bsSize="large" 
                    bsStyle="info" 
                    onClick={this.submitPayment}>Submit</Button>
                </Hoc>
            )
            break;

            case("Payment Method"):
            paymentMethodRender = (
                <Button 
                bsSize="large" 
                bsStyle="info" 
                disabled>Submit</Button>
            )
            break;

            // all non cash (credit)
            default:
            paymentMethodRender = (
                <Hoc>
                    <div>
                        <ControlLabel> Amount Tendered </ControlLabel>
                        <FormControl 
                        type="text" 
                        value={this.state.amountTendered} 
                        placeholder="Credit Tendered" 
                        onChange={this.handleAmountChange} />
                    </div>
                    <div>
                        <ControlLabel>Card Number</ControlLabel>
                        <FormControl 
                        type="text" 
                        value={this.state.card.cardNumber} 
                        placeholder="Card Number" 
                        onChange={this.handleCreditChange} />
                    </div>
                    <div>
                        <ControlLabel>Card Expiration</ControlLabel>
                        <FormControl 
                        type="text" 
                        bsSize="small" 
                        value={this.state.card.cardExp} 
                        placeholder="Card Expiration" 
                        onChange={this.handleExpChange} />
                    </div>
                    <div>
                        <ControlLabel>Card CVC</ControlLabel>
                        <FormControl 
                        type="text" 
                        bsSize="small" 
                        value={this.state.card.cvc} 
                        placeholder="CVC" 
                        onChange={this.handleCvcChange} />
                    </div>
                    <Button bsSize="large" 
                    bsStyle="info" 
                    onClick={this.submitPayment}>Submit</Button>
                </Hoc>
            )
        }
        return (
                    <Well>
                        <ListGroup>
                            <ListGroupItem> Server: {this.props.table.server} </ListGroupItem>
                            <ListGroupItem>ID: {this.props.table.bill.id}</ListGroupItem>
                            <ListGroupItem>Total: {this.props.table.bill.total}</ListGroupItem>
                        </ListGroup>
                        <form>
                            <FormGroup>
                                <DropdownButton 
                                id="checkoutDropDown" 
                                title={this.state.paymentMethod}>
                                    <MenuItem 
                                    value="VISA" 
                                    onSelect={() => this.payment("VISA")}>VISA
                                    </MenuItem>

                                    <MenuItem 
                                    value="MasterCard" 
                                    onSelect={() => this.payment("MasterCard")}>MasterCard
                                    </MenuItem>

                                    <MenuItem 
                                    value="AMEX" 
                                    onSelect={() => this.payment("AMEX")}>AMEX
                                    </MenuItem>

                                    <MenuItem 
                                    value="Diners Club" 
                                    onSelect={() => this.payment("Diners Club")}>Diners Club
                                    </MenuItem>
                                    <MenuItem 
                                    value="Cash" 
                                    onSelect={() => this.payment("Cash")}>Cash
                                    </MenuItem>
                                </DropdownButton>

                                {paymentMethodRender}

                            </FormGroup>
                        </form>
                    </Well>
                )
    }   
}
export default Checkout;
