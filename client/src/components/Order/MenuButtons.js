import React from 'react'

const MenuButtons = props => {
    // console.log(props);
    // console.log(props.menu[0][0].name);
    const id = props.id;
  
        if(props.id > -1){
            return (
                props.menu[id].map((section,index) => {
                    return <p>{section.name}</p>
                })  
            );     
        }else{
            return <p></p>
        }
};

export default MenuButtons;