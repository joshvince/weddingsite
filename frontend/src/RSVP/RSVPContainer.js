import React, { Component } from 'react';
import RSVP from "./RSVP";

class RSVPContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { invite: null, loading: true, rsvps: [], everybodyComing: false, everybodyRSVP: false }

    this.handleOneRSVP = this.handleOneRSVP.bind(this);
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
        rsvps: data.guests.sort((a,b) => a.id - b.id),
        everybodyRSVP: this.checkRSVP(data.guests)
      })
    })
  }

  checkRSVP = (guests) => guests.every(x => x.rsvp_at != null)

  handleOneRSVP = (guestData, reply) => {
    let newState = this.state.rsvps.filter(g => g.id !== guestData.id)
    let rsvpAt = {rsvp_at: new Date()}
    guestData = {...guestData, ...reply, ...rsvpAt}
    newState.unshift(guestData)
    newState.sort((a,b) => a.id - b.id)
    this.setState({
      rsvps: newState,
      everybodyRSVP: this.checkRSVP(newState)
    })
  }

  submitRSVP = (e) => {
    e.preventDefault();
    this.postRSVP()
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

  render() {
    let {invite, rsvps, everybodyRSVP} = this.state;
    let content = this.state.loading ?
      "Loading..."
      :
      <RSVP
        invite={invite}
        rsvps={rsvps}
        rsvpAction={this.handleOneRSVP}
        submitAction={this.submitRSVP}
        everybodyRSVP={everybodyRSVP}
      />
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default RSVPContainer;