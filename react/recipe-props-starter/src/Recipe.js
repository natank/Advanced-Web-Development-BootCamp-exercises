import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  
  deleteRecipe() {
    const title = this.props.Recipe.title;
    this.props.deleteRecipe(title);
  }

  render() {
    const {title, img, instructions, ingredients} = this.props.Recipe;
    const ingredientElements = ingredients.map((ing, index) => 
      <li key={index}>{ing}</li>  
    );
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredientElements}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
        <button onClick = {this.deleteRecipe.bind(this)} id="delete" className="btn-delete">Delete</button>
        
      </div>
    );
  }
}

export default Recipe;