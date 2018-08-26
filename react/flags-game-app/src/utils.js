var Enum = require('enum');

module.exports = {
	GameStatus: new Enum({'PLAY':1, 'CORRECT':2, 'WRONG':3, 'INIT': 4})
}
