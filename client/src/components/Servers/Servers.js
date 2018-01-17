import React from 'react'
import { Grid, Row, Col, Jumbotron} from 'react-bootstrap'

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
            </Row>
        </Grid>
    )


export default servers;