import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const navbar = (props) => {

    return (
        <Nav navbar bsStyle="pills" activeKey={props.activePage} onSelect={k => props.handleSelect(k)}>
            <NavItem eventKey="Tables" title="Tables">
                Tables
			</NavItem>
            {props.activeTable ? (<NavItem eventKey="Orders" title="Orders"> Orders
			</NavItem>) : (<NavItem eventKey="Orders" title="Orders" disabled> Orders
			</NavItem>)}
            <NavItem eventKey="Admin" title="Admin"> 
                Admin
			</NavItem>
                {props.activeTable ? (<NavItem disabled eventKey="ActiveStuff">  Active Table: {props.activeTable} </NavItem>) : null}   
        </Nav>
    );

}

export default navbar;
