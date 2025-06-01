const bet = document.getElementById('betButton');
const heads = document.getElementById('heads');
const tails = document.getElementById('tails');
const betAmount = document.getElementById('betAmount');
const insufficientFunds = document.getElementById('insufficientFunds');

let playerSelected;
let dealer;
let odds;
let wins = 0;
let losses = 0;

let moneyLost = 0;
let moneyGambled = 0;

let secret = 0;

heads.classList.remove('minigameSelected');
tails.classList.remove('minigameSelected');


heads.addEventListener('click', () => {
    heads.classList.add('minigameSelected');
    tails.classList.remove('minigameSelected');
    playerSelected = 'heads';
    dealer = 'tails';
});

tails.addEventListener('click', () => {
    tails.classList.add('minigameSelected');
    heads.classList.remove('minigameSelected');
    playerSelected = 'tails';
    dealer = 'heads';
});

bet.addEventListener('click', () => {
    insufficientFunds.textContent = 'Insufficient Funds';
    insufficientFunds.classList.remove('win');
    insufficientFunds.classList.add('hide');

    if (money >= parseFloat(betAmount.value) && playerSelected) {

        if (wins - losses <= 5 && secret < 3) {
            odds = 0.475
        } else if (wins - losses >= 6 && secret < 3) {
            odds = 0.6
        } else if (wins - losses > 11 && secret < 3) {
            odds = 0.75
        } else if (secret > 3) {
            odds = 0.7
        }

        if (Math.random() > odds) {
            money += parseFloat(betAmount.value * 0.945);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds.textContent = String(`Its ${playerSelected}! You win $${parseFloat(betAmount.value * 0.945).toFixed(2)}`);
            insufficientFunds.classList.add('win');
            insufficientFunds.classList.remove('hide');

            wins += 1;

            moneyLost += Number(betAmount.value * 0.945);

        } else {
            money -= parseFloat(betAmount.value);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds.textContent = String(`Its ${dealer}! You lost $${parseFloat(betAmount.value)}`);
            insufficientFunds.classList.remove('hide');

            losses += 1;

            moneyLost -= Number(betAmount.value);
        }

        moneyGambled += Number(betAmount.value);

    } else if (money < parseFloat(betAmount.value)) {

        insufficientFunds.classList.remove('hide');

    } else if (!playerSelected) {
        insufficientFunds.textContent = 'Select Heads or Tails'
        insufficientFunds.classList.remove('hide');
    }
});

document.getElementById('statButton').addEventListener('click', () => {
    document.getElementById('gambled').textContent = Number(moneyGambled);
    document.getElementById('madeGambling').textContent = Number(moneyLost.toFixed(2));
});



document.getElementById('minigameButton').addEventListener('click', () => {
    secret =+ 1;
});