import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

export class Servers extends React.Component {

   render() {

        const servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4', 'Server 5', 'Server 6'];
        const serverDisplay = servers.map((server, index) => {
            return (
                <MenuItem key={server} eventKey={server} value={index.toString()}>{server}</MenuItem>
            )
        });

        return (
            
            <DropdownButton                
            title="Select Name"
            key={this.props.server}
            id='dropBtn'
            >
                {serverDisplay}
            </DropdownButton>
        );


    }
}