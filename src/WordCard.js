import React, { Component } from 'react';
import CharacterCard from './CharacterCard';    
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends
Component {
    constructor(props){
        super(props)
        this.state= prepareStateFromWord(this.props.value)
    }

    activationHandler = c => { 
        console.log(`${c} has been activated. ${this.state.chars}`) 
        let guess = [...this.state.guess, c.toUpperCase()]
        
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                 this.setState({guess: [], completed: true})
                 document.getElementById('status').innerHTML = `Win!!`
                if(this.state.attempt == 1){
                    document.getElementById('Try').innerHTML = `VERY LUCKY!!`
                }
                if(this.state.attempt == 2){
                    document.getElementById('Try').innerHTML = `Lucky!!`
                }
                if(this.state.attempt == 3){
                    document.getElementById('Try').innerHTML = `Good work!!`
                }
                if(this.state.attempt == 4){
                    document.getElementById('Try').innerHTML = `You do it!!`
                }
                if(this.state.attempt == 5){
                    document.getElementById('Try').innerHTML = `So close!!`
                }
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }   
        } 
    }

    render() {
        return (
            <div>
                { Array.from(this.state.chars.join('').toString()).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>)}
            </div>
        );
    }
}