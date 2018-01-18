// Reciept Modal to display the tables orders broke down by item, quantity and cost followed by sub-total, tax and total

// Uses react-bootstrap for CSS styling
import React from 'react'
import { Row,Col } from 'react-bootstrap';

// Loops through the reciept items to display them individually and put them in Row Col form 
const createReceipt = (items) => {
    return(
        items.map(item => {
            return(
                <Row key={item._id}>

                    <Col 
                    md={3}>{item.name}
                    </Col>

                    <Col 
                    md={3}>{item.quantity}
                    </Col>

                    <Col 
                    md={3}>${item.charge}
                    </Col>

                </Row>
            );
        })
    )
}

// Renders headers and costs.
const print = props => {
    return (
        <div>
            <Row>

                <Col 
                md={3}><h3>Item</h3>
                </Col>
                <Col 
                md={3}><h3>#</h3>
                </Col>
                <Col 
                md={3}><h3>Cost</h3>
                </Col>  
            </Row>
                {createReceipt(props.table.bill.items)}
            <Row>
                <Col 
                mdOffset={4} 
                md={6}><h4>Sub-Total: ${(props.table.bill.total).toFixed(2)}</h4>
                </Col>
            </Row>
            <Row>
                <Col 
                mdOffset={4} 
                md={6}><h4>Tax: ${(props.table.bill.total * 0.07).toFixed(2)}</h4>
                </Col>
            </Row>
            <Row>
                <Col
                 mdOffset={4}
                md={6}><h4>Total: ${(props.table.bill.total * 1.07).toFixed(2)}</h4>
                </Col>
                
            </Row>


        </div>
    )
}

export default print;
