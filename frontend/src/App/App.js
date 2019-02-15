import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "../Home/Home";
import Info from "../Info/Info";
import RSVPContainer from "../RSVP/RSVPContainer";
import CodeSelector from "../RSVP/CodeSelector/CodeSelector";

class App extends Component {
  render() {
    return (
      <div className="font-sans bg-grey-lighter text-blue-darker w-screen min-h-screen">
        <Router>
          <div>
            <Route path="/" component={Nav} />
            <Route path="/" exact component={Home} />
            <Route path="/info" exact component={Info} />
            <Route path="/rsvp" exact component={CodeSelector} />
            <Route path="/rsvp/:code" component={RSVPContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;