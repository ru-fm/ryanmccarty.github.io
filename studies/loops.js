// LØØPS //
/*
0. loops are constructs built in to javascript that allow us to perform and repeat actions any number
of times. this includes an infinite number of times. thus when creating loops we set conditions 
such as where to start and stop so that it executes to our specifications.*/

//while loops execute a block of code as long as a provided condition is true
var count = 0
while (count <= 10) {
    console.log(count);
    count++;//it's imperative to increment while looping. without this line our loop would execute infinitely.
}

//for loops are frequently used for looping through and iterating all the values of an array. they consist of
//statements or conditions: start, stop, and increment.
for (let i = 0; i < array.length; i++) {};//forwards looping over an array
for (let i = array.length - 1; i > -1; i--) {};//backwards looping over an array
/*the first statement is evaluated once before any code is executed andserves as the start of the loop.
the second statent is evaluated each time the loop is run and thus the loop will run until in evaluates to false.
the final statement is the incrementer or how we want i to change after each individual loop.*/

//for in loops are used to loop over the keys of an object. 
let obj = {
    name: 'navi',
    color: 'grey',
    sleepy: true
};
for (let key in obj) {
    console.log(key);//prints keys name color sleepy
    console.log(obj[key]);//prints values navi grey true
}


