import { LoginDialogue } from './loginDialogue.js';
import { getGlobal, setGlobal } from '../globals.js';
import initGame from '../game/initGame.js';

export function TitlePage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ""; // Clear content div 
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


}
