'use scripts';

console.log(2);

//*
//?
//!
// TODO: complete course 12gb / 02 / 29

let as = 1;
console.log(as);

// function addWrod(a,b){
//     let l = 1; //     let s = 2;
//    return a + b;
// }
// addWrod(4,5);

console.log('hi ');

function resolveAfter() {
    return a + b;
}
resolveAfter(3);

async function ld(x) {
    if (x < 0) throw new Error('the number must be ');
    let a = resolveAfter(30);
    let b = resolveAfter(30);
    return x + await a + await b;
}

ld(12).then(result => {
    100;
})


function typCalculate(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
console.log(typCalculate(100));

let bils = [123, 45, 235];
let tips = [typCalculate(bils[0])]
    [typCalculate(bils[1])]
    [typCalculate(bils[2])];
// console.log(tips);

//* objects and properties and methods
let john = {
    firstname: 'John',
    birthsday: 1990,

    // * objects and methods

    calcAge: function(birthsday) {
        this.age = 2019 - this.birthsday;
    }
};

console.log(john.calcAge(1995));


let jons = {
    fullName: 'Jons smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
let mark = {
    fullName: 'Mark smuth',
    mass: 76,
    height: 1.55,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.calcBMI > mark.calcBMI) {
    console.log(john.fullName + ' has a han ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a han ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}