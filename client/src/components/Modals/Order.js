// Modal that displays ordering confirmation or error
//information comes from app.js where it passes the message to display.

import React from 'react'
import { Button, Modal} from 'react-bootstrap';

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