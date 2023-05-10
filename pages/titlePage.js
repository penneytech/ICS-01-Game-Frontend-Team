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
  titleCell.style.fontSize = '24px'; // Set font size to 24px
  titleCell.style.fontWeight = 'bold'; // Set font weight to bold
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
    dataCell1.style.textAlign = 'left'; // Set text-align to left
    dataCell1.style.backgroundColor = 'white'; // Set light gray background color
    dataCell1.style.fontWeight = 'bold'; // Set font weight to bold
    dataCell1.textContent = statNames[i];
    const dataCell2 = document.createElement('td');
    dataCell2.style.textAlign = 'right'; // Set text-align to right
    dataCell2.style.backgroundColor = 'white'; // Set light gray background color
    dataCell2.style.fontWeight = 'bold'; // Set font weight to bold
    dataCell2.textContent = userStats[i];
    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
  }

  // Make play button display the game when clicked by a user
  playButton.onclick = function() {
    customization.innerHTML = "";
    initGame();
  };
}


