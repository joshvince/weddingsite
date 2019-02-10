import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Placeholder from "./Placeholder";
import Nav from "./Nav";
import Home from "../Home/Home";
import RSVPContainer from "../RSVP/RSVPContainer";
import CodeSelector from "../RSVP/CodeSelector/CodeSelector";

class App extends Component {
  render() {
    return (
      <div className="font-sans bg-grey-lighter text-blue-darkest w-screen min-h-screen">
        <Router>
          <div>
            <Route path="/" exact component={Placeholder} />
            <Route path="/test" component={Nav} />
            <Route path="/test" exact component={Home} />
            <Route path="/rsvp" exact component={CodeSelector} />
            <Route path="/rsvp/:code" component={RSVPContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;