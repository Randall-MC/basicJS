// Prototype Inheritance
function inheritsFrom(prototypeChild, prototypeFather) {
    let fn = function () {};
    fn.prototype = prototypeFather.prototype;
    prototypeChild.prototype = new fn;
    prototypeChild.prototype.constructor = prototypeChild;
}

// Start Person
function Person(name, surName, height) {
    this.name = name,
    this.surName = surName,
    this.height = height
}

Person.prototype.greet = function () {
    console.log(`Hi!, my name is ${this.name} ${this.surName}`);
}

Person.prototype.isTall = function () {
    return this.height >= 1.8;
}
// End Person

// Start Developer
function Developer(name, surName) {
    this.name = name,
    this.surName = surName
}

inheritsFrom(Developer, Person);

Person.prototype.greet = function () {
    console.log(`Hi!, my name is ${this.name} ${this.surName} and i'm DEVELOPER`);
}
// End Developer

let Juan = new Person('Juan', 'Snachez', '1.6');
let Pepito = new Person('Pepito' , 'Gonzales', '1.8');
let Anita = new Developer('Anita', 'La wuerfanita', '1.83');

Juan.greet();
Pepito.greet();
Anita.greet();
Juan.isTall();
Pepito.isTall();
Anita.isTall();