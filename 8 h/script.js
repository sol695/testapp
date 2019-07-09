'use strict';

let a = 1, b = 3, c = 4;
let result = 'a' + a + b + c;
console.log(a, b, c, result);

// let as = document.write('hi');
let xi = 6;
if (xi % 2 === 0) {
  console.log(xi);
} else {
  console.log('error');
}

let x = 1;
while (x < 10) {
  console.log(x);
  x += 2;
}

//* functions
/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
function addNumber(a, b) {

  return a + b;
}

addNumber('Nom', 'Can');
//? scope
let ass = 4; // global
let myfunc = function(aa) {
  let a = 2 + aa; // local
  console.log(a);
  console.log(aa);
  console.log(ass);
  return a;
};

console.log(ass, a, ass, myfunc(3));

//? array
let cars = ['bmv', 'volvo', 'audi'];
cars.push('asda');
cars.unshift('asd');
let an = cars.map(function(name) {
  return name.length;
});

console.log(cars, an);

//? objcecs

// let Car = {
//   car_name:'tesla',
//   car_model:'model 3',
//   price:3299,
//   testAutoPilot:function () {
//     console.log('This car autopilot');
//   }
// };
// console.log(Car.car_name, Car.price);

function Cars(car_brand, car_model, price) {
  this.car_brand = car_brand;
  this.car_model = car_model;
  this.price = price;

  this.teslaUtopilot = function() {
    return 'tesla auotpilot';
  };
  console.info(
      'Car brand: ' + this.car_brand + ' car Model: ' + this.car_model +
      ' car Prices: ' + this.price + ' Autopilot: ' + this.teslaUtopilot());
}

let c1 = new Cars('Tesla', 'Model 3', 30000);
let str1 = '';
console.log(c1, str1);

// ? Dom manipulation
//* repclace h2 on click button

function buttonClick() {
  // console.log('button clicked');
  return document.getElementById(
      'heading2').innerHTML = 'Tesla Learning Company';
}

// buttonClick();
//* execut in console text
function fn1() {
  let str = document.getElementById('text1').value;
  console.log('value is ' + str);
}

//* dom

function changeStyling() {

  let para = document.getElementsByTagName('p');
  para[0].style.fontSize = '33';
  para[1].style.color = 'red';
  for (let i = 0; i < para.length; i++) {
    para[i].style.color = 'green';
  }
}

//? mouseover & mouseout events
function setNewColor() {
  let color = document.getElementsByClassName('colors_span');
  color[0].style.backgroundColor = 'green';
}

function setOldColor() {
  let color = document.getElementsByClassName('colors_span');
  color[0].style.backgroundColor = 'red';
}

//? regEx

//validate form

function validate() {
  let username = document.getElementById('uname').value;
  let regx = /[a-x]00/;
  // let regx = /E00/;
  // * username начинается с regx

  if (regx.test(username)) {
    console.log('Valid username');
    document.getElementById('lbluser').innerHTML = 'Valid';
    document.getElementById('lbluser').style.color = 'green';
    document.getElementById('lbluser').style.visibility = 'visible';
  } else {
    console.log('Invalid username');
    document.getElementById('lbluser').style.visibility = 'visible';
  }
}

//? add result in main
// function addValues() {
//   let a = document.getElementById('t1').value;
//   let b = document.getElementById('t2').value;
//   document.getElementById('op').innerHTML = 'Result = ' + (a + b);
//   return a + b;
// }
//
// console.log(addValues());

//? timing function
let ID = 0;
let seconds = 0;

function printMsg() {
  document.getElementById('op').innerHTML = seconds + ' seconds';
  seconds++;
}

function start() {
  ID = window.setInterval(printMsg, 1000);
}

function stop() {
  window.clearInterval(ID);
}

// opacity hidden and show
let opacity = 0;
let intervalID = 0;

function fadeOut() {
  intervalID = setInterval(hide, 20);
}

function fadeIn() {
  intervalID = setInterval(show, 20);
}

function hide() {
  let img = document.getElementById('img1');
  opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
  if (opacity > 0) {
    opacity -= 0.1;
    img.style.opacity = opacity;
    console.log(opacity);
  } else {
    clearInterval(intervalID);
  }
}

function show() {
  let img = document.getElementById('img1');
  opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
  if (opacity < 1) {
    opacity += 0.1;
    img.style.opacity = opacity;
    console.log(opacity);
  } else {
    clearInterval(intervalID);
  }
}
