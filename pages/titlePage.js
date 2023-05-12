import { sampleleaderboarddata } from '../sampleleaderboarddata.js'
import { LoginDialogue } from './loginDialogue.js';
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

  // Create the user stats div
  const customization = document.createElement('div');
  customization.style.backgroundColor = 'white';
  customization.style.padding = '25px';
  customization.setAttribute('id', 'customization');
  contentDiv.appendChild(customization);

  // Create a table inside of the user stats div
  const table = document.createElement('table');
  table.style.width = '100%';
  customization.appendChild(table);

  // Create title row
  const titleRow = document.createElement('tr');
  table.appendChild(titleRow);
  const titleCell = document.createElement('th');
  titleCell.colSpan = 2;
  titleCell.textContent = 'User Stats';
  titleCell.style.fontSize = '24px';
  titleCell.style.fontWeight = 'bold';
  titleRow.appendChild(titleCell);

  // Create an array of user stat names
  const statNames = ['Highest Score', 'Total Score', 'Average Score', 'Times Played', 'test']; 

  // Create a sample array of user data
    const userStats = getGlobal('userstats');
  
  // Create data rows
  for (let i = 0; i < 5; i++) {
    const dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    
    const dataCell1 = document.createElement('td');
    dataCell1.style.textAlign = 'left';
    dataCell1.style.backgroundColor = 'white';
    dataCell1.style.fontWeight = 'bold';
    dataCell1.textContent = statNames[i];
    
    const dataCell2 = document.createElement('td');
    dataCell2.style.textAlign = 'right';
    dataCell2.style.backgroundColor = 'white';
    dataCell2.style.fontWeight = 'bold';
    dataCell2.textContent = userStats[i];
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
  }

  // Make play button display the game when clicked by a user
  playButton.onclick = function() {
    customization.innerHTML = "";
    initGame();
  };

  //Create the parent div for customization
  const customize = document.createElement('div');
  customize.style.backgroundColor = 'white';
  customize.style.padding = '25px';
  customize.setAttribute('id', 'customize');
  contentDiv.appendChild(customize);

  // Arrow 1 div
  const arrow1 = document.createElement('div');
  arrow1.style.width = '33%';
  arrow1.style.float = 'left';
  arrow1.style.backgroundImage = 'url(leftarrow.png)';
  arrow1.style.backgroundSize = 'contain';
  arrow1.style.backgroundRepeat = 'no-repeat';
  arrow1.style.backgroundPosition = 'left center';
  arrow1.style.height = '50px';
  customize.appendChild(arrow1);
  arrow1.setAttribute('id', 'arrow1');

  // Player head div
  const head = document.createElement('div');
  head.style.width = '33%';
  head.style.float = 'left';
  head.style.backgroundImage = 'url(Nika2.png)';
  head.style.backgroundSize = 'contain';
  head.style.backgroundRepeat = 'no-repeat';
  head.style.backgroundPosition = 'center';
  head.style.height = '125px';
  customize.appendChild(head);
  head.setAttribute('id', 'head');

  // Arrow 2 div
  const arrow2 = document.createElement('div');
  arrow2.style.width = '33%';
  arrow2.style.float = 'left';
  arrow2.style.backgroundImage = 'url(rightarrow.png)';
  arrow2.style.backgroundSize = 'contain';
  arrow2.style.backgroundRepeat = 'no-repeat';
  arrow2.style.backgroundPosition = 'right center';
  arrow2.style.height = '50px';
  customize.appendChild(arrow2);
  arrow2.setAttribute('id', 'arrow2');
}


