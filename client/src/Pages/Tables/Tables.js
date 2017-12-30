import React, { Component } from 'react'
import { Jumbotron, Button, Grid, Row, Col, Container } from 'react-bootstrap'
import Tables from '../../components/Tables'

class Tables extends Component {
    state = {
        tables: {
            table1: {
                name: "Table 1",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table2: {
                name: "Table 2",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table3: {
                name: "Table 3",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table4: {
                name: "Table 4",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table5: {
                name: "Table 5",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table6: {
                name: "Table 6",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table7: {
                name: "Table 7",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table8: {
                name: "Table 8",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table9: {
                name: "Table 9",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table10: {
                name: "Table 10",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            }, table11: {
                name: "Table 11",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            },
            table12: {
                name: "Table 12",
                isOccupied: false,
                guestNumber: null,
                server: {},
                bill: {
                    id: null,
                    items: {},
                    total: null
                }
            }
        }
    }
    tableClickHandler = (event) => {

    }
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1> Eat At Joes </h1>
                </Jumbotron>
                <Row>
                    {this.state.tables.map((tables,index) => {
                        return (
                    <Table table={table} onClick={(event) => this.tableClickHandler(event)} key={index}/>
                    )
                    })}
                </Row>
            </Container>
        )
    }


}
export default Tables;
