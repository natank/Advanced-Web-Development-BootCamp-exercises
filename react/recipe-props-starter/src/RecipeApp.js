import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';
import Navbar from './Navbar'
import RecipeForm from './RecipeForm'

class RecipeApp extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isRecipeFormVisible: false,
      Recipes: [
          { 
            title: 'pasta', 
            ingredients: ['flourrrr', 'water'],
            instructions: "Mix ingredients",
            img: "spaghetti.jpg"  
          },
          { 
            title: 'Milkshake', 
            ingredients: ['flourrrr', 'water'],
            instructions: "Mix ingredients",
            img: "spaghetti.jpg"  
          }
        ]
      }

  }


  ShowRecipeForm(isVisible) {
    this.setState({isRecipeFormVisible: isVisible})
  }

  addNewRecipe(newRecipe) {
    let Recipes = [...this.state.Recipes];
    this.setState({Recipes: Recipes}); 
  }

  deleteRecipe = (title) => {
    var newRecipes = this.state.Recipes.filter((recipe) => recipe.title!==title);
    this.setState({Recipes: newRecipes})
  }

  getNewRecipe(RecipeData){
    this.setState((prevState, props) => {
      return {
        Recipes: [...prevState.Recipes, RecipeData]
      };
    });
  }

  render() {
    
    return (
      <div>

       <Navbar showForm = {this.ShowRecipeForm.bind(this)} />
       {this.state.isRecipeFormVisible ? 
          <RecipeForm 
            ShowForm = {this.ShowRecipeForm.bind(this)} 
            submitRecipeData = {this.getNewRecipe.bind(this)} 
          /> : 
          null
        } 
                  
       
       {this.state.Recipes.map((RecipeItem, index)=> 
            <Recipe key={index} Recipe = {RecipeItem} deleteRecipe={this.deleteRecipe} />
        )} 
       </div>
    );
  }
}

export default RecipeApp;
