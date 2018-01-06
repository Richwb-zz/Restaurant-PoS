import React from 'react'
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

const navbar = (props) => {

    return (
        <Nav bsStyle="tabs" activeKey={props.activePage} onSelect={k => props.handleSelect(k)}>
            <NavItem eventKey="Tables" title="Tables">
                NavItem 1 content
				</NavItem>
            <NavItem eventKey="Orders" title="Orders">
                NavItem 2 content
				</NavItem>
            <NavItem eventKey="Tabs" title="Tabs"> 
                NavItem 3 content
				</NavItem>
            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem eventKey="4.4">Separated link</MenuItem>
            </NavDropdown>
        </Nav>
    );

}

export default navbar;
