// CONTROL FLOW
/* we 'control the flow' of our code, or what executes when and why, by setting up conditional
statements. these statements check if a provided value evaluates to true or false and if so 
execute their assigned code.*/

// If: a basic conditional statement
if (1 === 1) {
   var name = 'Ryan';
}
console.log(name);//prints Ryan

if (1 === '1') {
   name = 'Navi';
}
console.log(name);//still prints Ryan as the reassignment never happened

// Else-if: can be appended to if statements to check additional values if the initial 'if' is false.
if (false) {
   name = 'Navi';
} else if (true) {
   name = 'Emily';
}
console.log(name);//prints Emily

// Else: can be used as a default or catchall at the end of an if statement. it does not need to 
//be provided a condition as it is essentially 'if everything else was false, just do this'
if (false) {
   name = 'Navi';
} else if (false) {
   name = 'Emily';
} else {
   name = 'Heihu';
}
console.log(name);//prints Heihu

//Switch statements are a list of cases to which statements are assigned. these cases are checked 
//against a provided value and if a match is found have their statements returned. 
switch (name) {
   case 'Ryan':
   case 'Emily':
      console.log('Person!');
      break;
   case 'Navi':
   case 'Heihu':
      console.log('Cat!');
      break;
   default:
      console.log('Not a person, not a cat!');
}//as our last assignment of name was Heihu this statement will print Cat!

/*in a switch statement we place breaks after statements so that the switch does not continue running
and evaluating further cases after it has found a match. as in the example above though we can assign
multiple cases to the same statement. the default statement at the end is similar to an else; it runs
if no cases are found to match the provided expression*/