let sacha = {
    firstName: 'Sacha',
    lastName: 'Lifszyc',
    height: 1.72,
    books: 112
}

let alan = {
    firstName: 'Alan',
    lastName: 'Perez',
    height: 1.86,
    books: 103
}

let martin = {
    firstName: 'Martin',
    lastName: 'Gomez',
    height: 1.85,
    books: 14
}

let dario = {
    firstName: 'Dario',
    lastName: 'Juarez',
    height: 1.71,
    books: 80
}

let vicky = {
    firstName: 'Vicky',
    lastName: 'Zapata',
    height: 1.56,
    books: 94
}

let paula = {
    firstName: 'Paula',
    lastName: 'Barros',
    height: 1.76,
    books: 76
}
// Create an array
let persons = [sacha, alan, martin, dario, vicky, paula];

for (i = 0; i < persons.length; i++) {
    let person = persons[i];
    console.log(`${person.firstName} is ${person.height}m`);
}

const isTall = ({height}) => height > 1.8;
const isShort = ({height}) => height < 1.8;
let tallPersons = persons.filter(isTall);
let shortPersons = persons.filter(isShort);

/*
const metersToCentimeters = person => {
    return {
        ...person,
        height: person.height * 100
    }
} */
const metersToCentimeters = person => ({
    ...person,
        height: person.height * 100
});
let heightInCentimeters = persons.map(metersToCentimeters);

/*
let totalBooks = 0;
for (i = 0; i < persons.length; i++) {
    totalBooks += persons[i].books;
}
*/
const sumBooks = (acum, {books}) => acum += books;
let totalBooks = persons.reduce(sumBooks, 0);

// console.log(tallPersons);
// console.log(shortPersons);
// console.log(heightInCentimeters);
// console.log(persons);
console.log(`Total of books ${totalBooks}`);