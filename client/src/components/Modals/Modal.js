import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const modal = props => {
    console.log("modal")
    return (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
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