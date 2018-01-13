import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap'
import API from './utils/API'
import Order from './components/Order'
import Navbar from './components/Nav/Navbar'
import Table from './components/Table/Table';
import Servers from './components/Servers/Servers'
import Modal from './components/Modals/Modal'
import Aux from './components/Hoc/Hoc'

class App extends Component {

  state = {
    tables: [
       {
        name: "Table 1" ,
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
        name: "Table 2",
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
        name: "Table 3",
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
        name: "Table 4",
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
        name: "Table 5",
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
        name: "Table 6",
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
        name: "Table 7",
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
        name: "Table 8",
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
        name: "Table 9",
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
        name: "Table 10",
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
        name: "Table 11",
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
        name: "Table 12",
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
    console.log("item index")
    let newTableIndex=null;
    this.state.tables.map((table,index)=>{
      if (table.name === item) {
        console.log(`${table.name} found at ${index}`)
        newTableIndex=index;
        this.setState({ activeTable: item, activeTableIndex: newTableIndex }, function () {
          console.log("state changed  Table:", this.state.activeTable, "Index:",this.state.activeTableIndex)
          this.modalOpen();
        })
      }
    })
  }
  updatePendingOrder = pendingOrder => {
      this.setState({
        [this.state.tables[this.state.activeTableIndex].pendingOrder]: pendingOrder
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
    // from inside the modal, this function lets the modal open an order page, it closes the modal too
    console.log("modalOrder")
    this.setState({activePage: "Orders", modalActive: false},function(){
      console.log(`state updated ${this.state.activePage} and ${this.state.modalActive}`)
    })
    
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
            <Order menu={this.state.menu} activeTable={this.state.activeTable} table={this.state.tables[this.state.activeTableIndex]} orderSubmit={this.savePendingOrder} updatePendingOrder={this.updatePendingOrder} />
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
      <Aux>
        <Grid fluid>
          <Navbar activePage={this.state.activePage} handleSelect={this.activePageHandler} activeTable={this.state.activeTable} />
        </Grid>
        <Grid>
          <Row>
            {/* active content (conditional page render) */}
            {activeContent}
          </Row>
          {/* modal conditional rendering is below */}
          {this.state.modalActive ? (<Modal tables={this.state.tables} activeTable={this.state.activeTable} activeTableIndex={this.state.activeTableIndex} servers={this.state.servers} close={this.modalClose} order={this.modalOrder} receipt={this.printReceipt} checkout={this.checkOut} /> ) : (null)}
        </Grid>
      </Aux>  
      );
    }
  }

  export default App;