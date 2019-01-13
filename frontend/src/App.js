import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import RSVPContainer from "./RSVP/RSVPContainer";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/rsvp/:code" component={RSVPContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
