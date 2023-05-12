import {getGlobal, setGlobal} from '../globals.js'

export default function opponentMovement(message) {
    console.log('[opponentMovement]:', message);

    let userMap = getGlobal('userMap');

    userMap.set(message.username, { ...userMap.get(message.username), x: message.x });
    userMap.set(message.username, { ...userMap.get(message.username), y: message.y });

    setGlobal('userMap', userMap);

}