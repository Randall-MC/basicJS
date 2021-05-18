const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function getCharacter(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(url, opts, function(data) {
                resolve(data);
            })
            .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`There was a problem with the id: ${id}`);
}

let ids = [1, 2, 3, 4, 5];
/*
let promises = ids.map(function(id) {
    return getCharacter(id);
})
*/
let promises = ids.map(id => getCharacter(id));
Promise.all(promises)
    .then(characters => console.log(characters))
    .catch(onError);
/*
getCharacter(1)
.then(character => {
    console.log(`The character is ${character.name}`)
    return getCharacter(2)
})
.then(character => {
    console.log(`The character is ${character.name}`)
    return getCharacter(3)
})
.then(character => {
    console.log(`The character is ${character.name}`)
    return getCharacter(4)
})
.then(character => {
    console.log(`The character is ${character.name}`)
    return getCharacter(5)
})
.then(character => {
    console.log(`The character is ${character.name}`)
    return getCharacter(17)
})
.catch(onError);
*/