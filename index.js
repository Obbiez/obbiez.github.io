const clickButton = document.getElementById('button');
const moneyDisplay = document.getElementById('moneyDisplay')
const strongFingerUpgrade = document.getElementById('strongFinger');
const autoClickerUpgrade = document.getElementById('autoClicker');
const statButton = document.getElementById('statButton');
const clicksPerSecond = document.getElementById('clicksPerSecond');
const menuScreen = document.getElementById('menuTitle');


let click = 1;
let totalClick = 0;
let money = 0;
let totalMoney = 0;
let buyAmount = 1;
let autoClicker = 0;
let totalMoneySpent = 0;
let playTime = 0;

let totalUpgrade = {
    upgrade1 : 1,
    upgrade2 : 2,
    upgrade3 : 3,
    upgrade4 : 4,
    upgrade5 : 5,
};

let displayPrice = {
    1 : document.getElementById('price1'),
    2 : document.getElementById('price2')
};

let price = {
    1 : Math.round(buyAmount * (12 * Math.pow(1.3, totalUpgrade.upgrade1))),
    2 : Math.round(buyAmount * (67 * Math.pow(1.25, totalUpgrade.upgrade2))),
};

function enoughMoney($, price, upgrade) {
    if ($ <= price) {
        upgrade.classList.add('broke');
    } else {
        upgrade.classList.remove('broke');
    };
};

function playTimeUnit() {
    playTime = Math.round((Date.now() - playTimeStart) / 1000);
    if (playTime > 60) {
        document.getElementById('play-time-measurement').textContent = 'minutes';
        playTime = Math.round(((Date.now() - playTimeStart) / 60000))
    } else if (playTime > 3600) {
        document.getElementById('play-time-measurement').textContent = 'hours';
        playTime = Math.round(((Date.now() - playTimeStart) / 3600000))
    } else {
        document.getElementById('play-time-measurement').textContent = 'seconds';
        playTime = Math.round(((Date.now() - playTimeStart) / 1000))
    }
};

autoClickerUpgrade.addEventListener('click', () => {
    if (money >= price[2]) {
        totalUpgrade.upgrade2 = totalUpgrade.upgrade2 + 1;
        money = money - price[2];
        totalMoneySpent = totalMoneySpent + 12 * Math.pow(1.3, (totalUpgrade.upgrade2 - 1));
        autoClicker = autoClicker + 1;
        price[2] = Math.round(buyAmount * 107 * Math.pow(1.4, totalUpgrade.upgrade2))
        displayPrice[2].textContent = price[2];
        moneyDisplay.textContent = Number(money.toFixed(2));
        clicksPerSecond.textContent = autoClicker * 0.75;
        enoughMoney(money, price[2], autoClickerUpgrade);
        enoughMoney(money, price[1], strongFingerUpgrade);
    }
})

setInterval(() => {
    if (autoClicker > 0 && menuScreen.classList.contains('hide')) {
        money = money + (autoClicker * 0.75);
        totalMoney = totalMoney + (autoClicker * 0.75);
        moneyDisplay.textContent = Number(money.toFixed(2));
    }
}, 900)

strongFingerUpgrade.addEventListener('click', () => {
    if (money >= price[1]) {
        totalUpgrade.upgrade1 = totalUpgrade.upgrade1 + 1;
        money = money - price[1];
        click = click + 0.27;
        price[1] = Math.round(buyAmount * 12 * Math.pow(1.4, totalUpgrade.upgrade1))
        displayPrice[1].textContent = price[1];
        moneyDisplay.textContent = Number(money.toFixed(2));
        totalMoneySpent = totalMoneySpent + 12 * Math.pow(1.3, (totalUpgrade.upgrade1 - 1));
        enoughMoney(money, price[2], autoClickerUpgrade);
        enoughMoney(money, price[1], strongFingerUpgrade);
    }
});


clickButton.addEventListener('click', () => {
    totalClick += + 1;
    money += + click;
    totalMoney += + click;
    moneyDisplay.textContent = Number(money.toFixed(2));
    enoughMoney(money, price[1], strongFingerUpgrade);
    enoughMoney(money, price[2], autoClickerUpgrade);
});

document.addEventListener('DOMContentLoaded', () => {
    moneyDisplay.textContent = money;
    displayPrice[1].textContent = price[1];
    displayPrice[2].textContent = price[2];
    enoughMoney(money, price[1], strongFingerUpgrade);
    enoughMoney(money, price[2], autoClickerUpgrade);
    playTimeStart = Date.now();
});

statButton.addEventListener('click', () => {
    document.getElementById('total-clicks').textContent = totalClick;
    document.getElementById('total-money').textContent = Number(totalMoney.toFixed(2));
    document.getElementById('total-spent').textContent = Number(totalMoneySpent.toFixed(2));
    playTimeUnit();
    document.getElementById('play-time').textContent = Number(playTime);
});