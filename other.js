const menu = document.getElementById('menu');
const settingWindow = document.querySelector('.window');
const statButton = document.getElementById('statButton');
const minigameButton = document.getElementById('minigameButton');
const settingButton = document.getElementById('settingButton');

menu.addEventListener('click', () => {
    settingWindow.classList.remove('hide');
    menu.classList.add('hide');
});