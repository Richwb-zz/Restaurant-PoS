import React from 'react'
import { Button, Modal, ButtonGroup } from 'react-bootstrap';
import Checkout from './Checkout/Checkout'
import Print from './Print/Print'

const occupied = props => {
    let occupiedRenderPage = null;
//conditional rendering
    switch(props.render){

        case ('receipt'):
            occupiedRenderPage=  (
                <Print 
                table={props.table} />
            )
        break;

        case ('checkout'):
            occupiedRenderPage= (
                <Checkout 
                table={props.table} 
                submitPayment={props.submitPayment} />
            )
        break;

        default:
        occupiedRenderPage=  (
            <ButtonGroup 
            vertical 
            block>
                <Button 
                bsSize="large" 
                bsStyle="success" 
                onClick={props.order}> Place Order 
                </Button>
                <Button 
                bsSize="large" 
                bsStyle="info" 
                onClick={() => props.click("receipt")}> Print Check
                 </Button>
                <Button 
                bsSize="large" 
                bsStyle="primary" 
                onClick={() => props.click("checkout")}> Checkout
                 </Button>
            </ButtonGroup>
        )

    }
    return (
        <div 
        className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{props.table.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Guests: {props.table.guestNumber} </Modal.Body>
                {occupiedRenderPage}
                <Modal.Footer>
                    <Button 
                    onClick={props.close}>Close
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
export default occupied;