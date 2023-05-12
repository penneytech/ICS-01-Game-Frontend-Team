import { getGlobal, setGlobal } from '../globals.js';

export function generateLeaderboard() {
  const leaderboarddata = getGlobal('leaderboarddata');

  if (leaderboarddata.length === 0) {
    let leaderboarddiv = document.getElementById('leaderboarddiv');
    leaderboarddiv.textContent = 'No leaderboard data';
    return;
  }

  const tableElem = document.createElement('table');
  tableElem.id = 'my-leaderboard-table';
  tableElem.style.border = '1px solid black';

  const headerRow = document.createElement('tr');
  const indexHeader = document.createElement('th');
  indexHeader.textContent = 'Ranking';
  indexHeader.style.border = '1px solid black';
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  nameHeader.style.border = '1px solid black';
  const pointsHeader = document.createElement('th');
  pointsHeader.textContent = 'Points';
  pointsHeader.style.border = '1px solid black';

  headerRow.appendChild(indexHeader);
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(pointsHeader);
  tableElem.appendChild(headerRow);

  leaderboarddata.forEach((item, index) => {
    const row = document.createElement('tr');

    const indexCell = document.createElement('td');
    indexCell.textContent = index + 1;
    indexCell.style.border = '1px solid black';
    row.appendChild(indexCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = item.username;
    nameCell.style.border = '1px solid black';
    row.appendChild(nameCell);

    const pointsCell = document.createElement('td');
    pointsCell.textContent = item.total_points;
    pointsCell.style.border = '1px solid black';
    row.appendChild(pointsCell);

    tableElem.appendChild(row);
  });

  let leaderboarddiv = document.getElementById('leaderboarddiv');
  leaderboarddiv.appendChild(tableElem);
}
