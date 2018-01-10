import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'
import API from './utils/API'
import Order from './components/Order'
import Navbar from './components/Nav/Navbar'
import Hoc from './components/Hoc/Hoc'


class App extends Component {

  state = {
    tables: {
      table1: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table2: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table3: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table4: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table5: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table6: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table7: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table8: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table9: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table10: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      }, table11: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      table12: {
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      }
    },
    servers: [],
    menu: {},
    activePage: "Table",
    activeTable: "table1"
  }

  componentDidMount(){
    console.log("mounted")
    this.populateData();
  }
  populateData = () => {
    console.log("populate start")
    this.getMenu();
    this.getServers();
    this.getTables();
    console.log("populated")
  }
  activePageHandler = (event) => {
    //This is for the navbar to find the active page
    //alert(`selected ${event}`);
    this.setState({activePage: event}, function() { 
      console.log(this.state.activePage)
    })
  }
  activeTableHander = (event) => {
    //this is for the page to know what table is selected.  
    //Make sure error handling is added to mselect an active table / verify active table when submitting an order
    alert(`selected ${event}`)
  }
  getMenu = () => {
    API.getMenu().then(results => {
      let newMenu = results.data
      this.setState({ menu: newMenu }, () => {
        console.log(this.state.menu)
      })
    }).catch(error => {
      if (error) console.log(error)
    })
  }
  getServers = () => {
    API.getServers().then(results => {
      let newServers = results.data
      this.setState({ servers: newServers }, () => {
        console.log(this.state.servers)
      })
    }).catch(error => {
      if (error) console.log(error)
    })
  }
  getTables = () => {
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
  savePendingOrder = newOrderList => {
    const activeTable = this.state.activeTable
    let currentOrderList = this.state.tables[activeTable].bill.items
    let currentItemIndex;
        
        newOrderList.map((newItem) => {
            currentItemIndex = currentOrderList.findIndex(index => index.name === newItem.name);
            currentItemIndex !== -1 ? currentOrderList[currentItemIndex].quantity = parseInt(currentOrderList[currentItemIndex].quantity) + parseInt(newItem.quantity) : currentOrderList.push(newItem);
        });
        this.setState({
          [currentOrderList]: currentOrderList,
          [this.state.tables[activeTable].pendingOrder]: []
        });

        API.placeOrder([this.state.tables[activeTable].bill]);
  }

  render() {
    let activeContent = null;
    
    switch (this.state.activePage) {
      case ("Tables"): 
        activeContent = (
          <div> 
            <h1> Tables </h1> 
          </div>
        )
        break;
      case ("Orders"):
        activeContent = (
          <Order menu={this.state.menu} activeTable={this.state.activeTable} table={this.state.tables[this.state.activeTable]} orderSubmit={this.savePendingOrder} />
        )
        break;
      default:
        activeContent = null  
      }

    return (

      <Grid fluid>
        <Navbar activePage={this.state.activePage} handleSelect={this.activePageHandler} activeTable={this.state.activeTable} />
        <Row>
          {activeContent}
        </Row>
      </Grid>
    );
  }
}

export default App;
