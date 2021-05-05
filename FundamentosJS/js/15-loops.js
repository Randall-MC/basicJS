let David = {
    firstName: 'David',
    lastName: 'Turner',
    age: 17,
    weight: 75
}

console.log(`At the beginning of the year ${David.firstName} weighs ${David.weight}kg`);

const INCREASED_WEIGHT = .3;
const YEAR_DAYS = 365;
const WEIGHT_GOAL = David.weight - 3;

// function gainWeight(person) {
//     return person.weight += .2;
// }
const gainWeight = person => person.weight += INCREASED_WEIGHT;
const loseWeight = person => person.weight -= INCREASED_WEIGHT;
const eatALot = () => Math.random() < .3;
const doExecise = () => Math.random() < .4;

let pastDays = 0;
while (David.weight > WEIGHT_GOAL) {
    if (eatALot()) {
        gainWeight(David);
    }
    if (doExecise()) {
        loseWeight(David);
    }
    pastDays += 1;
}

console.log(`It took ${pastDays} days for ${David.firstName} to lose 3kg`);

// This loop "for" calculates gained or loss weight for a year
/* 
for (let i =1; i <= YEAR_DAYS; i++) {
    let randomNumber = Math.random();
    // randomNumber will give us numbers between 0 and 1
    if (randomNumber < .25) {
        gainWeight(David);
    } else if (randomNumber < .5) {
        loseWeight(David);
    }
} */
//console.log(`At the end of the year ${David.firstName} weighs ${David.weight.toFixed(1)}kg`);