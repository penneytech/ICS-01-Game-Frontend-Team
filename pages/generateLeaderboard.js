import { getGlobal, setGlobal } from '../globals.js';

export function generateLeaderboard(){

    const leaderboarddata = getGlobal('leaderboarddata');

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

  // Loop through the leaderboarddata array and create a new row for each item
  leaderboarddata.forEach((item, index) => { // add an index parameter to the forEach loop
    const row = document.createElement('tr');

    const indexCell = document.createElement('td'); // create a new cell for the index column
    indexCell.textContent = index + 1; // set the cell text to the index + 1
    indexCell.style.border = '1px solid black'; // add border styling
    row.appendChild(indexCell); // add the index cell to the row

    const nameCell = document.createElement('td');
    nameCell.textContent = item.username;
    nameCell.style.border = '1px solid black';
    row.appendChild(nameCell);

    const pointsCell = document.createElement('td');
    pointsCell.textContent = item.total_points;
    pointsCell.style.border = '1px solid black';
    row.appendChild(pointsCell);

    tableElem.appendChild(row);

    let leaderboarddiv = document.getElementById('leaderboarddiv');
    leaderboarddiv.appendChild(tableElem);
  });


}