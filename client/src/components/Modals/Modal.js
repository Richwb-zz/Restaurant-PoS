import React from 'react';
import { Button, Modal, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import Aux from '../Hoc/Hoc'

class SeatModal extends React.Component {

    state = {
        chosenServer: "Select Server"
    }
    handleServerSelection = (server) => {
        this.setState({chosenServer: server});       
    }

    render() {
        let modal = this.props.tables[this.props.activeTableIndex]

        if (this.props.activeTable) {
            return (
                <Aux>
                    {modal.isOccupied ? (
                        <div className="static-modal">
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>{modal.name}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Guests: {modal.guestNumber} </Modal.Body>
                                <ButtonGroup vertical>
                                    <Button onClick={this.props.order}> Place Order </Button>
                                    <Button onClick={this.props.receipt}> Print Check </Button>
                                    <Button onClick={this.props.checkout}> Checkout </Button>
                                </ButtonGroup>
                                <Modal.Footer>
                                    <Button onClick={this.props.close}>Close</Button>
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
                                        <DropdownButton bsSize="large" title={this.state.chosenServer} id="modalDropButton">
                                            {this.props.servers.map((server, index) => {
                                                return (
                                                    <MenuItem key={server._id} eventKey={server.name} value={server.name} onClick={()=> this.handleServerSelection(server.name)}> {server.name} </MenuItem>
                                                )
                                            })}
                                        </DropdownButton>
                                        <Button>Submit</Button>

                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button onClick={this.props.close}>Close</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>
                        )
                    }
                </Aux>
            )
        }
        else {
            this.props.close();
            return null;
        }
    }
}
export default SeatModal;