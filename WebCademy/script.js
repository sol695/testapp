/*
*variables
console.log('lasd');
sayHellos('Alex', 'Nico');
sayHellos('Feel', 'Richard');

function sayHellos(name, family) {
  // console.log('Hi ' + name + ' ' + family);
  console.log(`Hi ${name} ${family}`);
}
*/

//* object
// const person1 = {
//   name:'Alexandr',
//   family:'Clinkov'
// }

// const person2 = {
//   name:'Fel',
//   family:'Rico'
// }

// sayHello1(person1);
// sayHello1(person2);


// function sayHello1(person) {
//   // console.log('Hi ' + name + ' ' + family);
//   console.log(`Hi ${person1.name} ${person2.family}`);
// }
// ************************
// *start

//? use this
/* const person3 = {
  name: 'Alexandrs',
  family: 'Clinkovs',

  sayHello2() {
    console.log(`Hi i am ${this.name} ${this.family}`);
  }
}

const person4 = {
  name: 'Fels',
  family: 'Ricos',

  sayHello2() {
    console.log(`Hi i am ${this.name} ${this.family}`);
  }

}

person3.sayHello2();
person4.sayHello2();
*/
//********************
//* end
// **********************

// ? compact and replace to up
// function getPerson(name, family, age) {
//   const person = {
//     name: name,
//     family: family,
//     age: age,

//     sayHello() {
//       console.log(`Hiden Friends ${this.name} ${this.family} ${age}`);

//     }
//   }
//   return person;
// }

// const person1 = getPerson('Allex', 'Denchin', 23);
// const person2 = getPerson('Juan', 'Matus', 29);
// person1.sayHello();
// person2.sayHello();



// ? use Class

// function Person(name, family, age) {
//   this.name = name,
//     this.family = family,
//     this.age = age,

//     this.sayHello = () => {
//       console.log(`Hi frends my name is ${this.name} ${this.family} ${age}`);
//     }
// }
// Person.prototype.car = 'Lada'; //* prototype

// const person = new Person('Alex', 'Denchin', 26);
// person.sayHello();
// console.log(person.car); //* prototype


// ? use Prototype function in Class 
// function Personal(name, family, age) {
//   this.name = name,
//     this.family = family,
//     this.age = age
// }

// Personal.prototype.sayHello = function sayHello() {
//   console.log(`Hi frends my name is ${this.name} ${this.family} ${this.age}`);
// }

// const person1 = new Personal('Alex', 'Denchin', 26);
// const person2 = new Personal('Peter', 'Yn', 29);

// person1.sayHello();
// person2.sayHello();


//* static - самому классу относится
// ? use static

// function Personal(name, family, age) {
//   this.name = name,
//     this.family = family,
//     this.age = age,

//     Personal.count += 1;
// }
// Personal.count = 0;

// Personal.prototype.sayHello = function sayHello() {
//   console.log(`Hi frends my name is ${this.name} ${this.family} ${this.age}`);
// }

// const person1 = new Personal('Alex', 'Denchin', 26);
// const person2 = new Personal('Peter', 'Yn', 29); 
// person1.sayHello();
// person2.sayHello();
// console.log(Personal.count);




// ? use es6 Class

/**
 *
 *
 * @class Person
 */
class Person {
    constructor(name, family, age) {
        this.name = name,
            this.family = family,
            this.age = age
    }
    sayHello() {
        console.log(`Hi frends my name is ${this.name} ${this.family} ${this.age}`);
    }
}

const person1 = new Person('Allina', 'Dunkina', 22);
person1.sayHello();


// ? use Class extends

// class Animal {
//   constructor(name) {
//     this.name = name
//     this.sound = ''
//   }

//   voice() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name)
//     this.sound = 'Gav'
//   }
// }
// class Cat extends Animal{
//   constructor(name){
//     super(name)
//     this.sound = 'Miyi'
//   }
// }

// const dog = new Dog('bobik');
// const cat = new Cat('Barsik');

// dog.voice();
// cat.voice();

console.log('asdf');

//!  codewars js tasks
//* вернуть числа которые возвращает положительные из отрицательных
invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5];


function invert(array) {
    // new
    return array.map(a => !a ? a : a * -1);
    // long
    //     for (let i = 0; i < array.length; i++) {
    //         if (!array[i]) continue;
    //         array[i] = array[i] * -1;
    //     }
    //     return array;
}