import initGame from '../game/initGame.js';
import { getGlobal, setGlobal } from '../globals.js';

export function TitlePage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ""; // Clear content div 
  const playButton = document.createElement('button');

  // Create the play button
  playButton.textContent = 'Play';
  playButton.id = 'play-button';
  contentDiv.appendChild(playButton);

  // Make play button display the game when clicked by a user
  playButton.onclick = function () {
    customization.innerHTML = "";
    initGame();
  };

  let userstatsdiv = document.createElement('userstatsdiv');
  userstatsdiv.id = 'userstatsdiv';
  contentDiv.appendChild(userstatsdiv);

  // Request userstats 
  let socket = getGlobal('socket');
  let player = getGlobal('player')

   socket.emit('userstats', player.username);
}
