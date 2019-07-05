// TODO: Petrech 02/ 09
//* while

let money, time;
money = +prompt('Your budjet on month', '');
time = +prompt('enter to date in format Y-M-D', '');
let appData = {
    budjet: money,
    timDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}
for (let i = 0; i < 2; i++) {
    let one = prompt("Введите обязательную статью расходов в этом месяце", ""),
        two = prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');

        appData.expenses[one] = two;
    } else {

    }
}

appData.moneyPerDay = appData.budjet / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('minimum lvl');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
    console.log('Middle lvl');
} else if (appData.moneyPerDay > 2000) {
    console.log('Hight lvl');
} else {
    console.log('Error in Questions');
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}