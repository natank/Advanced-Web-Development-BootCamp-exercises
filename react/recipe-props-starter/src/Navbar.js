import React, {Component} from 'react';
import './Navbar.css';



class Navbar extends React.Component {
	constructor(props) {
		super(props)
	
		this.navItems = 
					<div>
						<li><a onClick= {this.showForm.bind(this)} href="#">New Recipe</a></li>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact Us</a></li>
					</div>
	}

	showForm() {
		this.props.showForm(true)
	}

	render(){
		return <ul className="Navbar clearfix">{this.navItems}</ul>
	}
}

export default Navbar