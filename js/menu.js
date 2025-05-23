
const menu = document.getElementById('menu');
const settingWindow = document.querySelector('.window');
const statsButton = document.getElementById('statButton');
const stat = document.getElementById('stat');
const statsContainer = document.getElementById('statContainer');
const settingContainer = document.getElementById('settingContainer');
const minigameButton = document.getElementById('minigameButton');
const settingButton = document.getElementById('settingButton');
const closeButton = document.getElementById('closeButton');
const title = document.getElementById('menuTitle');
const titleH1 = document.getElementById('menuH1');

let currentScreen = 'Menu';


menu.addEventListener('click', () => {
    statsButton.classList.remove('hide');
    minigameButton.classList.remove('hide');
    settingButton.classList.remove('hide');
    settingWindow.classList.remove('hide');
    settingContainer.classList.add('hide');
    title.classList.remove('hide');
    closeButton.classList.remove('hide');
    titleH1.classList.remove('hide');
    titleH1.textContent = 'Menu';
    menu.classList.add('hide');
});

statsButton.addEventListener('click', () => {
    statsButton.classList.add('hide');
    minigameButton.classList.add('hide');
    settingButton.classList.add('hide');
    titleH1.textContent = 'Stats';
    stat.classList.remove('hide');
    statsContainer.classList.remove('hide');
    closeButton.textContent = 'Back';
    currentScreen = 'Stats';
});

settingButton.addEventListener('click', () => {
    statsButton.classList.add('hide');
    minigameButton.classList.add('hide');
    settingButton.classList.add('hide');
    titleH1.textContent = 'Settings';
    settingContainer.classList.remove('hide');
    closeButton.textContent = 'Back';
    currentScreen = 'Settings';
});


function updateCloseButtonListener() {
    closeButton.addEventListener('click', () => {
        if (currentScreen === 'Menu') {
            closeButton.textContent = 'Close';
            titleH1.textContent = 'Menu';
            statsButton.classList.add('hide');
            minigameButton.classList.add('hide');
            settingButton.classList.add('hide');
            title.classList.add('hide');
            closeButton.classList.add('hide');
            settingWindow.classList.add('hide');
            settingContainer.classList.add('hide');
            titleH1.classList.add('hide');
            stat.classList.add('hide');
            menu.classList.remove('hide');
            statsContainer.classList.add('hide');
            currentScreen = 'Menu';
        } else if (currentScreen === 'Stats') {
            statsButton.classList.remove('hide');
            minigameButton.classList.remove('hide');
            settingButton.classList.remove('hide');
            title.classList.remove('hide');
            closeButton.classList.remove('hide');
            settingWindow.classList.remove('hide');
            titleH1.classList.remove('hide');
            stat.classList.add('hide');
            settingContainer.classList.add('hide');
            statsContainer.classList.add('hide');
            titleH1.textContent = 'Menu';
            closeButton.textContent = 'Close';
            currentScreen = 'Menu';
        } else if (currentScreen === 'Settings') {
            statsButton.classList.remove('hide');
            minigameButton.classList.remove('hide');
            settingButton.classList.remove('hide');
            title.classList.remove('hide');
            closeButton.classList.remove('hide');
            settingWindow.classList.remove('hide');
            settingContainer.classList.add('hide');
            titleH1.classList.remove('hide');
            stat.classList.add('hide');
            statsContainer.classList.add('hide');
            titleH1.textContent = 'Menu';
            closeButton.textContent = 'Close';
            currentScreen = 'Menu';
        }
    });
}

let websiteTitle = localStorage.getItem('websiteTitle');
if (!websiteTitle) {
    localStorage.setItem('websiteTitle', 'Clicker Game');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('page-title').textContent = websiteTitle;
})


document.getElementById('titleButton').addEventListener('click', () => {
    const newTitle = document.getElementById('websiteTitleValue').value;
    localStorage.setItem('websiteTitle', newTitle);
    websiteTitle = newTitle;
    document.getElementById('page-title').textContent = websiteTitle;
})

updateCloseButtonListener();