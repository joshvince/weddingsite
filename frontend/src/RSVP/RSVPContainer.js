import React, { Component } from "react";
import RSVP from "./RSVP";
import Success from "./OnSubmit/Success";

class RSVPContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invite: null,
      loading: true,
      rsvps: [],
      everybodyRSVP: false,
      anyoneComing: false,
      formSubmitted: false
    };

    this.handleOneRSVP = this.handleOneRSVP.bind(this);
    this.submitRSVP = this.submitRSVP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    let inviteCode = this.props.match.params.code;
    fetch(`/api/rsvp/${inviteCode}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          invite: data,
          loading: false,
          rsvps: data.guests.sort((a, b) => a.id - b.id),
          everybodyRSVP: this.checkRSVP(data.guests)
        });
      });
  };

  checkRSVP = guests => guests.every(x => x.rsvp_at != null);

  checkAnyoneComing = guests => guests.some(x => x.attending === true);

  handleOneRSVP = (guestData, reply) => {
    let newState = this.state.rsvps.filter(g => g.id !== guestData.id);
    let rsvpAt = { rsvp_at: new Date() };
    guestData = { ...guestData, ...reply, ...rsvpAt };
    newState.unshift(guestData);
    newState.sort((a, b) => a.id - b.id);
    this.setState({
      rsvps: newState,
      everybodyRSVP: this.checkRSVP(newState),
      anyoneComing: this.checkAnyoneComing(newState)
    });
  };

  submitRSVP = e => {
    e.preventDefault();
    let inviteCode = this.props.match.params.code;
    let data = {
      code: inviteCode,
      rsvps: this.state.rsvps
    };

    fetch(`/api/rsvp/${inviteCode}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => this.handleSubmit(res))
      .catch(error => console.error("Error:", error));
  };

  handleSubmit = (resp) => {
    if (resp.status === 200) {
      this.setState({
        formSubmitted: true
      })
    }
    else {
      console.log("Something went wrong")
    }
  }

  render() {
    let { invite, rsvps, everybodyRSVP, formSubmitted, anyoneComing } = this.state;

    if (formSubmitted) return <Success anyoneComing={anyoneComing} />

    let content = this.state.loading ? (
      <div className="w-screen h-screen text-center py-32">
        <h1 className="font-extrabold text-grey-dark">Loading...</h1>
      </div>
    ) : (
      <RSVP
        invite={invite}
        rsvps={rsvps}
        rsvpAction={this.handleOneRSVP}
        submitAction={this.submitRSVP}
        everybodyRSVP={everybodyRSVP}
      />
    );
    return <div>{content}</div>;
  }
}

export default RSVPContainer;
