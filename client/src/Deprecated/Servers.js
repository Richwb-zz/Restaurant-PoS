import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { find } from 'lodash';

export class Servers extends React.Component {


    state = {
        chosenServer: "Select Server"
    }

    static defaultProps = {
        servers: ['Server 1', 'Server 2', 'Server 3', 'Server 4', 'Server 5', 'Server 6']
    }

    handleServerSelection = (server) => {
        this.setState({chosenServer: server});       
    }

        render() {
        const serverDisplay = this.props.servers.map((server, i) => {
            return (
                <MenuItem key={i} 
                options={ server }
                 clickaction={this.props} 
                 value={server} 
                 onClick={()=> this.handleServerSelection(server)}>{server}</MenuItem>
            )
        });
        // this.handleServerSelection();
        return (

            <DropdownButton
                title={this.state.chosenServer}
                key={this.props.server}
                id='dropBtn'
            >
                {serverDisplay}
            </DropdownButton>
        );


    }
}

