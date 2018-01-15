import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class MenuButtons extends Component {
    
    addOrder = (event) => {
        const itemToAdd = {name: event.target.id, quantity: "1"};
        this.props.addToOrder(itemToAdd);
    }

    renderButtons(props){
        if(props.category !== ""){
            return (
                props.menu.map((items,index) => {  
                    if (items.category === props.category){
                        return <Button key={items._id} id={items.name} onClick={(event) => this.addOrder(event)}>{items.name}</Button>
                    }
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