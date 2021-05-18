const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function getCharacter(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, callback).fail(() => {
        console.log(`There was a problem with id ${id}`);
    })   
}

getCharacter(1, function(character) {
    console.log(`Greetings mortal, my name is ${character.name}`);

    getCharacter(2, function(character) {
        console.log(`Greetings mortal, my name is ${character.name}`);

        getCharacter(3, function(character) {
            console.log(`Greetings mortal, my name is ${character.name}`);

            getCharacter(4, function(character) {
                console.log(`Greetings mortal, my name is ${character.name}`);
                
                getCharacter(5, function(character) {
                    console.log(`Greetings mortal, my name is ${character.name}`);

                    getCharacter(6, function(character) {
                        console.log(`Greetings mortal, my name is ${character.name}`);

                        getCharacter(17, function(character) {
                            console.log(`Greetings mortal, my name is ${character.name}`);
                        });
                    });
                });
            });
        });
    });
});