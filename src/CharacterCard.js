import React, { Component } from 'react';
export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
        }
    }        
    
    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt && this.props.attempt < 6){
            document.getElementById('Round').innerHTML = `Round ${this.props.attempt}`
            this.setState({active: false})
        }
        if(this.props.attempt == 1 && this.props.completed){
            document.getElementById('Try').innerHTML = `Wonderful!! `
        }
        if(this.props.attempt == 2 && !this.props.completed){
            document.getElementById('Try').innerHTML = `Try again`
        }
        else if(this.props.attempt == 2 && this.props.completed){
            document.getElementById('Try').innerHTML = `Amazing!!`
        }
        if(this.props.attempt == 3 && !this.props.completed){
            document.getElementById('Try').innerHTML = `Work hard`
        }
        else if(this.props.attempt == 3 && this.props.completed){
            document.getElementById('Try').innerHTML = `Genius!!`
        }
        if(this.props.attempt == 4 && !this.props.completed){
            document.getElementById('Try').innerHTML = `You can do it`
        }
        else if(this.props.attempt == 4 && this.props.completed){
            document.getElementById('Try').innerHTML = `Great!!`
        }
        if(this.props.attempt == 5 && !this.props.completed){
            document.getElementById('Try').innerHTML = `Your last change`
        }
        else if(this.props.attempt == 5 && this.props.completed){
            document.getElementById('Try').innerHTML = `So close!!`
        }
        if(this.props.attempt == 6){
            document.getElementById('status').innerHTML = `Lose!!`
            document.getElementById('Try').innerHTML = `Unlucky`
        }
    }

    render(){
        let className = `card ${this.state.active ? 'activeCard': ''}`
        return (
            <div className={className} onClick={this.activate}>
                    {this.props.value}
                </div>
        )
    }
}