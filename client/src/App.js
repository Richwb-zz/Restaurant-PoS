import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Order from './Pages/Order'
import Tables from './Pages/Tables'
import Table from './Pages/Tables/Table'

const App = () => {
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Tables} />
                <Route exact path="/table/:id" component={Table} />
                <Route exact path="/order/:id" component={order} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>;


}
export default App;