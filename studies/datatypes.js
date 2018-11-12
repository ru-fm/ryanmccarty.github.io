/*
DATATYPES:
0. Dataypes come in two flavors: simple/primitive and complex. 

1. simple: fit within the 1 byte of memory allocated to a variable when it is
created. as such they are copied by VALUE. when assigned or passed the data ITSELF is
copied and, if changed, returns a new simple dataype.*/
var cat = 'navi';
var anotherCat = cat;//anotherCat now contains its own copy of the string 'navi'
var AnotherCat = 'heihu';
console.log(cat);//still prints navi, only the copied value store in anotherCat changed.

/*2 complex: store REFERENCES to values, and are copied as such. when we assign a new 
variable to an existing complex dataype both the new and original variable point to the 
same object; the new variable is not a copy and actions performed on it change the original.*/
var cat = {name: 'navi'};
var anotherCat = cat;
anotherCat.name = 'heihu';
console.log(cat.name);//returns heihu.



// SIMPLE/PRIMITIVE DATATYPES //
//Number: numbers!
var num = 256;

//String: characters!
var string = 'Navi is sleepy.';

//Boolean: true or false
console.log(1 < 2); //prints true
console.log(1 > 2); //prints false

//undefined: a value given to variables that have been declared but not assigned. 
var navi
console.log(navi); //prints undefined. compare to:
console.log(cat); //results in 'ReferenceError cat is undefined'

//null: valueless but intentionally so. null must be assigned and indicates
//that something is purposefully empty. falsey. do not mix up 0, undefined, etc.

//NaN: 'Not-A-Number'. a value that results typically from operations on numbers
//that are illegal or illogical. 
console.log(0/0); //prints NaN
console.log(10 * 'cat');//prints NaN

// COMPLEX DATATYPES //
/*Array: arrays are zero-indexed lists that can contain an indefinite number of values
of any datatype. the values they contain can be accessed by bracket notation via their 
index position. values can be removed from, added to, and manipulated within arrays.*/
var arr = ['R', 2, ['D', true]];
console.log(arr[2][0]);//prints D

/*Object: objects are similar to arrays in their capacity to contain an indefinite number
of values of any datatype. however, whereas arrays simply contain an ordered list of values
objects contain unordered key:value pairs. a key is created, assigned a value, and this value
can then be accessed using the name of the key. in this sense, objects are like associative arrays;
the value has (or should have) relation to its key, unlike in an array in which it simply has a position.*/
var obj = {
    name: 'navi',
    paws: 4,
    sleepy: true
};
console.log(obj.name);//prints navi
console.log(obj['paws']);//prints paws

/*Function: simply put, functions are blocks of code designed to perform a particular task.
functions eliminate the need to retype code every time you need to use it by packaging it in 
a reusable block that can be called via the functions name followed by parentheses. values can 
be passed into functions as arguments that take the place of a functions parameters.*/

function whosACuteKitty (name) {
    return name + ' is a cute kitty.';
}
console.log(whosACuteKitty('navi'));//prints navi is a cute kitty
console.log(whosACuteKitty('heihu'));//prints heihu is a cute kitty

/*Infinity and -Infinity: not real numbers. rather they are used in describing and measuring
the limiting behaviors of other numbers and equations. they are equal to numbers that exceed 
the upper or lower limit of floating point (or representable) numbers as defined by the IEEE 
standard. any armithmetic involving infinity yields infinity.*/

console.log(1.797693134862315E+308 * 2);//prints infinity

