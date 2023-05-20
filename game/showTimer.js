import { getGlobal, setGlobal } from "../globals.js";


export async function showTimer() {
  let timeleft = getGlobal("timeleft");
  let betweenrounds = getGlobal("betweenrounds");

  if (betweenrounds == true) {
    return;
  }
  
  else {
    let minutes = Math.floor(timeleft / 60000);
    let seconds = ((timeleft % 60000) / 1000).toFixed(0);
    let ctx = getGlobal("ctx");
    let text = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    let canvas = getGlobal("canvas");
    // Use fillText to draw the timer with the candy font
    ctx.font = "bold 50px comic sans";
    ctx.fillStyle = "#00ECFF";
    ctx.fillText(text, canvas.width / 2 - 20, 60);
  }
}

export function timer() {

  setInterval(function () {

    let timeleft = getGlobal("timeleft");
    timeleft -= 1000;
    setGlobal("timeleft", timeleft);
console.log("timeleft", timeleft);
  }, 1000);

}