import React from 'react'
import './memory-game.css'

function Nav(props) {
	return (
		<div className="nav">
			<p className="nav__logo nav__item">
				Memory Game
			</p>
			<ul className="nav__menu nav__item">
				<li><a href="fsd">New Game</a></li>
			</ul>
		</div>
	)
}

export default Nav