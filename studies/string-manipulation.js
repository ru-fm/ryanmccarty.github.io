//string manipulation.
//strings can be manipulated with operators:
//adding or concatenating strings can be done with +
let a = 'My name is';
let name = 'Ryan';
console.log(a + ' ' + name);//prints My name is Ryan

//we can access individual characters of a string using bracket notation
console.log(name[0]);//prints R

//there are many different methods that interact with string such as:
console.log(name.substr(1));//prints yan
console.log(name.indexOf('y'));//prints 1
console.log(name.toUpperCase());//prints RYAN
console.log(name.toLowerCase());//prints ryan
