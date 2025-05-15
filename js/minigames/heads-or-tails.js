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

        if (wins - losses <= 4) {
            odds = 0.55
        } else if (wins - losses >= 6) {
            odds = 0.65
        } else if (wins - losses > 11) {
            odds = 0.75
        };

        if (Math.random() > odds) {
            money += parseFloat(betAmount.value) * 1.33;
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds.textContent = String(`Its ${playerSelected}! You win $${parseFloat(betAmount.value) * 1.33}`);
            insufficientFunds.classList.add('win');
            insufficientFunds.classList.remove('hide');

            wins += 1;

        } else {
            money -= parseFloat(betAmount.value);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds.textContent = String(`Its ${dealer}! You lost $${parseFloat(betAmount.value)}`);
            insufficientFunds.classList.remove('hide');

            losses += 1;
        }

    } else if (money < parseFloat(betAmount.value)) {

        insufficientFunds.classList.remove('hide');

    } else if (!playerSelected) {
        insufficientFunds.textContent = 'Select Heads or Tails'
        insufficientFunds.classList.remove('hide');
    }
});


