// TODO: Petrech 02/ 13
//* while
//? TASK 1
//!

// Функциональное программирование

let money, time;

function start() {
  money = +prompt('Your budjet on month', '');
  time = +prompt('enter to date in format Y-M-D', '');
  while (isNaN(money) || money === '' || money == null) {
    money = +prompt('Your budjet on month', '');
  }
}

start();

let appData = {
  budjet: money,
  timDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце',
          ''),
          b = prompt('Во сколько обойдется?', '');

      if ((typeof (a)) != null && (typeof (b)) != null && a !== '' && b !==
          '' && a.length < 50) {
        console.log('верно');

        appData.expenses[a] = b;
      } else {
        i -= 1;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log('minimum lvl');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
      console.log('Middle lvl');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Hight lvl');
    } else {
      console.log('Error in Questions');
    }
  },
  checkSaving: function() {
    if (appData.saving === true) {
      let save = +prompt('Какова сумма накопления', ''),
          percent = +prompt('Под какой процент?', '');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 3; i++) {
      appData.optionalExpenses[i] = prompt('Stats neobezatelns rashodov', '');
    }
  },
  chooseIncome: function() {
    let items = prompt('What принесет дополнительный доход?', '');
    appData.incom = items.split(', ');
    appData.income.push(prompt('Perhapse can i help?'));
    appData.income.sort();
  },
};

//* do while
let num = [1, 23, 4, 54, 5, 345, 6, 24, 5, 23, 3];
do {
  console.log(num);
  num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}

// * function
let calc = (a, b) => a + b;
console.log(calc(3, 4));
console.log(calc(8, 4));

function retVar() {
  return 50;
}

let anotherNum = retVar();
console.log(anotherNum);

let twelve = '12.3';
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

function learnJS(lang, callback) {
  console.log('I`m earn ' + lang);
  callback();
}

function done() {
  console.log('I am coming 3th lesson');
}

learnJS('JS', done);

// *remove objects
// delete options.bool;
let options = [12, 3, 12, 123, 4, 123, 4, 123, 4, 2, 2];
for (let key in options) {
  console.log('Property ' + key + options[key]);
}
console.log(Object.keys(options).length);

let arr = [1, 23, 4, 5, 6];
arr.pop();
arr.push('5');
arr.shift();
arr.unshift('2');

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
  console.log(i + ': ' + item + ' (massiv: ' + mass + ')');
});

console.log(arr);

let mass = [1, 23, 4, 5, 6];
for (let key of mass) {
  console.log(key);
}

let ans = prompt('', ''),
    arrs = [];

// arrs = arrs.split(',');
console.log(ans, arrs);

//? oop


