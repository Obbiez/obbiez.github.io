const clickButton = document.getElementById('button');
const moneyDisplay = document.getElementById('moneyDisplay')
const strongFingerUpgrade = document.getElementById('strongFinger');
const statButton = document.getElementById('statButton');



let click = 1;
let totalClick = 0;
let money = 0;
let totalMoney = 0;
let buyAmount = 1;

let totalUpgrade = {
    upgrade1 : 1,
    upgrade2 : 3,
    upgrade3 : 5,
    upgrade4 : 7,
    upgrade5 : 9,
};

let displayPrice = {
    1 : document.getElementById('price1'),
    2 : document.getElementById('price2')
};

let price = {
    1 : Math.round(buyAmount * 12 * Math.pow(1.4, totalUpgrade.upgrade1)),
    2 : Math.round(buyAmount * 107 * Math.pow(totalUpgrade.upgrade2, 1.2))
};

strongFingerUpgrade.addEventListener('click', () => {
    if (money >= price[1]) {
        totalUpgrade.upgrade1 = totalUpgrade.upgrade1 + 1;
        money = money - price[1];
        click = click + 0.35;
        price[1] = Math.round(buyAmount * 12 * Math.pow(1.4, totalUpgrade.upgrade1))
        displayPrice[1].textContent = price[1];
        moneyDisplay.textContent = Number(money.toFixed(2));
    }
});

clickButton.addEventListener('click', () => {
    totalClick += + 1;
    money += + click;
    totalMoney += + click;
    moneyDisplay.textContent = Number(money.toFixed(2));
});

document.addEventListener('DOMContentLoaded', () => {
    moneyDisplay.textContent = money;
    displayPrice[1].textContent = price[1];
});

statButton.addEventListener('click', () => {
    document.getElementById('total-clicks').textContent = totalClick;
    document.getElementById('total-money').textContent = Number(totalMoney.toFixed(2));
});