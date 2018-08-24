import React, { Component } from 'react';
import './memory-game.css';
import Nav from './Nav'
import Card from './Card'
const utils = require('./utils');

class Game extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
						Cards: this.initializeCards(), 
						SelectEnabled: true,
						NonMatchingCards:[1,2] //will hold the index of non matching cards
						}
	}

	initializeCards() {
		const card = {
					id:1,
					status: utils.CardStatus.COVERED, 
					colorRevealed: "rgb(255,0,0)",
					colorCovered: "rgb(124,124,124)",
					onClick: this.onClick.bind(this)
				}
		var Cards = [];
		for(let i = 0; i<16; i++) {
			Cards.push(Object.assign({}, card));
		}
		
		//Select 8 random colors
		var Colors = [];
		for(let i=0; i<8; i++) {
			Colors.push(utils.getRandomColor());
		}
		//Place colors in Cards
		Cards.forEach((card, index) => {
			card.colorRevealed = Colors[index%8]
			card.id = index
		})
		utils.shuffleArray(Cards);
		return Cards;
	}

	onClick(id){ //Fires when player clicks on a card
		if(!this.state.SelectEnabled) return;
		var otherRevealedCard = 
			this.state.Cards.find(card => card.status === utils.CardStatus.REVEALED);
		var selectedCard = this.state.Cards.find(card => card.id == id);
		if(selectedCard.status == utils.CardStatus.RESOLVED) return;
		if(otherRevealedCard === undefined) { //First card 
			this.setState(
				(prevState, props) => {
					var index = prevState.Cards.findIndex(
						card => card.id == id );
					
					prevState.Cards[index].status = utils.CardStatus.REVEALED;	
					return {
						Cards: prevState.Cards
					}			
				}
			)
		} else if(otherRevealedCard.colorRevealed === 
					selectedCard.colorRevealed) { //Matching cards
			this.setState(
				(prevState, props) => {
					var index = prevState.Cards.findIndex(
						card => card.id == otherRevealedCard.id);
					prevState.Cards[index].status = utils.CardStatus.RESOLVED;
					index = prevState.Cards.findIndex(
						card => card.id == selectedCard.id);
					prevState.Cards[index].status = utils.CardStatus.RESOLVED;
					return {
						Cards: prevState.Cards
					}		
				}
			)
		}
		 else { //No match
		  	this.setState(
				(prevState, props) => {
					var Cards = Object.assign({}, prevState.Cards);
					var indexes = [];

					var index = prevState.Cards.findIndex(
						card => card.id == otherRevealedCard.id);
					Cards[index].status = utils.CardStatus.REVEALED;
					indexes.push(index); 
					
					index = prevState.Cards.findIndex(
						card => card.id == selectedCard.id);
					Cards[index].status = utils.CardStatus.REVEALED;
					indexes.push(index);
					
					return { 
						Cards: prevState.Cards,
						SelectEnabled: false,
						NonMatchingCards: indexes
					}		
				}, () => {
			  		setTimeout(()=>{
			  			var Cards = Object.assign({}, this.state.Cards);
			  			var indexes = this.state.NonMatchingCards;
			  			indexes.forEach(function(index) {
			  				Cards[index].status = utils.CardStatus.COVERED;
			  			})
			  			this.setState({
			  				Card: Cards,
			  				SelectEnabled: true
			  			})
			  		},1300)
				}
			)
		  }
	}

	render(){
		return (
			<div>
				<Nav /> 
				<ul className="board">
					{
						this.state.Cards.map((cardProps, index)=> {
							//console.log ("card " + index + ": " + cardProps.colorRevealed)
							return <Card key={cardProps.id} 
										Card={cardProps} 
										onClick = {this.onClick.bind(this)}
									/>
						})
					}
				</ul>
			</div>

		)
	}
}

export default Game