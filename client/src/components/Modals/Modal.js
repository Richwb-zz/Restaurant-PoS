import React from 'react';
import { Button, Modal, ButtonGroup } from 'react-bootstrap';
import Aux from '../Hoc/Hoc'

const modal = props => {
    console.log("modal active table", props.activeTable)
    console.log("modal tables", props.tables)
    let modal=props.tables[props.activeTableIndex]
    console.log("modal index", modal)
if (props.activeTable) {
    return (
    <Aux>
     { modal.isOccupied ? (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{modal.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Guests: {modal.guestNumber} </Modal.Body>
                    <ButtonGroup vertical>
                        <Button onClick={props.order}> Place Order </Button>
                        <Button onClick={props.receipt}> Print Check </Button>
                        <Button onClick={props.checkout}> Checkout </Button>
                    </ButtonGroup>
                    <Modal.Footer>
                        <Button onClick={props.close}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
        : (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{modal.name} New Seating </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Seat New Customers:</p>
                        <p> form goes here </p>
                        <Button>Submit</Button>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={props.close}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
    </Aux>
)
}
else {
    props.close();
    return null;
}
}
export default modal;