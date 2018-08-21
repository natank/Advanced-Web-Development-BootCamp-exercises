import React, {Component} from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {
	constructor(props) {
		super(props);
		this.state =  {title: '', instructions: '', ingredients: [""], img: ''};
		this.formStyle = {
			margin: "auto",
			border: '6px solid #1e2833',
			borderRadius: 8,
			width: "20%"
		}
		this.newIngredient = "";
	}	

	handleTitleChange(event) {
		this.setState({title: event.target.value})
	}

	handleInstructionsChange(event) {
		this.setState({instructions: event.target.value})
	}

	handleIngredientChange(event) {
		this.newIngredient = event.target.value;
	}

	handleImageURLChange(event) {
		this.setState({img: event.target.value})
	}

	addIngredient(event) {
		let IngredientsList = [...this.state.ingredients];
		let lastIngredient = IngredientsList[IngredientsList.length-1];
		
		if(this.newIngredient == ""){
			return;
		}
		else if( lastIngredient != "") {
			IngredientsList = [...IngredientsList, this.newIngredient];
		} else {
			IngredientsList = [...IngredientsList.slice(0, IngredientsList.length-1), this.newIngredient, ""];
		}
		this.newIngredient = "";
		this.setState({ingredients: IngredientsList});
	}


	handleSubmit(event){
		this.props.submitRecipeData(this.state);
		event.preventDefault();
	}

	hideForm(event) {
		this.props.ShowForm(false);
	}

 	render(){
		return(
		<form onSubmit={this.handleSubmit.bind(this)} style={this.formStyle} className="form">
				
				<div className="form__close"><button onClick= {this.hideForm.bind(this)}>x</button></div>
				
				<label className="form__element">
					<span className="form__title">Title</span>
					<input type="text" id="title" value={this.state.title} 
						onChange={this.handleTitleChange.bind(this)} name="title" className="form__title__text"/>
				</label>

				<label className="form__element"> 
					<p>instructions</p>
			  		<textarea 
			  			rows="4" cols="30" id="instructions" 
			  			className="form__instructions__text"
			  			value={this.state.instructions} 
			  			onChange={this.handleInstructionsChange.bind(this)}
			  		/>

				</label>
				
				{
					this.state.ingredients.map((ingredient, index) => {
							let readonly = (ingredient=="") ? null:"readonly";
							return (
							<div class= "form__ingredient clearfix" key={index}>
								<span>{index+1}. </span>
								<input type="text" 
									defaultValue={ingredient} 
									className= "form__ingredient__text" 
									readonly={readonly}
									onChange={this.handleIngredientChange.bind(this)}
								/>
							</div>)
						}

					)
				}

				<input type="button" value="+" 
					className="form__button--blue" 
					onClick={this.addIngredient.bind(this)} 
				/>

				<label className="form__element" >
					Image Url 
					<input 
						type="text" 
						onChange={this.handleImageURLChange.bind(this)}
					/>
				</label>

				<input type="submit" value="SAVE" className="form__button--blue" />
			</form>
			)
	}
}

export default RecipeForm;