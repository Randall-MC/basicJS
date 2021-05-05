class Person {
    constructor(name, surName, height) {
        this.name = name,
        this.surName = surName,
        this.height = height
    }
    /*
    greet(reply) {
        console.log(`Hi!, my name is ${this.name} ${this.surName}`);
        if (reply) {
            reply(this.name, this.surName);
        }
    }
    */
    greet(reply) {
        // let name = this.name;
        // let surName = this.surName;
        let {name, surName} = this;
        console.log(`Hi!, my name is ${name} ${surName}`);
        if (reply) {
            reply(name, surName);
        }
    }

    isTall() {
        return this.height >= 1.8;
    }
}

class Developer extends Person{
    greet(reply) {
        let {name, surName} = this;
        console.log(`Hi!, my name is ${name} ${surName} and i'm Developer`);
        if (reply) {
            reply(name, surName, true);
        }
    }
}

function reply(name, surName, isDev) {
    console.log(`Hi!, what's up ${name} ${surName}`);
    if (isDev) {
        console.log(`Oh!, i didn't know you are a developer`);
    }
}

let Kevin = new Person('Kevin', 'Smith', 1.6);
let Brayan = new Person('Brayan', 'O coner', 1.81);
let Britani = new Developer('Britanis', 'Lee', 1.57);

Kevin.greet();
Brayan.greet(reply)
Britani.greet(reply);