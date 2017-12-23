import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  servers: {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
