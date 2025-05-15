const minigameMenuButton = document.getElementById('minigameMenuButton');
const minigameMenuButtonSVG = document.getElementById('minigameMenuButtonSVG');
const minigameMenu = document.getElementById('minigameMenu');


let open = localStorage.getItem('open') === 'true' ? 'true' : 'false';

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('menu').classList.remove('menuOpenAnimation', 'menuCloseAnimation', 'menuOpenPosition');
    
    if (open == null) {
        localStorage.setItem('open', 'false');
    }

    if (open === 'true') {

        minigameMenuButton.classList.add('openPosition');
        document.getElementById('menu').classList.add('menuOpenPosition');
        minigameMenu.classList.remove('closed');
        localStorage.setItem('open', 'true');

    } else if (open === 'false') {

        minigameMenuButton.classList.remove('openPosition');
        document.getElementById('menu').classList.remove('menuOpenPosition');
        minigameMenu.classList.add('closed');
        localStorage.setItem('open', 'false');

    };
});



minigameMenuButton.addEventListener('click', () => {

    open = localStorage.getItem('open');

    minigameMenu.classList.remove('openAnimation', 'closeAnimation', 'closed');
    minigameMenuButton.classList.remove('menuOpenAnimation', 'menuCloseAnimation', 'menuOpenPosition');
    document.getElementById('menu').classList.remove('menuOpenAnimation', 'menuCloseAnimation', 'menuOpenPosition', 'menuClosePosition');


    if (open === 'true') {
        document.getElementById('menu').classList.remove('menuOpenAnimation');
        minigameMenu.classList.add('closeAnimation');
        minigameMenuButton.classList.add('menuCloseAnimation');
        document.getElementById('menu').classList.add('menuCloseAnimation');

        document.getElementById('menu').addEventListener('animationend', () => {
            document.getElementById('menu').classList.remove('menuCloseAnimation');
            localStorage.setItem('open', 'false');
        }, { once: true});

    } else if (open === 'false') {
        document.getElementById('menu').classList.add('menuClosePosition');
        minigameMenu.classList.add('openAnimation');
        minigameMenuButton.classList.add('menuOpenAnimation');
        document.getElementById('menu').classList.add('menuOpenAnimation');


        document.getElementById('menu').addEventListener('animationend', () => {
            document.getElementById('menu').classList.remove('menuOpenAnimation');
            document.getElementById('menu').classList.add('menuOpenPosition');
            localStorage.setItem('open', 'true');
        }, { once: true});

    } else {
        console.log('Error');
    }

});


