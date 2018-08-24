 class Enumeration {
    constructor(obj) {
      for (const key in obj) {
        this[key] = obj[key]
      }
      return Object.freeze(this)
    }
    has = (key) => {
      return this.hasOwnProperty(key)
    }
  }
 

 module.exports = {

  CardStatus: new Enumeration({
      REVEALED: 0,
      COVERED: 1,
      RESOLVED: 2
    }),

   shuffleArray: function(array) {
  		for (let i = array.length - 1; i > 0; i--) {
  	        const j = Math.floor(Math.random() * (i + 1));
  	        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
      	}
  	},

  getRandomColor: function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}