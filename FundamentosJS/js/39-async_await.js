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

async function getCharacters() {
    let ids = [1, 2, 3, 4, 5];
    let promises = ids.map(id => getCharacter(id));

    try {
        let characters = await Promise.all(promises);
        console.log(characters);
    }catch(id) {
        onError(id);
    }
}

getCharacters();