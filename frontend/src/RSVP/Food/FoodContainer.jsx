import React, { Component } from 'react';
import Empty from "./Empty.jsx";
import DietaryRequirements from "./DietaryRequirements.jsx";
import SorryMessage from "./SorryMessage.jsx";

class FoodContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    let isAttending = this.props.guestData.attending;

    return (
      <div className="flex flex-col h-full">
        {!this.props.hasRSVP && <Empty />}
        {this.props.hasRSVP && !isAttending && <SorryMessage />}
        {this.props.hasRSVP && isAttending &&
          <div>you are attending</div>
        }
      </div>
    );
  }
}

export default FoodContainer;