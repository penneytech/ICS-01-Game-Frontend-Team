
////////////////// JOYSTICK STUFF  /////////////////
let jd;

var Joy1 = new JoyStick('joy1Div', {}, function(stickData) {
  jd = stickData.cardinalDirection;
  console.log(jd);
});