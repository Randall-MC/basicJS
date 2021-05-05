let name = 'Jose'
let charactersNumber = name.length;
let lastCharacter = name.charAt(charactersNumber - 1);

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(`Number of characters ${charactersNumber}`);
console.log(name.substr(4 , 3));
// SUBSTR
// Get a specific part of the name use  SUBSTR
// The first parameter is the position of String
// The second parameter indicates the number of the characters to ocupate
console.log(`The last character is ${lastCharacter.toUpperCase()}`);