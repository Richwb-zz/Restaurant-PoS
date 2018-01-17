import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import API from './utils/API';
import Order from './components/Order';
import Navbar from './components/Nav/Navbar';
import Table from './components/Table/Table';
import Admin from './components/Admin/Admin';
import Modal from './components/Modals/Modal';
import Hoc from './components/Hoc/Hoc';
import OrderModal from './components/Modals/Order';
import Login from './components/Login/Login';

class App extends Component {

  state = {
    tables: [
      {
        name: "Table 1",
        isOccupied: false,
        guestNumber: null,
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
        server: null,
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
    user: null,
    activePage: "Tables",
    activeTable: null,
    activeTableIndex: null,
    modalActive: false,
    orderModal: false,
    orderResponse: null,
    messageModalActive: false,
    messageModal: ""
  }

  componentDidMount() {
    //  console.log("mounted")
    this.populateData();
  }
  populateData = () => {
    // console.log("populate start")
    this.getMenu();
    this.getServers();
    this.getUnpaidChecks();
    // console.log("populated")
  }
  activePageHandler = (event) => {
    //This is for the navbar to find the active page
    this.setState({ activePage: event })
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
  getUnpaidChecks = () => {
    //this checks the database on load to see if there are unpaid checks
    API.getTables().then(results => {
      console.log("getUnpaidChecks Fired")
      let newTablesData = results.data
      // if the result has data, there are unpaid checks
      if (newTablesData) {
        console.log("There are unpaid checks")
        // get the tables from state in a stretch
        let updateChecks = [...this.state.tables]
        //map through the data from the d/b
        newTablesData.map(item => {
          // match them against the tables in state
          updateChecks.map((table, index) => {
            if (table.name === item.table) {
              let updateChecksIndex = null;
              console.log(`Found a match, ${item.table} and ${table.name} index ${index}`);
              //update the table's object
              updateChecksIndex = index;
              updateChecks[updateChecksIndex].bill.id = item._id;
              updateChecks[updateChecksIndex].isOccupied = true;
              updateChecks[updateChecksIndex].server = item.server
              updateChecks[updateChecksIndex].guestNumber = item.guests
              updateChecks[updateChecksIndex].bill.items = item.items
              updateChecks[updateChecksIndex].bill.total = item.total
            }
          })
        })
        //push the changed tables back to state
        console.log("updateChecks", updateChecks)
        this.setState({
          tables: updateChecks
        }, function () {
          console.log(`state updated tables`)
        })
      }
    })
  }
  //clears the active table;
  cleanTable = () => {
    let misterClean = [...this.state.tables];
      misterClean[this.state.activeTableIndex].isOccupied= false;
      misterClean[this.state.activeTableIndex].guestNumber= null;
      misterClean[this.state.activeTableIndex].server= null;
      misterClean[this.state.activeTableIndex].pendingOrder= [];
      misterClean[this.state.activeTableIndex].bill.id= null;
      misterClean[this.state.activeTableIndex].bill.items= [];
      misterClean[this.state.activeTableIndex].total= null;

      this.setState({
        tables: misterClean,
        activeTable: null,
        activeTableIndex: null,
        modalActive: false
      }, function(){
        console.log('Mister Clean Finished');
      })
    }

    // handles what happens when a table is clicked (sets an active table, active index, and opens the modal
  handleTableClick = (item) => {
    console.log("Table CLicked!!")
    let newTableIndex = null;
    this.state.tables.map((table, index) => {
      if (table.name === item) {
        console.log(`${table.name} found at ${index}`)
        newTableIndex = index;
        this.setState({ activeTable: item, activeTableIndex: newTableIndex }, function () {
          console.log("state changed  Table:", this.state.activeTable, "Index:", this.state.activeTableIndex)
          this.modalOpen();
        })
      }
    })
  }

  setUser = (name) => {
    console.log(this.state.menu);
    if(typeof name === "string"){
        this.setState({
        user: name
      })
    }
  }

  unsetUser = () => {
    this.setState({
      user: null
    })
  }

  updatePendingOrder = pendingOrder => {
    this.setState({
      [this.state.tables[this.state.activeTableIndex].pendingOrder]: pendingOrder
    });
  }

  savePendingOrder = newOrderList => {
    const activeTable = this.state.activeTableIndex;
    const pendingOrders = this.state.tables[activeTable].pendingOrder;
    let currentOrderList = this.state.tables[activeTable].bill.items;
    let table = this.state.tables[activeTable];
    let currentItemIndex;
    var newBillTotal = this.state.tables[activeTable].bill.total

    pendingOrders.map(newItem => {
      currentItemIndex = currentOrderList.findIndex(index => index.name === newItem.name);
      currentItemIndex !== -1 ? currentOrderList[currentItemIndex].quantity = parseInt(currentOrderList[currentItemIndex].quantity) + parseInt(newItem.quantity) : currentOrderList.push(newItem);
      
     this.state.menu.map((menuItem) => {
        menuItem.name === newItem.name ? newBillTotal += parseInt(newItem.quantity) * menuItem.price : "";
      });
    });
    
    table.bill.items = currentOrderList;
    table.pendingOrder = [];
    table.bill.total = newBillTotal;

    this.setState({
      [this.state.tables[activeTable]]: table,
    },
      this.orderToDb
    );
  }

  orderToDb = () => {
    API.placeOrder(this.state.tables[this.state.activeTableIndex], this.dbresponse);
  }

  dbresponse = (response)=> {
    let orderMessage;
    
    response.status === 200 ? orderMessage = "Order Submitted" : orderMessage = "Any error occured, order was saved and will be saved on next transaction";

    this.setState({
      orderResponse: orderMessage,
      orderModal: true
    });
  }

  orderClose = () => {
    this.setState({
      orderModal: false
    })
  }

  setServer = (server) => {
    this.setState({ [this.state.tables[this.state.activeTableIndex].server]: server });
  }

  addServer = (server) => {
    console.log("addServer in app.js",server)
    API.addServer(server)
    .then(results => {
      console.log(results)
      if (results.status === 200) {
        console.log("good return")
        this.getServers();
      }
    }
    ).catch(error => console.log(error))
  }
  addMenu = (menu) => {
    console.log("addMenu in app.js", menu)
    API.addMenu(menu)
      .then(results => {
        console.log(results)
        if (results.status === 200) {
          console.log("good return")
          this.getMenu();
        }
      }
      ).catch(error => console.log(error))
  }
  seatGuestsFromModalHandler = (server, guests) => {
    //click handler from the modal, seats new guests, updates state, creates a new receipt and then updates state with the new receipt
    console.log(`seatGuests called, ${server} with ${guests}`)
    console.log(`Table: ${this.state.activeTable} Index: ${this.state.activeTableIndex}`)
    // Push to the DB
    const seating = {};
    seating.server = server;
    seating.guests = guests;
    seating.table = this.state.activeTable

    console.log("seating from app ", seating)
    API.seatGuests(seating).then(results => {
      console.log("results:", results);
      if (results.status === 200) {
        console.log(`Results: ${results.status} is ok`)
        console.log(`ID is: ${results.data._id}`)
        let updateTables = [...this.state.tables]
        updateTables[this.state.activeTableIndex].guestNumber = guests;
        updateTables[this.state.activeTableIndex].server = server;
        updateTables[this.state.activeTableIndex].isOccupied = true;
        updateTables[this.state.activeTableIndex].bill.id = results.data._id;
        console.log("updateTables", updateTables)
        this.setState({
          modalActive: false,
          tables: updateTables
        }, function () {
          console.log(`state updated modalActive: ${this.state.modalActive}`)
        });
      }
    });
  }

  modalOpen = () => {
    this.setState({ modalActive: true }, function () {
      console.log(`modalActive: ${this.state.modalActive}`);
    })
  }
  modalClose = () => {
    this.setState({ modalActive: false }, function () {
      console.log(`modalActive: ${this.state.modalActive}`);
    })
  }
  modalOrder = () => {
    // from inside the modal, this function lets the modal open an order page, it closes the modal too
    console.log("modalOrder")
    this.setState({ activePage: "Orders", modalActive: false }, function () {
      console.log(`state updated ${this.state.activePage} and ${this.state.modalActive}`)
    })
  }

  printReceipt = () => {
    console.log("print receipt")

  }

  submitPayment = (payment) => {
    console.log("check out")
    console.log("payment",payment);
    API.submitPayment(payment)
      .then(results => {
        console.log(results)
        if (results.status === 200) {
          console.log("submitpayment success")
          this.cleanTable();  
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    let activeContent = null;
    if(this.state.user === null){
      activeContent = (<Login setUser={this.setUser} />)
    }else{

      switch (this.state.activePage) {
        case ("Tables"):
          activeContent = (
            <Table tables={this.state.tables} clicked={this.handleTableClick} />
            
          )
          break;
        case ("Orders"):
          activeContent = (
            <Order menu={this.state.menu} activeTable={this.state.activeTable} table={this.state.tables[this.state.activeTableIndex]} orderSubmit={this.savePendingOrder} updatePendingOrder={this.updatePendingOrder} orderModal={this.state.orderModal}/>
          )
          break;
        case ("Admin"):
          activeContent = (
            <Admin servers={this.state.servers} addServer={this.addServer} menu={this.state.menu} addMenu={this.addMenu}/>
          )
          break;
        default:
          activeContent = null
      }
    }

    return (
      <Hoc>
        <Grid fluid>
          <Navbar activePage={this.state.activePage} handleSelect={this.activePageHandler} activeTable={this.state.activeTable} loggedInUser={this.state.user} logOut={this.unsetUser}/>
        </Grid>
        <Grid>
          <Row>
            {/* active content (conditional page render) */}
            {activeContent}
          </Row>
          {/* modal conditional rendering is below */}

          {this.state.orderModal ? <OrderModal orderMessage={this.state.orderResponse} orderClose={this.orderClose} />: (null)}
          {this.state.modalActive ? (<Modal tables={this.state.tables} activeTable={this.state.activeTable} activeTableIndex={this.state.activeTableIndex} servers={this.state.servers} close={this.modalClose} order={this.modalOrder} receipt={this.printReceipt} submitPayment={this.submitPayment} setServer={this.setServer} seatGuests={this.seatGuestsFromModalHandler} />) : (null)}
        </Grid>
      </Hoc>
    );
  }
}

export default App;