const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const betAmount2 = document.getElementById('betAmount2');
const insufficientFunds2 = document.getElementById('insufficientFunds2');
const bet2 = document.getElementById('betButton2');

let selected;
let odds2;

blue.addEventListener('click', () => {
    blue.classList.add('minigameSelected');
    red.classList.remove('minigameSelected');
    green.classList.remove('minigameSelected');
    selected = 'blue';
})
red.addEventListener('click', () => {
    red.classList.add('minigameSelected');
    blue.classList.remove('minigameSelected');
    green.classList.remove('minigameSelected');
    selected = 'red';
})
green.addEventListener('click', () => {
    green.classList.add('minigameSelected');
    red.classList.remove('minigameSelected');
    blue.classList.remove('minigameSelected');
    selected = 'green';
})


bet2.addEventListener('click', () => {
    if (selected === 'blue') {
        odds2 = 0.4;
    } else if (selected === 'red') {
        odds2 = 0.4;
    } else if (selected === 'green') {
        odds2 = 0.2;
    } else {
        odds2 = 'none';
    }


    if (betAmount2.value < money && selected !== 'none') {
        if (Math.random() < odds2) {
            money += parseFloat(betAmount2.value * 0.75);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds2.textContent = String(`You win $${parseFloat(betAmount2.value * 0.75)}`);
            insufficientFunds2.classList.add('win');
            insufficientFunds2.classList.remove('hide');

            wins += 1;

            moneyLost += Number(betAmount2.value * 0.75);

        } else if (selected === 'none') {
            insufficientFunds2.textContent = 'Please select a colour';
            insufficientFunds2.classList.remove('win');
            insufficientFunds2.classList.remove('hide');

        } else {
            money -= parseFloat(betAmount2.value);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds2.textContent = String(`You lost $${parseFloat(betAmount2.value)}`);
            insufficientFunds2.classList.remove('win');
            insufficientFunds2.classList.remove('hide');

            losses += 1;

            moneyGambled += Number(betAmount2.value);
        }



        insufficientFunds2.classList.add('hide');
    }
})