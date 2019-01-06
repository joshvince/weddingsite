import React, { Component } from 'react';
import RSVP from "./RSVP";

class RSVPContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { invite: null, loading: true, rsvps: [] }
    this.rsvpForGuest = this.rsvpForGuest.bind(this);
  }

  componentDidMount = () => {
    let inviteCode = this.props.match.params.code;
    fetch(`/api/rsvp/${inviteCode}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        invite: data,
        loading: false,
        rsvps: data.guests.sort((a,b) => a.id - b.id)
      })
    })
  }

  rsvpForGuest = (guestData, reply) => {
    let newState = this.state.rsvps.filter(g => g.id !== guestData.id)
    guestData.attending = reply
    newState.unshift(guestData)
    newState.sort((a,b) => a.id - b.id)
    this.setState({rsvps: newState})
  }

  render() {
    let content = this.state.loading ?
      "Loading..."
      :
      <RSVP
        invite={this.state.invite}
        rsvps={this.state.rsvps}
        rsvpAction={this.rsvpForGuest}
      />
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default RSVPContainer;