// Types of Function on JS

/*
"Function Declaration"
function nameFunction(parameters) {
    block of code
}

"Function Expression"
const variableName = function(parameters) {
    block of code
}

"Arrow functions"
const variableName = (parameters) => {
   return code;
}
*/

let David = {
    firstName: 'David',
    lastName: 'Turner',
    age: 17
}

let Sarah = {
    firstName: 'Sarah',
    lastName: 'Smith',
    age: 20
}

let Maria = {
    firstName: 'Maria',
    lastName: 'Juarez',
    age: 10
}

const COMMING_OF_AGE = 18;

const isOfAge = ({ age }) => age >= COMMING_OF_AGE;
const isMinor = ({ age }) => !isOfAge({ age });

function isOfLegalAge(person) {
    isOfAge(person) ? console.log(`${person.firstName} is of age`) : 
    isMinor(person) ? console.log(`${person.firstName} is underage`) : 
    console.log('Is a fucking Alien, they have not age');
}

function accces(person) {
    if (isMinor(person)) {
        console.log(`Access denied to ${person.firstName} ${person.lastName}`);
    } else {
        console.log(`Access granted to ${person.firstName} ${person.lastName}`);
    }
}

isOfLegalAge(David);
isOfLegalAge(Sarah);
isOfLegalAge(Maria);

accces(David);
accces(Sarah);
accces(Maria);