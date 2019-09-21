import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';

const word = ["Good", "Morning", "Teacher", "Goodbye", "See", "You", "Tomorrow"];
const word_rand = word[Math.floor(Math.random()*word.length)];
class App extends Component {
  render() {
    return (
    <div className="App">
      <WordCard value= {word_rand} />
    </div>
    );
  }  
}
export default App;