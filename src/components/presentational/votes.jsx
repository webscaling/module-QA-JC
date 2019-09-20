import React, { Component } from 'react';
import axios from 'axios';
import QavCont from '../container/qa-vote-cont.jsx';

export default class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voteCount: this.props.votes,
      voted: false,
      upVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote.jpg',
      downVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote-down.jpg'
    };
  }

  // toggleHover() {
  //   this.setState({hover: !this.state.hover});
  // }
  // postGroups() {
  //   axios.post()
  // }

  upCount(count) {
    this.setState({
      voteCount: count + 1
    });
  }

  downCount (count) {
    this.setState({
      voteCount: count - 1
    });
  }

  upVoteSubmitHandler(count) {
    if (this.state.voted) { return; }
    this.upCount(count);
    this.setState({voted: true});
    // axios.put('ec2-18-223-28-104.us-east-2.compute.amazonaws.com/updateVote', {
    //   votes: this.state.voteCount,
    //   pID: this.props.pID,
    //   qID: this.props.qID
    // })
    //   .then(() => this.state.voted = true)
    //   .catch();
  }

  downVoteSubmitHandler(count) {
    if (this.state.voted) { return; }
    this.downCount(count);
    this.setState({voted: true});
    // axios.put('ec2-18-223-28-104.us-east-2.compute.amazonaws.com/updateVote', {
    //   votes: this.state.voteCount,
    //   pID: this.props.pID,
    //   qID: this.props.qID
    // })
    //   .then(() => this.state.voted = true)
    //   .catch();
  }

  render() {
    console.log(this.props.votes)
    return (
      <ul className="cont vote-cont">
        <li>
          <img
            onClick={() => this.upVoteSubmitHandler(this.state.voteCount)}
            className="vote-btn"
            onMouseEnter={() => this.setState({ upVoteSrc: 'https://hr43jbz.s3.us-east-2.amazonaws.com/triangle-vote-burnt.jpg' })}
            onMouseLeave={() => this.setState({ upVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote.jpg' })}
            src={this.state.upVoteSrc}
          ></img>
        </li>
        <li className="vote-label">
          <span className="vote-count-span">{this.state.voteCount}</span>
          <span><br/></span>
          <span className="vote-vote-span">{this.state.voteCount > 1 || this.state ? 'votes' : 'vote'}</span>
        </li>
        <li>
          <img
            onClick={() => this.downVoteSubmitHandler(this.state.voteCount)}
            className="vote-btn"
            onMouseEnter={() => this.setState({ downVoteSrc: 'https://hr43jbz.s3.us-east-2.amazonaws.com/triangle-vote-down-burnt.jpg' })}
            onMouseLeave={() => this.setState({ downVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote-down.jpg' })}
            src={this.state.downVoteSrc}
          ></img>
        </li>
      </ul>
    );
  }
}


