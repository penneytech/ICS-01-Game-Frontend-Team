import { getGlobal } from '../globals.js';
import { LoginDialogue } from './loginDialogue.js';

const contentDiv = document.getElementById('content');
const playButton = document.createElement('button');

playButton.textContent = 'PLAY';
playButton.id = 'play-button';

playButton.onclick = function() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    LoginDialogue();
};

contentDiv.appendChild(playButton);

// Create a DIV for the leaderboard table

let leadboarddiv = document.createElement('div');
leadboarddiv.id = "leadboarddiv";

contentDiv.appendChild(leadboarddiv);


