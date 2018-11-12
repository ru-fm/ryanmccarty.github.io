/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//look through array of animals and return that animals object if it has name, otherwise return null
function search(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toUpperCase() === name.toUpperCase()) {
            return animals[i];
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.

function replace(animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toUpperCase() === name.toUpperCase()) {
            return animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toUpperCase() === name.toUpperCase()) {
            return animals.splice(i, 1); 
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    if (animal.name.length > 0 || animal.species.length > 0) {
        for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
            return 'That name is already taken!';
        } else {
            return animals.push(animal);
        }
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
