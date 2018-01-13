import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap'
import API from './utils/API'
import Order from './components/Order'
import Navbar from './components/Nav/Navbar'
import Table from './components/Table/Table';
import Servers from './components/Servers/Servers'
import Modal from './components/Modals/Modal'

class App extends Component {

  state = {
    tables: [
      {
        name: "table1" ,
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table2",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
        {
        name: "table3",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
          }
        },
        {
        name: "table4",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table5",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table6",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table7",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table8",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table9",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table10",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table11",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      },
      {
        name: "table12",
        isOccupied: false,
        guestNumber: null,
        pendingOrder: [],
        bill: {
          id: null,
          items: [],
          total: null
        }
      }
    ],
    servers: [],
    menu: {},
    activePage: "Tables",
    activeTable: null,
    activeTableIndex: null,
    modalActive: false
  }

  componentDidMount() {
  //  console.log("mounted")
    this.populateData();
  }
  populateData = () => {
   // console.log("populate start")
    this.getMenu();
    this.getServers();
    //this.getTables();
   // console.log("populated")
  }
  activePageHandler = (event) => {
    //This is for the navbar to find the active page
    //alert(`selected ${event}`);
    this.setState({ activePage: event }, function () {
      console.log(this.state.activePage)
    }
    )
  }

  getMenu = () => {
    API.getMenu().then(results => {
      let newMenu = results.data
      this.setState({ menu: newMenu }, () => {
        //console.log(this.state.menu)
      })
    }).catch(error => {
      if (error) console.log(error)
    })
  }

  getServers = () => {
    API.getServers().then(results => {
      let newServers = results.data
      this.setState({ servers: newServers }, () => {
        //console.log(this.state.servers)
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

  handleTableClick = (item) => {
    console.log("Table CLicked!!")
    console.log("item", item);
    console.log("item index", this.state.tables.indexOf(item))
    // let newItemIndex = (item)=>{
    //   return this.state.tables.indexOf(item); 
    // }
    this.setState({ activeTable: item  }, function () {
      console.log("state changed:", this.state.activeTable)
      //this.modalOpen();
    })
  }
  updatePendingOrder = pendingOrder => {
      this.setState({
        [this.state.tables[0][this.state.activeTable].pendingOrder]: pendingOrder
      });
    }

  savePendingOrder = newOrderList => {
    const activeTable = this.state.activeTable;
    const pendingOrders = this.state.tables[activeTable].pendingOrder;

    let currentOrderList = this.state.tables[activeTable].bill.items
    let currentItemIndex;

    pendingOrders.map((newItem) => {
      currentItemIndex = currentOrderList.findIndex(index => index.name === newItem.name);
      currentItemIndex !== -1 ? currentOrderList[currentItemIndex].quantity = parseInt(currentOrderList[currentItemIndex].quantity) + parseInt(newItem.quantity) : currentOrderList.push(newItem);
    });
    this.setState({
      [currentOrderList]: currentOrderList,
      [this.state.tables[activeTable].pendingOrder]: []
    });

   // API.placeOrder([this.state.tables[activeTable].bill]);
  }
  modalOpen = () => {
    this.setState({modalActive: true},function(){
      console.log(`modalActive: ${this.state.modalActive}`);
    })
  }
  modalClose = () => {
    this.setState({ modalActive: false }, function () {
      console.log(`modalActive: ${this.state.modalActive}`);
    })
  }
  modalOrder = () =>{
    console.log("modalOrder")
  }
  printReceipt = () =>{
    console.log("print receipt")

  }
  checkOut = () => {
    console.log("check out")
  }

    render() {
      let activeContent = null;

      switch (this.state.activePage) {
        case ("Tables"):
          activeContent = (
            <Table tables={this.state.tables} clicked={this.handleTableClick} />
          )
          break;
        case ("Orders"):
          activeContent = (
            <Order menu={this.state.menu} activeTable={this.state.activeTable} table={this.state.tables[0][this.state.activeTable]} orderSubmit={this.savePendingOrder} updatePendingOrder={this.updatePendingOrder} />
          )
          break;
        case ("Servers"):
          activeContent = (
            <Servers servers={this.state.servers} />
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
          {this.state.modalActive ? (<Modal tables={this.state.tables} activeTable={this.state.activeTable} close={this.modalClose} order={this.modalOrder} receipt={this.printReceipt} checkout={this.checkOut} /> ) : (null)}
        </Grid>
        
      );
    }
  }

  export default App;