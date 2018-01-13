import React from 'react';
import { Button, Modal, ButtonGroup } from 'react-bootstrap';
import Aux from '../Hoc/Hoc'

const modal = props => {
    console.log("modal props", props.modal)


    return (
    <Aux>
     { props.modal.isOccupied ? (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{props.modal.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Guests: {props.modal.guestNumber} </Modal.Body>
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
                        <Modal.Title>{props.modal.name} New Seating </Modal.Title>
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
);

    // // The gray background
    // const backdropStyle = {
    //     position: 'fixed',
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     backgroundColor: 'rgba(0,0,0,0.3)',
    //     padding: 50
    // };

    // // The modal "window"
    // const modalStyle = {
    //     backgroundColor: '#fff',
    //     borderRadius: 5,
    //     maxWidth: 500,
    //     minHeight: 300,
    //     margin: '0 auto',
    //     padding: 30
    // };

    // return (
    //     <div style={backdropStyle} id='modalDiv'>
    //         <div style={modalStyle}>

    //             <div>
    //                 {console.log(this.props)}
    //                 <CloseModal CloseModal={this.props.CloseModal} />
    //                 <div>Server <span><Servers /></span></div>
    //                 <div>Number of Guests <span><input type="text" /></span></div>
    //                 <ConfirmSeats />
    //             </div>
    //         </div>
    //     </div>
    // );
}
export default modal;