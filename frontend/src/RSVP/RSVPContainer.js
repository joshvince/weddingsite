import React, { Component } from 'react';
import RSVP from "./RSVP";

class RSVPContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { invite: null, loading: true, rsvps: [] }

    this.rsvpForGuest = this.rsvpForGuest.bind(this);
    this.submitRSVP = this.submitRSVP.bind(this);
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
    let rsvpAt = {rsvp_at: new Date()}
    guestData = {...guestData, ...reply, ...rsvpAt}
    newState.unshift(guestData)
    newState.sort((a,b) => a.id - b.id)
    this.setState({rsvps: newState})
  }

  postRSVP = () => {
    let inviteCode = this.props.match.params.code;
    let data = {
      code: inviteCode,
      rsvps: this.state.rsvps
    };

    fetch(`/api/rsvp/${inviteCode}`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  submitRSVP = (e) => {
    e.preventDefault();
    this.postRSVP()
  }

  render() {
    let content = this.state.loading ?
      "Loading..."
      :
      <RSVP
        invite={this.state.invite}
        rsvps={this.state.rsvps}
        rsvpAction={this.rsvpForGuest}
        submitAction={this.submitRSVP}
      />
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default RSVPContainer;