let David = {
    firstName: 'David',
    lastName: 'Smith',
    age: 21
}

let Sarah = {
    firstName: 'Sarah',
    lastName: 'Lauren',
    age: 20
}

// function data(person) {
//     let firstName = person.firstName;
//     let lastName = person.lastName;
//     let age = person.age;
//     console.log(`Hi!, My name is ${firstName} ${lastName} and i am ${age}`)
// }

// function data({firstName, lastName, age}) {
//     console.log(`Hi!, My name is ${firstName} ${lastName} and i am ${age}`);
// }

function data(person) {
    let {firstName} = person;
    let {lastName} = person
    let {age} = person;
    console.log(`Hi!, My name is ${firstName} ${lastName} and i am ${age}`);
}

function birthday(person) {
    return {
        ...person,
        age: person.age + 1
    }
}

let olderPerson = birthday(David);
console.log(olderPerson);

data(David);
data(Sarah);