let personOne = {
    firstName: 'Randall',
    lastName: 'Marquez',
    edad: 21
}

let personaDos = {
    nombre: 'Yamal',
    apellido: 'Marquez',
    edad: 21
}

function informacion(persona) {
    let {nombre} = persona;
    let {edad} = persona;
    // console.log('Hola me llamo ' + nombre + ' y tengo ' + edad + ' años');
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

informacion(personaUno);
informacion(personaDos);