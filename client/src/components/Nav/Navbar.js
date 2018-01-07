import React from 'react'
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import Hoc from '../Hoc/Hoc'

const navbar = (props) => {

    return (
        <Nav bsStyle="tabs" activeKey={props.activePage} onSelect={k => props.handleSelect(k)}>
            <NavItem eventKey="Tables" title="Tables">
                Tables
			</NavItem>
            <NavItem eventKey="Orders" title="Orders">
                Orders
			</NavItem>
            <NavItem eventKey="Tabs" title="Tabs"> 
                Tabs
			</NavItem>
            <Hoc>
                Active Table: {props.activeTable}
            </Hoc>
        </Nav>
    );

}

export default navbar;
