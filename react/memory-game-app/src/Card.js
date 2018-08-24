import React from 'react'
import './memory-game.css'
const utils = require('./utils');

function Card(props) {
	let {status, colorRevealed, colorCovered,id, onClick} = props.Card;
	let bgColor = (status === utils.CardStatus.COVERED) ? colorCovered : colorRevealed;
	var cardStyle = {
		backgroundColor: bgColor,
	}
	return(
		<li className="card" style={cardStyle} onClick = {
				() => { 
					onClick(id)
					console.log("card clicked: " + id)
				}
			}>
		{id}</li>
	)
}

export default Card