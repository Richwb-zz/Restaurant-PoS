import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const navbar = (props) => {

    return (
        <Nav bsStyle="tabs" activeKey={props.activePage} onSelect={k => props.handleSelect(k)}>
            <NavItem eventKey="Tables" title="Tables">
                Tables
			</NavItem>
            <NavItem eventKey="Orders" title="Orders">
                Orders
			</NavItem>
            <NavItem eventKey="Servers" title="Servers"> 
                Servers
			</NavItem>
            <div className="text-right"> ActivePage: {props.activePage} Active Table: {props.activeTable}
            </div>
        </Nav>
    );

}

export default navbar;
