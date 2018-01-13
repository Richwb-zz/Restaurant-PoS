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
            <div className="text-right"> { props.activePage ? ( <span> Active Page: {props.activePage}</span>): null }{ props.activeTable ? (<span>Active Table: {props.activeTable} </span>): null}
            </div>  
        </Nav>
    );

}

export default navbar;
