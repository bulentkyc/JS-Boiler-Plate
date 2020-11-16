
//White spaces just matter if inside quotation marks

var tech = 'JS';
console.log("I'm coding " + tech + " :)");

/*
Variables
Syntax: var/let/const variable_name=value
-after var/let/const we have to put space
-after variable name we can put space or not. It's not a must
-Equal symbol is a must and we can not use anything else instead
-after equal symbol we can put space or not. It's not a must
-We can create variable without any value. In this case we should not use equal mark
-If we use equal mark we have to set value;
*/
var myVar; //we did not INITIAL value. So this is an empty variable
var style = 'my style'; //We set INITIAL value
console.log(myVar);
myVar = 'Anymore I have a value too'; //We set the value here to the variable

console.log(myVar);

myVar = '2020';

console.log(myVar);

console.log('myVar: ' + myVar);

/*
Variable Naming:
-We should use camelCase
-Name should be short
-Name should be clear, should give some idea about value or use case.
*/

//var myVar% = 'Something';
//Breaks whole JS

//console.log(alien);
//Break after here

console.log('style: '+style);

//left hand side of '=' is taker, right hand side is giver
style = myVar;
// style variable takes the value from myVar

//'Hello World' = myVar; // NOT ALOUD!!!!

console.log(style);
console.log(myVar);

var myLastVar = 1;
var myLastVar = 2;

console.log(myLastVar);

let myNextGenVar = 1;
//let myNextGenVar = 2;

myNextGenVar = 3; //Aloud
console.log(myNextGenVar);

const myConstant = 1;
myConstant = 12;// Not Aloud!!!
console.log(myConstant);

/*
                    |  var  |  let  | const
------------------------------------------
Re-creation         |   +   |   -   |   -
Re-assignment       |   +   |   +   |   -
Initial-assignment  |   +   |   +   |   +
*/

