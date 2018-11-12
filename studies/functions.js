//FUNCTIONS
/*0. functions are reusable blocks of code. they are sets of statements that perform tasks or calculate values
that simplify our code due to their ability to be reused and passed different values*/

//declaration/definition
//a function declaration looks like this
function isItAString (maybeString) {
    return typeof maybeString === 'string';
}
/*first the keyword function followed by the functions name. in parentheses we can name paramaters for the function
to take. parameters are like placeholders for the arguments that will be passed to the function when we call it. the
return statement specifies the value to be returned and ends the execution of the function*/

//the function definition itself is not executed code. to run a function we call or invoke it by typing its name followed
//by a set of parentheses containing arguments we which to pass to the function, if any. 
let notString = 55;
let isString = 'Navi';
console.log(isItAString(notString));//prints false
console.log(isItAString(isString));//prints true

//functions can also be written as function expressions
let gimmeFive = function () {
    console.log(5);
};
gimmeFive();//runs the anonymous, paramaterless function and prints 5
console.log(gimmeFive);//prints the function definition assigned to the variable


/*functions have their own scope. meaning they have access to variables declared in the global scope and any 
subsequent scopes that the function itself may be nested within. the inverse of this is not true.*/




// Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
