const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const betAmount2 = document.getElementById('betAmount2');
const insufficientFunds2 = document.getElementById('insufficientFunds2');
const bet2 = document.getElementById('betButton2');
const spinner = document.getElementById('spinnerImg');

let selected = 'none';
let odds2;
let oddsMoney;

blue.addEventListener('click', () => {
    blue.classList.add('minigameSelected');
    red.classList.remove('minigameSelected');
    green.classList.remove('minigameSelected');
    selected = 'blue';
    odds2 = 0.4;
    oddsMoney = 1.25;
})
red.addEventListener('click', () => {
    red.classList.add('minigameSelected');
    blue.classList.remove('minigameSelected');
    green.classList.remove('minigameSelected');
    selected = 'red';
    odds2 = 0.4;
    oddsMoney = 1.25;
})
green.addEventListener('click', () => {
    green.classList.add('minigameSelected');
    red.classList.remove('minigameSelected');
    blue.classList.remove('minigameSelected');
    selected = 'green';
    odds2 = 0.2;
    oddsMoney = 1.8;
})


bet2.addEventListener('click', () => {
    if (parseFloat(betAmount2.value) <= money && selected !== 'none' && spinner.classList.contains('spin') === false) {
        if (Math.random() < odds2) {
            money += parseFloat(betAmount2.value * 0.75);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds2.classList.remove('hide');
            insufficientFunds2.textContent = String(`You win $${parseFloat(betAmount2.value * oddsMoney)}`);
            insufficientFunds2.classList.add('win');


            wins += 1;

            moneyLost += Number(betAmount2.value * 0.75);

            if (selected === 'blue') {
                const randomNumber = Math.random();

                spinner.classList.add('spin');

                spinner.addEventListener('animationend', () => {
                    spinner.classList.remove('spin');
                    insufficientFunds2.classList.add('hide');
                }, { once: true });

                if (randomNumber < 0.2) {
                    spinner.classList.add('blue1');
                    spinner.addEventListener('animationend', () => {
                        spinner.classList.remove('blue1');
                    }, { once: true });
                } else if (randomNumber < 0.4 && randomNumber > 0.2) {
                    spinner.classList.add('blue2');
                    spinner.addEventListener('animationend', () => {
                        spinner.classList.remove('blue2');
                    }, { once: true });
                } else if (randomNumber < 0.6 && randomNumber > 0.4) {
                    spinner.classList.add('blue3');
                    spinner.addEventListener('animationend', () => {
                        spinner.classList.remove('blue3');
                    }, { once: true });
                } else if (randomNumber < 0.8 && randomNumber > 0.6) {
                    spinner.classList.add('blue4');
                    spinner.addEventListener('animationend', () => {
                        spinner.classList.remove('blue4');
                    }, { once: true });
                } else if (randomNumber < 1 && randomNumber > 0.8) {
                    spinner.classList.add('blue5');
                    spinner.addEventListener('animationend', () => {
                        spinner.classList.remove('blue5');
                    }, { once: true });
                }
                
            }
        } else {
            money -= parseFloat(betAmount2.value);
            moneyDisplay.textContent = Number(money.toFixed(2));

            insufficientFunds2.classList.remove('hide');
            insufficientFunds2.textContent = String(`You lost $${parseFloat(betAmount2.value)}`);
            insufficientFunds2.classList.remove('win');

            losses += 1;

            moneyGambled += Number(betAmount2.value);
        }

    } else if (selected === 'none') {
        insufficientFunds2.textContent = 'Please select a colour';
        insufficientFunds2.classList.remove('win');
        insufficientFunds2.classList.remove('hide');
    } else if (parseFloat(betAmount2.value) > money) {
        insufficientFunds2.textContent = 'Insufficient Funds';
        insufficientFunds2.classList.remove('win');
        insufficientFunds2.classList.remove('hide');
    } else if (spinner.classList.contains('spin')) {
        insufficientFunds2.textContent = 'Please wait for the spinner to finish';
        insufficientFunds2.classList.remove('win');
        insufficientFunds2.classList.remove('hide');
    }

})