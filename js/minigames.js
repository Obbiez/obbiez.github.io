const minigameMenuButton = document.getElementById('minigameMenuButton');
const minigameMenuButtonSVG = document.getElementById('minigameMenuButtonSVG');
const minigameMenu = document.getElementById('minigameMenu');


let open = localStorage.getItem('open');

document.addEventListener('DOMContentLoaded', () => {

    open = localStorage.getItem('open');

    if (open === 'true') {

        minigameMenuButton.classList.add('openPosition');
        document.getElementById('menu').classList.add('menuOpenPosition');
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

    minigameMenu.classList.remove('openAnimation', 'closeAnimation', 'closed', 'openPosition');
    minigameMenuButton.classList.remove('menuOpenAnimation', 'menuCloseAnimation', 'menuOpenPosition');
    document.getElementById('menu').classList.remove('menuOpenAnimation', 'menuCloseAnimation', 'menuOpenPosition');


    if (open === 'true') {

        minigameMenu.classList.add('closeAnimation');
        minigameMenuButton.classList.add('menuCloseAnimation');
        document.getElementById('menu').classList.add('menuCloseAnimation');

        localStorage.setItem('open', 'false');
    } else if (open === 'false') {

        minigameMenu.classList.add('openAnimation');
        minigameMenuButton.classList.add('menuOpenAnimation');
        document.getElementById('menu').classList.add('menuOpenAnimation');

        localStorage.setItem('open', 'true');
    } else {
        console.log('Error');
    }
});


