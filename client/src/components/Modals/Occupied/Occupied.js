import React from 'react'
import { Button, Modal, ButtonGroup } from 'react-bootstrap';
import Checkout from './Checkout/Checkout'
import Print from './Print/Print'

const occupied = props => {
    return (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{props.modal.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>Guests: {props.modal.guestNumber} </Modal.Body>
                <ButtonGroup vertical block>
                    <Button bsSize="large" bsStyle="success" block onClick={props.order}> Place Order </Button>
                    <Button bsSize="large" bsStyle="info" block onClick={props.receipt}> Print Check </Button>
                    <Button bsSize="large" bsStyle="primary" block onClick={props.checkout}> Checkout </Button>
                </ButtonGroup>
                <Modal.Footer>
                    <Button onClick={props.close}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
export default occupied;