import React from 'react';
import {Button} from 'react-bootstrap';
// import {MainPage} from './Table/MainPage';
// import [green, red] from './'

export class ConfirmSeats extends React.Component{
    render(){
        return(
            <Button id='btn1'>Confirm Seats</Button>
        )
    }
}

export class CloseModal extends React.Component{
        handleModalClose(e){
            e.preventDefault();
        }
    render(){
        return(
            <button onClick={this.props.CloseModal}>Cancel</button>
        );
    }
};

export class CancelButton extends React.Component{
    
    handleCancel(e){
        e.preventDefault();
        window.history.back();
    }
    render(){
        return(
            <button onClick={this.handleCancel.bind(this)}>Cancel</button>
        )
    }
};

export class PlaceOrder extends React.Component{
    render(){
        return(
            <Button id='btn1'>Place Order</Button>
        )
    }
}

export class PrintCheck extends React.Component{
    handlePrint(e){
        e.preventDefault();
        window.print();
    }
    render(){
        return(
            <Button id='btn1'onClick={this.handlePrint.bind(this)}>Print Receipt</Button>
        )
    }
}

export class Checkout extends React.Component{
    render(){
        return(
            <Button id='btn1'>Checkout</Button>
        )
    }
}
