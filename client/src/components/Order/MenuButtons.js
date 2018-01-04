import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class MenuButtons extends Component {
    
    addOrder = (event) => {
        this.props.addToOrder(event.target.id)
    }

    renderButtons(props){
        const id = props.id;
        if(id > -1){
            
            return (
                props.menu[id].map((section,index) => {
                    return <Button id={section.name} onClick={(event) => this.addOrder(event)}>{section.name}</Button>
                })  
            );     
        }else{
            return <p></p>
        }
    }

    render () {
        return(
            <div>
            {this.renderButtons(this.props)}
            </div>
        )
    }
};

export default MenuButtons;