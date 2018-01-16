import React from 'react'
import { Button, Modal, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

const OrderModal = props => {
    return(
        <div>
            <Modal.Dialog>
                <Modal.Header>
                    Order submission
                </Modal.Header>
                <Modal.Body>
                    {props.orderMessage}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.orderClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default OrderModal;