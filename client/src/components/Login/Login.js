import React, {Component} from 'react'
import { Grid, Row, Col, Button} from 'react-bootstrap';
import API from '../../utils/API'

class Login extends Component {
    state = {
        code: ""
    }

    enterId = event =>{
        let newId = this.state.code + event.target.value
        this.setState({
            code: newId
        });
    }

    userCheck = () => {
        this.setState({
            code: ""
        });

        API.login(this.state.code, this.props.setUser)
    }
    
    render(params){
        return (
            <div>
                <form>
                    <label> 
                        id:
                        <input 
                            type="text"
                            name="id"
                            value={this.state.code}
                            disabled="disabled"
                        />
                    </label>
                </form>
                <Grid>
                    <Row>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="1">1</Button></Col>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="2">2</Button></Col>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="3">3</Button></Col>
                    </Row>
                    <Row>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="4">4</Button></Col>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="5">5</Button></Col>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="6">6</Button></Col>
                    </Row>
                    <Row>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="7">7</Button></Col>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="8">8</Button></Col>
                        <Col md={1}><Button onClick={(event) => this.enterId(event)} value="9">9</Button></Col>
                    </Row>
                    <Row>
                        <Col md={3}><Button onClick={(event) => this.enterId(event)} value="0">0</Button></Col>
                    </Row>
                    <Row>
                        <Col md={3}><Button onClick={() => this.userCheck()}>Login</Button></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Login