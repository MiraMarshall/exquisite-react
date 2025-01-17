import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

     this.state = {
      poem: [],
      showPoem: false,
     };
  }


  // Changes state and adds the new verse to the peom array.
  addSubmission = (verse) => {
    let newVerse = this.state.poem;

    newVerse.push(verse);
    this.setState({
      poem: newVerse, 
    });
  } 

  showFinalPoem = (event) => {
    event.preventDefault();
    this.setState({
      showPoem: true
    })
  }
  render() {

    const exampleFormat = SUBMISSIONS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission lastVerse={this.state.poem[this.state.poem.length - 1]} />

        <PlayerSubmissionForm 
        addSubmissionCallback={this.addSubmission}
        player={this.state.poem.length}/>

        <FinalPoem 
        showPoem={this.state.showPoem}
        poem={this.state.poem}
        showFinalPoem={this.state.showFinalPoem}
        />

      </div>
    );
  }
}

const SUBMISSIONS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
