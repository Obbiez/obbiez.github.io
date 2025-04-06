const menu = document.getElementById('menu');
const settingWindow = document.querySelector('.window');
const statsButton = document.getElementById('statButton');
const stats = document.getElementById('stat');
const minigameButton = document.getElementById('minigameButton');
const settingButton = document.getElementById('settingButton');
const closeButton = document.getElementById('closeButton')
const title = document.getElementById('menuTitle');
const titleH1 = document.getElementById('menuH1');


menu.addEventListener('click', () => {
    statsButton.classList.remove('hide');
    minigameButton.classList.remove('hide');
    settingButton.classList.remove('hide');
    settingWindow.classList.remove('hide');
    title.classList.remove('hide');
    closeButton.classList.remove('hide');
    titleH1.classList.remove('hide');
    titleH1.textContent = 'Menu';
    menu.classList.add('hide');

});

closeButton.addEventListener('click', () => {
    statsButton.classList.add('hide');
    minigameButton.classList.add('hide');
    settingButton.classList.add('hide');
    title.classList.add('hide');
    closeButton.classList.add('hide');
    settingWindow.classList.add('hide');
    titleH1.classList.add('hide');
    stats.classList.add('hide');
    menu.classList.remove('hide');
});

statsButton.addEventListener('click', () => {
    statsButton.classList.add('hide');
    minigameButton.classList.add('hide');
    settingButton.classList.add('hide');
    titleH1.textContent = 'Stats';
    stats.classList.remove('hide');
});
