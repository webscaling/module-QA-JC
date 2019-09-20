import React from 'react';
import QA from '../presentational/qa.jsx';
import Vote from '../presentational/votes.jsx';
import App from '../app.jsx';

const QavCont = (props) => {
  return (
    <div className="cont qa-vote-cont">
      <Vote votes={props.qaItem.votes} key={props.pID}/>
      <QA
        q={props.qaItem.question}
        a={props.qaItem.answer}
        auth={props.qaItem.author}
        date={props.qaItem.date}
      />
    </div>
  );
};

export default QavCont;