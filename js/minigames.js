const minigameMenuButton = document.getElementById('minigameMenuButton');
const minigameMenuButtonSVG = document.getElementById('minigameMenuButtonSVG');
const minigameMenu = document.getElementById('minigameMenu');

let open = localStorage.getItem('open');

if (!open) {
    localStorage.setItem('open', 'false');
};


minigameMenuButton.addEventListener('click', () => {
    open = localStorage.getItem('open');
    if (open === 'true') {
        minigameMenu.classList.add('hideAnimation');
        minigameMenuButton.classList.add('menuHideAnimation');
        localStorage.setItem('open', 'false');
    } else if (open === 'false') {
        minigameMenu.classList.remove('hide');
        minigameMenu.classList.add('openAnimation');
        minigameMenuButton.classList.add('menuOpenAnimation');
        localStorage.setItem('open', 'true');
    } else {
        console.log('Error');
    }
});





document.addEventListener('DOMContentLoaded', () => {
    open = localStorage.getItem('open');
    if (open === 'true') {
        minigameMenu.classList.remove('hide');
        minigameMenuButton.classList.add('openPosition');
    } else if (open === 'false') {
        minigameMenu.classList.add('hide');
        minigameMenuButton.classList.remove('openPosition');
    };
});



