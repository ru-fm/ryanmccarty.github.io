//Assignment operators: the basic assignment operator is the equals sign. it assigns value.
var name = whatever;

//Arithmetic operators: typical mathematical symbols and operations. they take and return numbers.
let a = 1 + 1;//addition
let b = 1 - 1;//subtraction
let c = 2 * 2;//multiplication
let d = 4 / 2;//division
let e = 4 % 2;//remainder
let f = 2 ** 2;//exponentiation

//Comparison operators: compare two values and return a boolean of the result. can be strict or loose.
//strict comparison takes into account whether the two values are of the same type:
1 === 1;//true
1 === '1';//false
//abstract/loose/non-strict comparison converts operands to the same type before comparison:
1 == '1';//true

//Logical operators: used to check for the result of multiple boolean values. && meaning 'and'; || meaning 'or'
if (1 === 1 && 1 == '1') {};//evaluates true and runs code as BOTH comparisons are true.
if (1 === 1 && 1 === '1') {};//does not execute code as right comparison returns false.

if (1 === 1 || 1 === '1') {};//executes code as one of the values (the left) is true, does not matter that the other is false.


//Unary operators: in contrast to the binary operators above that work with two operands, unary 
//operators perform actions on single operands.
//! or bang, also a logical operator, flips a values truthiness. 
console.log(!true);//prints false
console.log(!false);//prints true

//- or negation simply negates the operand to which it is assigned
let x = 5
console.log(-x);//prints -5

//Ternary operator, where unary operators take one operand and binaries take two, the ternary
//operator takes three. also called the conditional operator it can be used as a shorthand if().
condition ? ifTrue : ifFalse;
//if the condition supplied evaluates to true the middle value is returned, else the one on right.