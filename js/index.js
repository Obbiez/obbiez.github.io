const clickButton = document.getElementById('button');
const moneyDisplay = document.getElementById('moneyDisplay')
const strongFingerUpgrade = document.getElementById('strongFinger');
const autoClickerUpgrade = document.getElementById('autoClicker');
const robotArmUpgrade = document.getElementById('robotArm');
const statButton = document.getElementById('statButton');
const clicksPerSecond = document.getElementById('clicksPerSecond');
const menuScreen = document.getElementById('menuTitle');

let click = 1;
let totalClick = 0;
let money = 0;
let totalMoney = 0;
let buyAmount = 1;
let autoClicker = 0;
let robotArm = 0;
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
    2 : document.getElementById('price2'),
    3 : document.getElementById('price3'),
    4 : document.getElementById('price4'),
    5 : document.getElementById('price5'),
};

let price = {
    1 : Math.round(buyAmount * (12 * Math.pow(1.3, totalUpgrade.upgrade1))),
    2 : Math.round(buyAmount * (57 * Math.pow(1.25, totalUpgrade.upgrade2))),
    3 : Math.round(buyAmount * (191 * Math.pow(1.2, totalUpgrade.upgrade3))),
    4 : Math.round(buyAmount * (460 * Math.pow(1.15, totalUpgrade.upgrade4))),
    5 : Math.round(buyAmount * (1271 * Math.pow(1.1, totalUpgrade.upgrade5))),
};

function enoughMoney($, price, upgrade, u) {
    if ($ < price) {
        if (!upgrade.classList.contains('notDiscovered')) {
            upgrade.classList.add('broke');
            document.getElementById(u).classList.remove('upgradeHover');
        } else if (upgrade.classList.contains('notDiscovered')) {
            document.getElementById(u).classList.remove('upgradeHover');
        }
    } else {
        upgrade.classList.remove('broke');
        document.getElementById(u).classList.add('upgradeHover');
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

function discovery(clicks, moneyAmount, uText, uUpgrade, uTitle, bottomLine, price, div, notDiscoveredText) {
    if (totalClick >= clicks || money > moneyAmount) {
        document.getElementById(uText).classList.remove('hide');
        uUpgrade.classList.remove('broke');
        uUpgrade.classList.remove('notDiscovered');
        document.getElementById(uTitle).classList.remove('hide');
        document.getElementById(bottomLine).classList.remove('hide');
        document.getElementById(price).classList.remove('hide');
        document.getElementById(div).classList.remove('notDiscoveredDiv');
        document.getElementById(notDiscoveredText).classList.add('hide');
    }
}

clickButton.addEventListener('click', () => {
    totalClick += + 1;
    money += + click;
    totalMoney += + click;
    moneyDisplay.textContent = Number(money.toFixed(2));
    discovery(25, 50, 'autoClickerText', autoClickerUpgrade, 'u2Title', 'bL2', 'price2', 'u2div', 'autoClickerText');
    discovery(75, 300, 'robotArmText', robotArmUpgrade, 'u3Title', 'bL3', 'price3', 'u3div', 'robotArmText');
    enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
    enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
    enoughMoney(money, price[3], robotArmUpgrade, 'u3div');
});

document.addEventListener('DOMContentLoaded', () => {
    moneyDisplay.textContent = money;
    displayPrice[1].textContent = price[1];
    displayPrice[2].textContent = price[2];
    displayPrice[3].textContent = price[3];
    enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
    enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
    enoughMoney(money, price[3], robotArmUpgrade, 'u3div');
    playTimeStart = Date.now();
});

strongFingerUpgrade.addEventListener('click', () => {
    if (money >= price[1]) {
        totalMoneySpent = Math.round(totalMoneySpent + 12 * Math.pow(1.3, totalUpgrade.upgrade1));
        totalUpgrade.upgrade1 = totalUpgrade.upgrade1 + 1;
        money = money - price[1];
        click = click + (0.27 * Math.pow(1.02, totalUpgrade.upgrade1));
        price[1] = Math.round(buyAmount * 12 * Math.pow(1.3, totalUpgrade.upgrade1))
        displayPrice[1].textContent = price[1];
        moneyDisplay.textContent = Number(money.toFixed(2));
        enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
        enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
        enoughMoney(money, price[3], robotArmUpgrade, 'u3div');
    }
});

autoClickerUpgrade.addEventListener('click', () => {
    if (money >= price[2]) {
        totalMoneySpent = Math.round(totalMoneySpent + (57 * Math.pow(1.25, totalUpgrade.upgrade2)));
        totalUpgrade.upgrade2 = totalUpgrade.upgrade2 + 1;
        money = money - price[2];
        autoClicker = autoClicker + 1;
        price[2] = Math.round(buyAmount * 57 * Math.pow(1.25, totalUpgrade.upgrade2))
        displayPrice[2].textContent = price[2];
        moneyDisplay.textContent = Number(money.toFixed(2));
        clicksPerSecond.textContent = Number((robotArm * 3.5) + (autoClicker * 0.75)).toFixed(2);
        enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
        enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
        enoughMoney(money, price[3], robotArmUpgrade, 'u3div');
    }
})

robotArmUpgrade.addEventListener('click', () => {
    if (money >= price[3]) {
        totalMoneySpent = Math.round(totalMoneySpent + (191 * Math.pow(1.2, totalUpgrade.upgrade3)));
        totalUpgrade.upgrade3 = totalUpgrade.upgrade3 + 1;
        money = money - price[3];
        robotArm = robotArm + 1;
        price[3] = Math.round(buyAmount * 191 * Math.pow(1.2, totalUpgrade.upgrade3))
        displayPrice[3].textContent = price[3];
        moneyDisplay.textContent = Number(money.toFixed(2));
        clicksPerSecond.textContent = Number((robotArm * 3.5) + (autoClicker * 0.75)).toFixed(2);
        enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
        enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
        enoughMoney(money, price[3], robotArmUpgrade, 'u3div');
    }
})

setInterval(() => {
    if (autoClicker > 0 && menuScreen.classList.contains('hide')) {
        money = money + autoClicker * 0.75;
        totalMoney = totalMoney + autoClicker * 0.75;
        moneyDisplay.textContent = Number(money.toFixed(2));
    }
    if (robotArm > 0 && menuScreen.classList.contains('hide')) {
        money = money + robotArm * 3.5;
        totalMoney = totalMoney + robotArm * 3.5;
        moneyDisplay.textContent = Number(money.toFixed(2));
    }
    enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
    enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
    enoughMoney(money, price[3], robotArmUpgrade, 'u3div');
}, 900)

document.getElementById('betButton').addEventListener('click', () => {

    enoughMoney(money, price[1], strongFingerUpgrade, 'u1div');
    enoughMoney(money, price[2], autoClickerUpgrade, 'u2div');
    enoughMoney(money, price[3], robotArmUpgrade, 'u3div');

})


statButton.addEventListener('click', () => {
    document.getElementById('total-clicks').textContent = totalClick;
    document.getElementById('total-money').textContent = Number(totalMoney.toFixed(2));
    document.getElementById('total-spent').textContent = Number(totalMoneySpent.toFixed(2));
    playTimeUnit();
    document.getElementById('play-time').textContent = Number(playTime);
});