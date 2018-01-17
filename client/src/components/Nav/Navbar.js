import React from 'react';
import { Nav, NavItem, Button} from 'react-bootstrap';
import HOC from "../Hoc/Hoc";

const navbar = (props) => {

    return (
        <Nav 
        navbar 
        bsStyle="pills" 
        activeKey={props.activePage} 
        onSelect={k => props.handleSelect(k)}>
            <NavItem 
            eventKey="Tables" 
            title="Tables">
                Tables
			</NavItem>
            {props.activeTable ? (<NavItem 
            eventKey="Orders" 
            title="Orders"> Orders
            </NavItem>) 
            : 
            (<NavItem 
            eventKey="Orders" 
            title="Orders" 
            disabled> Orders
			</NavItem>)}
            <NavItem 
            eventKey="Admin" 
            title="Admin"> 
                Admin
			</NavItem>
            {props.activeTable ? 
                (<NavItem 
                disabled 
                eventKey="ActiveStuff">  Active Table: {props.activeTable} 
                </NavItem>) 
                : null}   
            {
                props.loggedInUser ? 
                    (
                        <HOC>
                            <NavItem
                             eventKey="LoggedInServer" 
                             title="LoggedInServer" 
                             disabled>{props.loggedInUser} 
                             </NavItem>
                            <Button 
                            title="LogOutUser" 
                            bsSize="large" 
                            bsStyle="danger" 
                            onClick={props.logOut}>Logout
                            </Button>
                        </HOC>
                    ) 
                    : null}

        </Nav>
    );

}

export default navbar;
