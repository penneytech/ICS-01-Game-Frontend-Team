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

 // socket.emit('userstats', player.username);
 socket.emit('userstats', "user1");

  //Create the parent div for customization
  const customize = document.createElement('div');
  customize.id="customize";
  contentDiv.appendChild(customize);

  // Arrow 1 div
  const arrow1 = document.createElement('div');
  arrow1.style.backgroundImage = 'url(images/leftarrow.png)';
  arrow1.setAttribute('id', 'arrow1');
  customize.appendChild(arrow1);

  // Player head div
  const head = document.createElement('div');
  head.setAttribute('id', 'head');
  customize.appendChild(head);

  // Arrow 2 div
  const arrow2 = document.createElement('div');
  arrow2.setAttribute('id', 'arrow2');
  customize.appendChild(arrow2);

  // Arrow images
  let arrow1image = document.createElement('img');
  arrow1image.src = "./images/leftarrow.png";
  arrow1image.style.width = "60px";
  arrow1.appendChild(arrow1image);

  let arrow2image = document.createElement('img');
  arrow2image.src = "./images/rightarrow.png";
  arrow2image.style.width = "60px";
  arrow2.appendChild(arrow2image);
}



