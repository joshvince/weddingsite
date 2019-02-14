import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Selector from "./Selector.jsx";
import IncorrectCode from "./IncorrectCode.jsx";
import Help from "./Help";

import Storage from "./Storage";
import queryString from 'query-string';

class CodeSelector extends Component {
  constructor(props) {
    super(props);
    let defaultCode = this.setDefaultCode();
    this.state = {
      defaultCode: defaultCode,
      code: this.props.code || defaultCode,
      displayError: false,
      triggerRedirect: false
    };

    this.toggleError = this.toggleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setDefaultCode = () => {
    let defaultCode = Storage.get().code;
    let parsedQueryString = queryString.parse(this.props.location.search);
    if (parsedQueryString.code) {
      defaultCode = parsedQueryString.code;
    }
    return defaultCode;
  }

  toggleError = () => {
    let newState = !this.state.displayError;
    this.setState({
      displayError: newState
    });
  };

  handleSubmit = e => {
    const API_URL = 'https://protected-scrubland-86840.herokuapp.com'
    e.preventDefault();
    let inviteCode = this.state.code.toLowerCase();
    fetch(`${API_URL}/api/rsvp_check?code=${inviteCode}`).then(res => {
      if (res.status === 200) {
        Storage.set(inviteCode);
        this.setState({ triggerRedirect: true });
      } else {
        this.toggleError();
      }
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ code: e.target.value.toLowerCase() });
  };
  render() {
    let { code, triggerRedirect } = this.state;
    let content = this.state.displayError ? (
      <IncorrectCode toggleError={this.toggleError} />
    ) : (
      <Selector
        inputHandler={this.handleChange}
        submitHandler={this.handleSubmit}
        defaultCode={this.state.defaultCode}
      />
    );

    if (triggerRedirect) return <Redirect to={{ pathname: `/rsvp/${code}` }} />;

    return (
      <div className="h-screen flex flex-col justify-center items-center pt-16">
        <div className="bg-white max-w-md md:w-128 flex flex-col rounded shadow-lg m-4 p-10 text-center">
          {content}
          <Help/>
        </div>
      </div>
    );
  }
}

export default CodeSelector;
