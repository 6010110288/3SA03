import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
class App extends Component {
  render() {
    return (
    <div className="App">
      <WordCard value="hello"/>
    </div>
    );
  }  
}
export default App;