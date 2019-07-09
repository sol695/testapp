//!
//?
//@
//*
// TODO: asdfkj

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

// function resolveAfter() {
// return a + b;
// }
// resolveAfter(3);
/*
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
*/
//* objects and properties and methods
let john = {
  firstname: 'John',
  birthsday: 1990,

  // * objects and methods

  calcAge: function (birthsday) {
    this.age = 2019 - this.birthsday;
  }
};

// console.log(john.calcAge(1995));
console.log(john);


let jons = {
  fullName: 'Jons smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
let mark = {
  fullName: 'Mark smuth',
  mass: 76,
  height: 1.55,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
// john.calcBMI();
// mark.calcBMI();
console.log(john, mark);

if (john.calcBMI > mark.calcBMI) {
  console.log(john.fullName + ' has a han ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a han ' + mark.bmi);
} else {
  console.log('They have the same BMI');
}

//* loops and iterators

let jones = ['John', 'Smith', 1888, 'designer', false];
for (let i = 0; i < jones.length; i++) {
  console.log(jones[i]);
}
// while
let i = 1;
while (i < jones.length) {
  console.log(jones[i]);
  i++;
}
console.log(i);

// continue and break
for (let i = 0; i < jones.length; i++) {
  if (typeof jones[i] !== 'boolean') {
    continue;
  }
  console.log(jones[i]);
}
//* task

/**
 * @type {{fullName: string, bills: number[], calcTips: jonsi.calcTips, age: number}}
 */
let jonsi = {
  fullName: 'Jonsi Caliman',
  age: 23,
  bills: [123, 14, 234, 123, 5, 2],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];
    this.tips = this.finalValue = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentages;
      let billie = this.bills[i];
      if (billie < 50) {
        percentages = .2;
      } else if (billie >= 50 && billie < 200) {
        percentages = .15;
      } else {
        percentages = .1;
      }
      this.tips[i] = billie * percentages;
      this.finalValue[i] = billie + billie * percentages;
    }
  }
};
let marks = {
  fullName: 'Mark Semuil',
  age: 23,
  bills: [123, 14, 234, 123, 5, 2],
  calcTips: function () {
    this.tips = [];
    this.finalValue = [];
    // this.tips = this.finalValue = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentages;
      let billie = this.bills[i];
      if (billie < 100) {
        percentages = .2;
      } else if (billie >= 100 && billie < 300) {
        percentages = .1;
      } else {
        percentages = .25;
      }
      this.tips[i] = billie * percentages;
      this.finalValue[i] = billie + billie * percentages;
    }
  }
};

/**
 *
 * @returns {number}
 */
function calcAverage() {
  let sum = 0;
  // this.tips = calcTips;

  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// jonsi.calcTips();
// marks.calcTips();

// jonsi.average = calcAverage(jonsi.tips);
// marks.average = calcAverage(marks.tips);

console.log(jonsi);

if (jonsi.average > marks.average) {
  console.log(jonsi.fullName + '\'s familiy higher tips, with an average of $' + jonsi.average);
} else if (marks.average > jonsi.average) {
  console.log(marks.fullName + '\'s family higher tips, with an average of $' + marks.average);
}
// function calculationAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }

let jonn = {
  name: 'Saol',
  yearOfBirth: 1995,
  calculationAge: function () {
    console.log(this);
    console.log(20 - this.yearOfBirth);

    //<editor-fold desc="/* function inner */">
    function innerFunction() {
      console.log(this);
    }

    //</editor-fold>

    innerFunction();
  }
};
let alo = function (ad) {
  return ad;
};

alo('sa');
console.log(alo);

jonn.calculationAge();
let mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculationAge = john.calculationAge;

//! DRY Principle

