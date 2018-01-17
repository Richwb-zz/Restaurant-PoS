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
import { withAlert } from 'react-alert';

class App extends Component {
  state = {
    // Holds all information regarding the tables. 
    // Pending Order contains name and quantity
    // Items contains name, quantity, and cost
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
    // List of servers
    servers: [],
    // Holds all menu information found in DB: id, name, description, cost
    menu: {},
    // Currently logged in User
    user: null,
    // the page that is currently active
    activePage: "Tables",
    // Table that has been selected
    activeTable: null,
    // Index position of table that has been selected
    activeTableIndex: null,
    // Is modal active
    modalActive: false,
    // is orderodal active
    orderModal: false,
    // Response from DB upon submitted the order from order component
    orderResponse: null,
    // Is message modal active
    messageModalActive: false,
    // Content of message modal
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

  getServers = (callback) => {
    API.getServers().then((results) => {
      let newServers = results.data
      this.setState({ servers: newServers })
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

  // Callback function for DB query to verify login code
  setUser = (name) => {
    console.log(this.state.menu);
    // Checks if return is a string or object
    if(typeof name === "string"){
      //Sets the user name that does callback to display login 
      this.setState({
        user: name
      },function() {this.props.alert.show('Successfully Logged In!',{ type: "success" })})
    }
  }
  // When user clicks logout button set user to null
  unsetUser = () => {
    this.setState({
      user: null
    }, function () { this.props.alert.show('Successfully Logged Out!')})
  }

  // Called from Order.js component, updates pending order list for active table
  updatePendingOrder = pendingOrder => {
    this.setState({
      [this.state.tables[this.state.activeTableIndex].pendingOrder]: pendingOrder
    });
  }

  // Saves pendering orders into ordered list
  savePendingOrder = newOrderList => {
    // variables for asthetic purposes, shorten code length
    const activeTable = this.state.activeTableIndex;
    const pendingOrders = this.state.tables[activeTable].pendingOrder;
    var currentOrderList = this.state.tables[activeTable].bill.items;
    let table = this.state.tables[activeTable];
    let newBillTotal = this.state.tables[activeTable].bill.total

    // Loop through list of pending orders
    pendingOrders.map(newItem => {
      // Gets index position of newItem from table
      const currentItemIndex = currentOrderList.findIndex(index => index.name === newItem.name);
      console.log("cc: " + currentItemIndex);
      // Gets index position of item from menu
      const menuItemIndex = this.state.menu.findIndex(index => index.name === newItem.name);
      // variables for asthetic purposes, shorten code length
      const menuItem = this.state.menu[menuItemIndex];
     
      //If item is found in the list add the ordered quantity to the pending quantity and calculate the new cost of the quantity
      // If not found calculate the total cost and push all items into the array
      if(currentItemIndex !== -1){ 
        currentOrderList[currentItemIndex].quantity = parseInt( currentOrderList[currentItemIndex].quantity) + parseInt(newItem.quantity); 
        currentOrderList[currentItemIndex].charge = parseInt(currentOrderList[currentItemIndex].quantity) * parseInt(menuItem.cost);
        newBillTotal = parseInt(newBillTotal) + parseInt(currentOrderList[currentItemIndex].charge);
      }else{
        newItem.charge = parseInt(newItem.quantity) * parseInt(menuItem.cost);
        currentOrderList.push(newItem);
        newBillTotal = parseInt(newBillTotal) + parseInt(newItem.charge);
       }
    });

    // Store updated info into table object
    table.bill.items = currentOrderList;
    table.bill.total = newBillTotal;
    table.pendingOrder = [];
    
    // Set State using table object and use callback once state is updated
    this.setState({
      [this.state.tables[activeTable]]: table,
    },
      this.orderToDb
    );
  }

  // Call placeOrder API route to update database and wait for response
  orderToDb = () => {
    API.placeOrder(this.state.tables[this.state.activeTableIndex], this.dbresponse);
  }

  // Process route response from updating order and set message to be forwarded to Order component
  dbresponse = (response)=> {
    let orderMessage;
    
    response.status === 200 ? orderMessage = "Order Submitted" : orderMessage = "An error occured, order was saved and will be saved on next transaction";

    this.setState({
      orderResponse: orderMessage,
      orderModal: true
    });
  }

  // Close Response modal
  orderClose = () => {
    this.setState({
      orderModal: false
    })
  }

  setServer = (server) => {
    this.setState({ [this.state.tables[this.state.activeTableIndex].server]: server });
  }

  addServer = (server,callback) => {
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
          // Sets Order Page as rendered page and passes props to Order Component
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
          {/* Displays Order modal if state is true */}
          {this.state.orderModal ? <OrderModal orderMessage={this.state.orderResponse} orderClose={this.orderClose} />: (null)}
          {this.state.modalActive ? (<Modal tables={this.state.tables} activeTable={this.state.activeTable} activeTableIndex={this.state.activeTableIndex} servers={this.state.servers} close={this.modalClose} order={this.modalOrder} receipt={this.printReceipt} submitPayment={this.submitPayment} setServer={this.setServer} seatGuests={this.seatGuestsFromModalHandler} />) : (null)}
        </Grid>
      </Hoc>
    );
  }
}

export default withAlert(App);