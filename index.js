const clickButton = document.getElementById('Click-Me');
const menuButton = document.getElementById('menu');
const upgradeMenu = document.getElementById('upgrades');
const title = document.getElementById('title');
const clickPerSecond = document.getElementById('idle-clicks');

const price1 = document.getElementById('price1');

const upgrade1 = document.getElementById('upgrade1');
const error1 = document.getElementById('error1')

const buy1 = document.getElementById('buy1');
const buy10 = document.getElementById('buy10');
const buy100 = document.getElementById('buy100');
const buyMax = document.getElementById('buyMax');

let totalUpgrade1 = 1;
let totalUpgrade2 = 1;

let price = {
    1 : 10 + (totalUpgrade1 * totalUpgrade1),
    2 : 100 + (totalUpgrade2 * totalUpgrade2)
}

upgrade1.addEventListener('click', () => {
    if (selected[1000]) {
        buyAmount = Math.floor(money / price[1]);
    }
    if (money - (price[1] * buyAmount) >= 0) {
        money = money - (price[1] * buyAmount);
        document.getElementById('money').textContent = Number(money.toFixed(2));
        totalUpgrade1 = totalUpgrade1 + buyAmount;
        price[1] = 10 + (totalUpgrade1 * totalUpgrade1);
        price1.textContent = price[1];
        click = click + (0.2 * buyAmount);
    } else {
        error1.textContent = 'Not enough money!';
    }
})




let buyAmount = 1;

let money = 0.00;
let click = 1;

let selected = {
    1 : false,
    10 : false,
    100 : false,
    1000 : false
};

let playedBefore = () => {
    if (!localStorage.getItem('playedBefore')) {
        localStorage.setItem('playedBefore', false)
    }
}



clickButton.addEventListener('click', () => {
    money = money + click;
    document.getElementById('money').textContent = Number(money.toFixed(2));
    if (!localStorage.getItem(playedBefore)) {
        localStorage.setItem('playedBefore', true);
        title.textContent = 'Idle Clicker';
    }
    if (selected[1000]) {
        if (Math.floor(money / price[1])) {
            buyAmount = Math.floor(money / price[1])
            price1.textContent = price[1] * buyAmount;
        } else {
            buyAmount = 1;
            price1.textContent = price[1] * buyAmount;
        }
    }
})


document.addEventListener('DOMContentLoaded', () => {
    buy1.classList.add('selected');
    selected[1] = true;
    buyAmount = 1
    if (localStorage.getItem('playedBefore')) {
        title.textContent = 'Idle Clicker';
    }
})

buy1.addEventListener('click', () => {
    if (!selected[1]) {
        buy1.classList.add('selected');
        buy10.classList.remove('selected');
        buy100.classList.remove('selected');
        buyMax.classList.remove('selected');
        selected[1] = true;
        selected[10] = false;
        selected[100] = false;
        selected[1000] = false;
        buyAmount = 1;
        price1.textContent = price[1] * buyAmount;
        console.log(buyAmount);
    }
})
buy10.addEventListener('click', () => {
    if (!selected[10]) {
        buy1.classList.remove('selected');
        buy10.classList.add('selected');
        buy100.classList.remove('selected');
        buyMax.classList.remove('selected');
        selected[1] = false;
        selected[10] = true;
        selected[100] = false;
        selected[1000] = false;
        buyAmount = 10;
        price1.textContent =  price[1] * buyAmount
        console.log(buyAmount);
    }
})
buy100.addEventListener('click', () => {
    if (!selected[100]) {
        buy1.classList.remove('selected');
        buy10.classList.remove('selected');
        buy100.classList.add('selected');
        buyMax.classList.remove('selected');
        selected[1] = false;
        selected[10] = false;
        selected[100] = true;
        selected[1000] = false;
        buyAmount = 100;
        price1.textContent =  price[1] * buyAmount
        console.log(buyAmount);
    }
})
buyMax.addEventListener('click', () => {
    if (!selected[1000]) {
        buy1.classList.remove('selected');
        buy10.classList.remove('selected');
        buy100.classList.remove('selected');
        buyMax.classList.add('selected');
        selected[1] = false;
        selected[10] = false;
        selected[100] = false;
        selected[1000] = true;
        if (Math.floor(money / price[1])) {
            buyAmount = Math.floor(money / price[1])
            price1.textContent = price[1] * buyAmount;
        } else {
            buyAmount = 1;
            price1.textContent = price[1] * buyAmount;
        }
        console.log(buyAmount);
    }
})






