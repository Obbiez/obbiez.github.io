const clickButton = document.getElementById('Click-Me');
const menuButton = document.getElementById('menu');
const upgradeMenu = document.getElementById('upgrades');
const title = document.getElementById('title');
const clickPerSecond = document.getElementById('idle-clicks');

const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');

const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');

const buy1 = document.getElementById('buy1');
const buy10 = document.getElementById('buy10');
const buy100 = document.getElementById('buy100');
const buyMax = document.getElementById('buyMax');

let totalUpgrade1 = 1;
let totalUpgrade2 = 7;

let tempTotalUpgrade1 = totalUpgrade1;
let tempTotalUpgrade2 = totalUpgrade2;

let price = {
    1 : 10 + Math.pow(totalUpgrade1, 2),
    2 : 100 + Math.pow(totalUpgrade2, 2)
}
let displayPrice = {
    1 : 10 + Math.pow(totalUpgrade1, 2),
    2 : 100 + Math.pow(totalUpgrade2, 2)
}

let buyAmount = 1;
let money = 0.00;
let click = 1;

let tempBuyAmount = buyAmount;

let totalClicks = 0;
let totalMoneyMade = 0;

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



function buyAmountPrice() {
    tempTotalUpgrade1 = totalUpgrade1;
    tempTotalUpgrade2 = totalUpgrade2;
    displayPrice[1] = price[1]
    displayPrice[2] = price[2]
    for (let i = 1; i < buyAmount; i++) {
        displayPrice[1] += 10 + Math.pow((totalUpgrade1 + i), 2);
        displayPrice[2] += 100 + Math.pow((totalUpgrade2 + i), 2);
    };
    price1.textContent =  '$' + displayPrice[1];
    price2.textContent =  '$' + displayPrice[2];
}
/* function buyAmountMaxFunction(upgrade, priceVar, tempUpgrade, upgradeVar, basePrice) {
    tempUpgrade = upgradeVar;
    let tempPrice = basePrice + Math.pow((tempUpgrade + 1), 2);
    if (money >= tempPrice) {
        buyAmount = Math.floor(money / price[upgrade])
        buyAmountPrice()
        afford()
    } else {
        buyAmount = 1;
        priceVar.textContent = '$' + (price[upgrade] * buyAmount);
        afford()
    }
} */
function afford() {
    if (money - (price[1] * buyAmount) < 0) {
        upgrade1.classList.add('broke');
    } else {
        upgrade1.classList.remove('broke');
    }
    if (money - (price[2] * buyAmount) < 0) {
        upgrade2.classList.add('broke');
    } else {
        upgrade2.classList.remove('broke');
    }
}
/* function buyMaxUpgrade(priceVar, upgrade) {
    if (selected[1000]) {
        if (Math.floor(money / price[upgrade])) {
            buyAmount = Math.floor(money / price[upgrade])
            buyAmountPrice()
        } else {
            buyAmount = 1;
            priceVar.textContent = '$' + (price[upgrade] * buyAmount);
        }
    }
} */



upgrade1.addEventListener('click', () => {
    if (selected[1000]) {
        buyAmount = Math.floor(money / price[1]);
    };
    if (money - (price[1] * buyAmount) >= 0) {
        money = money - (price[1] * buyAmount);
        document.getElementById('money').textContent = Number(money.toFixed(2));
        totalUpgrade1 = totalUpgrade1 + buyAmount;
        price[1] = 10 + (totalUpgrade1 * totalUpgrade1);
        price1.textContent = '$' + price[1];
        click = click + (0.2 * buyAmount);
        afford()
    };
})



clickButton.addEventListener('click', () => {
    totalMoneyMade = totalMoneyMade + click;
    money += + click;
    totalClicks += + 1;
    document.getElementById('money').textContent = Number(money.toFixed(2));
    if (!localStorage.getItem('playedBefore')) {
        localStorage.setItem('playedBefore', true);
        title.textContent = 'Idle Clicker';
    }
   /* buyMaxUpgrade(price1, 1)
    buyMaxUpgrade(price2, 2)*/
    afford()
})


document.addEventListener('DOMContentLoaded', () => {
    buy1.classList.add('selected');
    selected[1] = true;
    buyAmount = 1
    price1.textContent = '$' + displayPrice[1];
    price2.textContent = '$' + displayPrice[2];
    if (localStorage.getItem('playedBefore')) {
        title.textContent = 'Idle Clicker';
    }
    afford()
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
        afford()
        price1.textContent = '$' + (price[1] * buyAmount);
        price2.textContent =  '$' + (price[2] * buyAmount);
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
        console.log(buyAmount);
        buyAmountPrice()
        afford()
        price1.textContent =  '$' + displayPrice[1] 
        price2.textContent =  '$' + displayPrice[2] 
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
        buyAmountPrice()
        afford()
        console.log(buyAmount);
    }
})

/* buyMax.addEventListener('click', () => {
    if (!selected[1000]) {
        buy1.classList.remove('selected');
        buy10.classList.remove('selected');
        buy100.classList.remove('selected');
        buyMax.classList.add('selected');
        selected[1] = false;
        selected[10] = false;
        selected[100] = false;
        selected[1000] = true;
        buyAmountMaxFunction(price1, 1, tempTotalUpgrade1, totalUpgrade1, 10)
        buyAmountMaxFunction(price2, 2, tempTotalUpgrade2, totalUpgrade2, 100)
        console.log(buyAmount);
        afford()
    }
}) */






