import React from 'react'
import { Grid, Row, Col, Jumbotron,Button } from 'react-bootstrap'

const servers = props => (
        <Grid>
            <Jumbotron>
                <h1> Servers </h1>
            </Jumbotron>
            <Row>
                <Col md={12}>
                    <h2> Current Servers: </h2>
                    {props.servers.map((server) => (
                            <div key={server._id}> {server.name} </div>
                        )
                    )
                    }
                </Col>
                <Button onClick={props.getTables}> Get Tables </Button>
            </Row>
        </Grid>
    )


export default servers;