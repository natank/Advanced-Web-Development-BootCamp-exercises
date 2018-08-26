import React, { Component } from 'react';
import './flag-game.css';
import ControlBar from './ControlBar';
const utils = require('./utils');


const GameStatus = utils.GameStatus;

function header(props) {
      return (
        <header>
          <h1 className="header__title">Guess The Flag</h1>
        </header>
        )
    }

function flag(URL){
  return(
    <div className="flag Container"> 
      <img src={URL} alt="flag"/>
    </div>
    )
}


class Game extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Options: [{name:"", key:"sdfsd", countryIndex: 1},
                {name:"", key:"sdhhh", countryIndex: 2},
                {name:"", key:"sdhee", countryIndex: 3}, 
                {name:"",  key:"sbbb", countryIndex: 4}
              ],
      Flag: "",
      CorrectOption: 1,
      onGuess: this.onGuess.bind(this),
      onNewGame: this.onNewGame.bind(this),
      Status: GameStatus.INIT
    }
  }


  componentDidMount() {
    //GET https://restcountries.eu/rest/v2/all
    //Store list of countries in our state (options field)
    const countries  = 'https://restcountries.eu/rest/v2/all';
    fetch(countries).
      then(data => data.json()).
      then(data => this.setOptions(data))
  }

  setOptions(countries) {
    var arr = [] //will hold indexs of countries
    while(arr.length < 4){ //Choose 4 different indexes of countries
        var randomnumber = Math.floor(Math.random()*countries.length);
        if(arr.indexOf(randomnumber) > -1) continue;//number already in array
        arr[arr.length] = randomnumber;
    }
    
    var options = arr.map(function(countryIndex){
      return {
        name: countries[countryIndex].name, 
        key: countries[countryIndex].capital,
        countryIndex: countryIndex
      }
    })
    var correctOption = Math.floor(Math.random()*options.length);
    var correctCountryIndex = options[correctOption].countryIndex;
    console.log("correct country index:"+ correctCountryIndex);
    this.setState({
      Options: options,
      CorrectOption: correctOption,
      Flag: countries[correctCountryIndex].flag,
      Status: utils.GameStatus.PLAY
    })
  }

  onGuess = function(countryKey){
    var {Options, CorrectOption} = this.state;
    if(countryKey === Options[CorrectOption].key) {
      this.setState({Status: GameStatus.CORRECT})
    } else {
      this.setState({Status: GameStatus.WRONG})
    }
  }

  onNewGame = function(){
    this.setState({
      Status: GameStatus.PLAY
    })
  }

  render() {
    var {Flag,Status} = this.state;
    if(Status === utils.GameStatus.INIT) {return (
      <div>
        {header()}
      </div>
    )} else return (
      <div>
        {header()}
        <ControlBar {...this.state}/>
        {flag(Flag)}
     </div>
    );
  }
}

export default Game;
