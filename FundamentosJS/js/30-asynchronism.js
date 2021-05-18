/*
console.log('a');
setTimeout( () => console.log('b'), 2000);
console.log('c');
*/

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

// One way to do it
/*
const onPeopleResponse = function(people) {
    console.log(`Greetings mortal, my name is ${people.name}`);
}

function getPeople(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onPeopleResponse);   
}

getPeople(1);
getPeople(2);
getPeople(3);
*/

function getPeople(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(people) {
        console.log(`${id} Greetings mortal, my name is ${people.name}`);

        if (callback) {
            callback();
        }
    });   
}

// Callbacks Hell or Pyramid of Doom
getPeople(1, function() {
    getPeople(2, function() {
        getPeople(3, function() {
            getPeople(4, function() {
                getPeople(5, function() {
                    getPeople(6, function() {
                        getPeople(7);
                    });
                });
            });
        });
    });
});