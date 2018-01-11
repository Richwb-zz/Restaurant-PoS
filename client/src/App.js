import React, { Component } from 'react';
import './App.css';
// import { Button, Grid, Row, Col, Nav } from 'react-bootstrap'
import API from './utils/API';
// import Order from './components/Order';
import MainPage from './components/Table/MainPage';
// import SetSeatModal from './components/Modals/SetSeatModal';

class App extends Component {

  state = {
    tables: {
      table1: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table2: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table3: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table4: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table5: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table6: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table7: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table8: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table9: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table10: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      }, table11: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      },
      table12: {
        isOccupied: false,
        guestNumber: null,
        bill: {
          id: null,
          items: {},
          total: null
        }
      }
    },
    servers: {},
    menu: {},
    activePage: ""
  }
  getMenu = () => {
    API.getMenu().then( results => {
      let newMenu = results.data
      this.setState({menu: newMenu}, ()=>{
        console.log(this.state.menu)
      })
    }).catch( error => {
      if (error) console.log(error)
    })
  }
  getServers= ()=>{
    API.getServers().then(results => {
      let newServers = results.data
      this.setState({servers: newServers }, () => {
        console.log(this.state.servers)
      })
    }).catch(error => {
      if (error) console.log(error)
    })
  }
  getTables = ()=>{
    API.getTables().then(results => {
      let newTables = results.data
      //not finished, need to itierate through data
      //this.setState({ servers: newServers }, () => {
       // console.log(this.state.servers)
      //})
    }).catch(error => {
      if (error) console.log(error)
    })
  }
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
