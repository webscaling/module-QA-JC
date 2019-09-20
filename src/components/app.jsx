import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './presentational/Input.jsx';
import QA from './presentational/qa.jsx';
import QavCont from './container/qa-vote-cont.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 66,
      qaSearchBar: '',
      qArr: [
        {'question': 'Does they feel comfy?', 'answer': 'Yessum', 'votes': 4, 'author': 'Jim', 'date': 'October 5, 2016' },
        {'question': 'Does they feel just right?', 'answer': 'Yarp', 'votes': 5, 'author': 'Darnell', 'date': 'October 8, 2016' },
        {'question': 'Does they taste like real eggs?', 'answer': 'Yes, they most certainly do!', 'votes': 6, 'author': 'Bob', 'date': 'October 23, 2016' },
        {'question': 'Does they feel just right?', 'answer': 'Yarp', 'votes': 5, 'author': 'Darnell', 'date': 'October 8, 2016' }
      ],
      cappedQArr: [
        {'question': 'Does they feel comfy?', 'answer': 'Yessum', 'votes': 4, 'author': 'Jim', 'date': 'October 5, 2016' },
        {'question': 'Does they feel just right?', 'answer': 'Yarp', 'votes': 5, 'author': 'Darnell', 'date': 'October 8, 2016' },
        {'question': 'Does they taste like real eggs?', 'answer': 'Yes, they most certainly do!', 'votes': 6, 'author': 'Bob', 'date': 'October 23, 2016' },
        {'question': 'Does they feel just right?', 'answer': 'Yarp', 'votes': 5, 'author': 'Darnell', 'date': 'October 8, 2016' }
      ],
      dns: 'http://localhost:3000'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getItem(id) {
    axios.get(`${this.state.dns}/item?productid=${id}`)
      .then(({ data }) => {
        // console.log('successful axios GET req getItem' + data);
        this.setState({
          qArr: data,
          cappedQArr: data.slice(0, 4)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getItem(this.state.id);
    window.addEventListener('clickedProduct', event => {
      const product = event.detail;
      console.log(event.detail)
      if (product) {
        this.setState({id: product}, () => {
          this.getItem(this.state.id);
        });
      }
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // moreQs(cappedArr, arr) {
  //   this.setState({
  //     cappedQArr: this.state.qArr.slice()
  //     remQ:
  //   });
  // }

  render() {
    return (
      <div id="QA-comp-cont" className="cont">
        <h2 id="qa-title" className="a-color-base">Customer questions & answers</h2>
        <Input
          text=""
          label="qa_search"
          type="text"
          id="qaSearchBar"
          value=""
          handleChange={this.handleChange}
        />
        {/* <Votes /> */}
        <div className="cont" id="qa-vote-table">
          {
            this.state.cappedQArr.map(qa => (
              <QavCont
                qaItem={qa}
                pID={this.state.id}
              />
            ))
          }
        </div>
      </div>
    );
  }


}


{/* <div className="qa-a-section">
          <span className="qa-a-button">
            <span onClick={() => this.moreQs(this.state.cappedQArr, this.state.qArr)} className="qa-a-button-text">
              See more answered questions {this.state.remQ}
            </span>
          </span>
        </div>
      </div> */}