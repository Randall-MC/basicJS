let carList = [];

function car(brand, model, year){
    this.brand = brand,
    this.model = model,
    this.year = year
};

for(i = 0; i < 3; i++){
    let brand = prompt("Car brand?");
    let model = prompt("Car model?");
    let year = Number(prompt("Car year?"));
    carList.push(new car(brand, model, year));
    console.log(carList[i]);
}