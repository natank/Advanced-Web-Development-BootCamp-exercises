/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

function displayStudentInfo(obj) {
    var {first, last} = {first: obj.first, last: obj.last}
    console.log("Your full name is " + first + " " +last)
}

/* 
Write a function called printFullName which accepts an object and returns the string 
"Your full name is" concatenated with the value of the first key and a space and then the value of the last key. 
See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should 
be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/


function printFullName() {
    var {first, last} = {first: arguments[0].first, last: arguments[0].last}
    console.log("Your full name is " + first + " " +last)
}

/* 
Write a function called createStudent which accepts as a parameter, 
a default parameter which is a destructured object with the key of likesES2015 and value of true, 
and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 
	'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, 
	the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

function createStudent({ likesJavaScript = true, likesES2015 = true } = {}) {
	if(likesJavaScript) {
		if(likesES2015) {
			console.log(`The student likes JAvaScript and ES2015`)
		} else {
			console.log(`The student likes JavaScript`)
		}
	} else {
		if(likesES2015) {
			console.log(`The student likes ES2015`);
		} else {
			console.log(`The student does not like much...`)
		}
	}
}



function reverseArray(arr) {
	for (vari=0; i<arr.len/2;i++)
	{
		[arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
	}
	return arr
}
