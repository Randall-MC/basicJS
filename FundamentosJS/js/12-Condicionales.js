let personaUno = {
    nombre: 'Randall',
    apellido: 'Marquez',
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
    if (edad >= 18) {
        console.log(`El señor ${nombre} es mayor de edad`);
    }else {
        console.log(`El señor ${nombre} no es mayor de edad`);
    }
}

informacion(personaUno);
informacion(personaDos);