let counter = 0;
const rains = () => Math.random() < .25;

do {
    counter++;
} while(!rains());

counter === 1 ? 
console.log(`I went to see ir raining ${counter} time`) : 
console.log(`I went to see ir raining ${counter} times`);
