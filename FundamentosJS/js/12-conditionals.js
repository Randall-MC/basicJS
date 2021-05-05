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

function isOfLegalAge(person) {
    let {firstName} = person;
    let {lastName} = person;
    let {age} = person;
    if (age >= 18) {
        console.log(`${firstName} ${lastName} is of legal age`);
    }else {
        console.log(`${firstName} ${lastName} is minor`);
    }
}

isOfLegalAge(David);
isOfLegalAge(Sarah);