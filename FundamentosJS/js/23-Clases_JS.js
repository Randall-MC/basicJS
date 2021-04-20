function Person(name, lastName, height) {
    this.name = name,
    this.lastName = lastName,
    this.height = height
}

Person.prototype.greet = function () {
    console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
}

Person.prototype.isTall = function () {
    return this.height >= 1.8;
}

let Juan = new Person('Juan', 'Snachez', '1.6');
let Pepito = new Person('Pepito' , 'Gonzales', '1.8');
let Anita = new Person('Anita', 'La wuerfanita', '1.83');