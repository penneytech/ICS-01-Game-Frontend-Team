import { getGlobal, setGlobal } from '../globals.js';

export default function generateUserStats() {
  const userStats = getGlobal('userstats');
  const userstatsdiv = document.getElementById('userstatsdiv');
  const contentDiv = document.getElementById('content');

  // Create the user stats div
  const customization = document.createElement('div');
  customization.style.backgroundColor = 'white';
  customization.style.padding = '25px';
  customization.setAttribute('id', 'customization');

  userstatsdiv.appendChild(customization);

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
  const statNames = ['Username', 'Character', 'Top Score', 'Total Points', 'Times Played'];

  // Check if userStats is null or empty
  if (!userStats || Object.keys(userStats).length === 0) {
    const dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    const dataCell = document.createElement('td');
    dataCell.colSpan = 2;
    dataCell.style.textAlign = 'center';
    dataCell.style.backgroundColor = 'white';
    dataCell.style.fontWeight = 'bold';
    dataCell.textContent = 'No user stats available.';
    dataRow.appendChild(dataCell);
  } else {
    // Create data rows
    const statValues = ['username', 'type', 'top_score', 'total_points', 'historyCount'];

    for (let i = 0; i < statNames.length; i++) {
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
      dataCell2.textContent = userStats[statValues[i]];
      dataRow.appendChild(dataCell1);
      dataRow.appendChild(dataCell2);

      if (statNames[i] === 'Character') {
        dataCell2.setAttribute('data-stat', 'Character');
      }
    }
  }

  // Generate customize

  // Create the parent div for customization
  const customize = document.createElement('div');
  customize.id = "customize";
  contentDiv.appendChild(customize);

  // Arrow 1 div
  const arrow1 = document.createElement('div');
  arrow1.style.backgroundImage = 'url(images/leftarrow.png)';
  arrow1.setAttribute('id', 'arrow1');
  customize.appendChild(arrow1);

  // Player head div
  const head = document.createElement('div');
  head.setAttribute('id', 'head');
  const defaultCharacter = userStats && userStats.type !== '' ? userStats.type : 'Jax'; // Set the default character based on userStats.type or provide a default if empty
  const characterImagesMap = getGlobal('characterimagesmap');

  if (characterImagesMap && characterImagesMap[defaultCharacter]) {
    head.style.backgroundImage = `url(${characterImagesMap[defaultCharacter].src})`;
    head.setAttribute('data-character', defaultCharacter);
  } else {
    // Handle the case when the character or image is not found
    // Set a default background image or display an error message
    // Example:
    head.style.backgroundImage = "url('default-image.png')";
    head.setAttribute('data-character', 'Default');
  }

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

  // Add event listeners to arrow divs
  arrow1.addEventListener('click', selectPreviousCharacter);
  arrow2.addEventListener('click', selectNextCharacter);
}


function selectPreviousCharacter() {
  console.log('selectPreviousCharacter')
  const characterImagesMap = getGlobal('characterimagesmap');
  const head = document.getElementById('head');
  const currentCharacter = head.getAttribute('data-character');
  const characterIndex = Object.keys(characterImagesMap).indexOf(currentCharacter);
  const previousIndex = (characterIndex - 1 + Object.keys(characterImagesMap).length) % Object.keys(characterImagesMap).length;
  const previousCharacter = Object.keys(characterImagesMap)[previousIndex];
  head.style.backgroundImage = `url(${characterImagesMap[previousCharacter].src})`;
  head.setAttribute('data-character', previousCharacter);
  updateCharacterLabel(previousCharacter);
  let socket = getGlobal('socket');
  socket.emit('updatecharacter', previousCharacter)
}

function selectNextCharacter() {
  console.log('selectNextCharacter')
  const characterImagesMap = getGlobal('characterimagesmap');
  const head = document.getElementById('head');
  const currentCharacter = head.getAttribute('data-character');
  const characterIndex = Object.keys(characterImagesMap).indexOf(currentCharacter);
  const nextIndex = (characterIndex + 1) % Object.keys(characterImagesMap).length;
  const nextCharacter = Object.keys(characterImagesMap)[nextIndex];
  head.style.backgroundImage = `url(${characterImagesMap[nextCharacter].src})`;
  head.setAttribute('data-character', nextCharacter);
  updateCharacterLabel(nextCharacter);
  let socket = getGlobal('socket');
  socket.emit('updatecharacter', nextCharacter)
}

function updateCharacterLabel(character) {
  console.log(character);
  const userStats = getGlobal('userstats');
  const characterDataCell = document.querySelector('td[data-stat="Character"]');
  characterDataCell.textContent = character;
  userStats["type"] = character;
  console.log(userStats);
  setGlobal('userstats', userStats);
}


