import React from 'react'
import { Button, Modal, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

const newSeating = props => {
    return (
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>{props.modal.name} New Seating </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Seat New Customers:</p>
                <DropdownButton bsSize="large" title={props.chosenServer} id="modalDropButtonServer">
                    {props.servers.map((server, index) => {
                        return (
                            <MenuItem key={server._id} eventKey={server.name} value={server.name} onClick={() => props.handleServerSelection(server.name)}> {server.name} </MenuItem>
                        )
                    })}
                </DropdownButton>
                <p>Number of Guests</p>
                <DropdownButton id="modalDropButtonGuests" title={props.guestNumber}>
                    <MenuItem value={1} onClick={() => props.setGuests(1)}>1</MenuItem>
                    <MenuItem value={2} onClick={() => props.setGuests(2)}>2</MenuItem>
                    <MenuItem value={3} onClick={() => props.setGuests(3)}>3</MenuItem>
                    <MenuItem value={4} onClick={() => props.setGuests(4)}>4</MenuItem>
                    <MenuItem value={5} onClick={() => props.setGuests(5)}>5</MenuItem>
                    <MenuItem value={6} onClick={() => props.setGuests(6)}>6</MenuItem>
                    <MenuItem value={7} onClick={() => props.setGuests(7)}>7</MenuItem>
                    <MenuItem value={8} onClick={() => props.setGuests(8)}>8</MenuItem>
                </DropdownButton>
                <Button onClick={() => props.seatGuests(props.chosenServer, props.guestNumber)}>Submit</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </div>
    )
}

export default newSeating;