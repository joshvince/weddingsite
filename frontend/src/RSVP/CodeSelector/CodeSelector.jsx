import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Selector from "./Selector.jsx";
import IncorrectCode from "./IncorrectCode.jsx";

class CodeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code || "",
      displayError: false,
      triggerRedirect: false
    };

    this.toggleError = this.toggleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleError = () => {
    let newState = !this.state.displayError;
    this.setState({
      displayError: newState
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let inviteCode = this.state.code.toLowerCase();
    fetch(`/api/rsvp_check?code=${inviteCode}`).then(res => {
      if (res.status === 200) {
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
      />
    );

    if (triggerRedirect) return <Redirect to={{ pathname: `/rsvp/${code}` }} />;

    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="bg-white max-w-md md:w-128 flex flex-col rounded shadow-lg m-4 p-10 text-center">
          {content}
        </div>
      </div>
    );
  }
}

export default CodeSelector;
