import React, { Component } from "react";
import Empty from "./Empty.jsx";
import DietaryRequirements from "./DietaryRequirements.jsx";
import SorryMessage from "./SorryMessage.jsx";
import DessertChoice from "./DessertChoice.jsx";

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let isAttending = this.props.guestData.attending;

    return (
      <div className="flex flex-col h-full md:ml-6">
        {!this.props.hasRSVP && <Empty />}
        {this.props.hasRSVP && !isAttending && <SorryMessage />}
        {this.props.hasRSVP && isAttending && (
          <div>
            <div className="flex-col">
              <p className="mb-2 text-grey">Choose a dessert</p>
              <div className="flex justify-around md:justify-start">
                <DessertChoice
                  guestData={this.props.guestData}
                  rsvpAction={this.props.rsvpAction}
                  dessertOption="raspberry_cheesecake"
                />
                <DessertChoice
                  guestData={this.props.guestData}
                  rsvpAction={this.props.rsvpAction}
                  dessertOption="chocolate_tart"
                />
              </div>
            </div>
            <DietaryRequirements
              guestData={this.props.guestData}
              rsvpAction={this.props.rsvpAction}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FoodContainer;
