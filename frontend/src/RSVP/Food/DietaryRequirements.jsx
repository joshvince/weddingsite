import React, { Component } from 'react';

class DietaryRequirements extends Component {
  constructor(props){
    super(props);
    this.state = {value: this.props.guestData.dietary_requirements || ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
    this.props.rsvpAction(this.props.guestData, {dietary_requirements: event.target.value})
  }

  render() {
    return (
      <div>
        <label>
          Dietary Requirements
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default DietaryRequirements;
