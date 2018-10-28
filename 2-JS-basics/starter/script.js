console.log('Hello gwee from JS');
var firstName = 'David';
var lastName = 'P';
var age = 10;
//

//how interesting
var score = 0, highscore = 0;
console.log('Your score is:' + score + ' Your high score is:' + highscore);
//Your score is 0 Your high score is 0

//multiple declarations, don't throw, be careful...
var score, highscore = 0;
console.log('Your score is:' + score + ' Your high score is:' + highscore);


//neat
var undefinedVar, definedVar = "Apple"
console.log('Undefined var: ' + undefinedVar + '. Defined var:' + definedVar);

//lets try a prompt
var lastName = prompt('What is his last name?');
console.log(lastName);

//does this work, yep its just a callback
//i can imagine how this can natively lead to callback hell, its so easy 
console.log(prompt('whats the weather like'));

//ok lets see whats up with the typeof operator
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof true);
var x; console.log(typeof x);

//multiple assignemnts
var y,z;
y = z = 'is this a primitive or a reference';
console.log(y);
console.log(z);