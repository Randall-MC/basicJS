let name = prompt(`Please, type your name`);
let charactersNumber = name.length;
let  lastCharacter = name.charAt(charactersNumber - 1);

console.log(name.toLowerCase());
console.log(`Number of characters ${charactersNumber}`);
// Get a specific part of the name use  SUBSTR
// The first parameter is the position of String
// The second parameter indicates the number of the characters to ocupate
console.log(name.substr(4 , 3));

alert(`The last character is ${lastCharacter.toUpperCase()}`);