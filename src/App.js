import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
import './w3.css'

const word = ["Good", "Morning", "Teacher", "Goodbye", "See", "You", "Tomorrow"];
const word_rand = word[Math.floor(Math.random()*word.length)];

class App extends Component {
  reload(){
    window.location.reload(true)
  }

  render() {
    return (
    <div className="App">
      <p id="Title">Test Your Luck</p>
      <WordCard value= {word_rand} />
      <br></br><br></br>
      <p id="Round">Round 1 </p>
      <p id="status"></p>
      <p id="Try">Good Luck!</p><button id="new" onClick= {this.reload}>New Game?</button>
    </div>
    );
  }  
}
export default App;