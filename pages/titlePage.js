import { sampleleaderboarddata } from '../sampleleaderboarddata.js'
import { LoginDialogue } from './loginDialogue.js';

const contentDiv = document.getElementById('content');
const playButton = document.createElement('button');

playButton.textContent = 'PLAY';
playButton.id = 'play-button';
contentDiv.appendChild(playButton);

playButton.onclick = function() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  LoginDialogue();
};


/* 
Generate the table 
*/

// Create the table element
const tableElem = document.createElement('table');
tableElem.id = 'my-leaderboard-table'; // add an ID to the table
tableElem.style.border = '1px solid black';

// Create the header row and cells
const headerRow = document.createElement('tr');
const indexHeader = document.createElement('th'); // create a new header cell for the index column
indexHeader.textContent = 'Ranking'; // set the header text
indexHeader.style.border = '1px solid black'; // add border styling
const nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
nameHeader.style.border = '1px solid black';
const pointsHeader = document.createElement('th');
pointsHeader.textContent = 'Points';
pointsHeader.style.border = '1px solid black';

// Append the cells to the header row and the header row to the table
headerRow.appendChild(indexHeader); // add the index header cell to the header row
headerRow.appendChild(nameHeader);
headerRow.appendChild(pointsHeader);
tableElem.appendChild(headerRow);

// Loop through the sampleleaderboarddata array and create a new row for each item
sampleleaderboarddata.forEach((item, index) => { // add an index parameter to the forEach loop
  const row = document.createElement('tr');

  const indexCell = document.createElement('td'); // create a new cell for the index column
  indexCell.textContent = index + 1; // set the cell text to the index + 1
  indexCell.style.border = '1px solid black'; // add border styling
  row.appendChild(indexCell); // add the index cell to the row

  const nameCell = document.createElement('td');
  nameCell.textContent = item.name;
  nameCell.style.border = '1px solid black';
  row.appendChild(nameCell);

  const pointsCell = document.createElement('td');
  pointsCell.textContent = item.points;
  pointsCell.style.border = '1px solid black';
  row.appendChild(pointsCell);

  tableElem.appendChild(row);
});

// Append the table to the parent element
contentDiv.appendChild(tableElem);

