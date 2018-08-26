 import React, { Component } from 'react';
 import './flag-game.css'

 const utils = require('./utils');
const GameStatus = utils.GameStatus;



 class ControlBar extends Component {
 	constructor(props) {
    	super(props);
    	this.state = {
    		selectedCountryKey: ""
    	}
    }

    handleOptionChange(changeEvent){
    	console.log("option change to: "+ changeEvent.target.value)
    	this.setState({
    		selectedCountryKey: changeEvent.target.value
    	}, ()=>console.log("Selected Contry Key: "+ this.state.selectedCountryKey))

    }

 	handleGuess(event){
 		this.props.onGuess(this.state.selectedCountryKey); 
 		event.preventDefault();
 	}

 	handleNext(event) {
 		this.props.onNewGame();
 		event.preventDefault();
 	}

	playMode(Options){
		return( 
			<form onSubmit={this.handleGuess.bind(this)} className= "Control-Bar Container" >
				<ul className="Control-Bar__Countries">
					{
						Options.map((option, index)=> {
							console.log("option "+index+" key: "+option.key)
							var id = option.name.toLowerCase();
							return <li key={option.key} className="Control-Bar__Country">
										<input type="radio"  
											    value={option.key} 
												checked={this.state.selectedCountryKey === option.key}
												onChange={this.handleOptionChange.bind(this)}
										/>
										<label htmlFor={id}>{option.name}</label>
									</li>
						})
					}
				</ul>
				<button type="submit" className="Control-Bar__btn">
					GUESS
				</button>
			</form>
		)
	 }

	 wrongMode(option){ //Player provided wrong answer
	 	return(
	 	<form onSubmint={this.handleNext.bind(this)} className= "Control-Bar Container">
			<p>Incorrect! Correct Answer:{option.name}</p>
			<button type="submit" className="Control-Bar__btn">
				NEXT
			</button>
		</form>
		)
	 }

	 correctMode(option){ //Player provided wrong answer
	 	return(
	 	<form onSubmint={this.handleNext.bind(this)} className= "Control-Bar Container">
			<p>Correct!: {option.name}</p>
			<button type="submit" className="Control-Bar__btn">
				NEXT
			</button>
		</form>
		)
	 }


 	render() {
		var {Options,CorrectOption,Status} = this.props;
 		if(Status===GameStatus.WRONG){
 			return(
 				this.wrongMode(Options[CorrectOption])
 				);
 		}
 		 else if(Status===GameStatus.PLAY) {
 			return(
				this.playMode(Options)
 				);
 		}  else if(Status === GameStatus.CORRECT){
 			return(
 				this.correctMode(Options[CorrectOption])
 				);
 		}
 		else return null;
 	}

 	

 	static defaultProps = {
 		Options: [{name:"Israel", id:"sdfsd"},
			 		{name:"Brazil", id:"sdhhh"},
			 		{name:"France", id:"sdhee"}, 
			 		{name:"Italy", id:"sbbb"}],
 		Flag: "#",
 		CorrectOption: "Brazil",
 		onGuess: () => alert("Guess clicked"),
 		Status: utils.GameStatus.Play
	}
 }

export default ControlBar