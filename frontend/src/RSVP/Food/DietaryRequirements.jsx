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
      <div className="mt-4">
        <p className="text-grey">Any dietary requirements?</p>
          <input
            className="shadow rounded border w-full focus:outline-none
                        focus:shadow-outline py-2 px-3 mt-2 text-grey-darker leading-tight"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
      </div>
    );
  }
}

export default DietaryRequirements;
