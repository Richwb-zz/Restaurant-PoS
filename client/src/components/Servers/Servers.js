import React from 'react'
import { Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap'

const servers = props => {
    return (
        <Grid>
            <Jumbotron>
                <h1> Servers </h1>
            </Jumbotron>
            <Col md={12}>
                <h2> Current Servers: </h2>
                {props.servers.map((server,index) => {
                    return (
                        <div key={index}> {server} </div>
                    )
                })
                }
            </Col>
        </Grid>
    )

}

export default servers;