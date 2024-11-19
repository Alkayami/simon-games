const buttonColor = ["red, blue, green, yellow"];
let gamePattern = [];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
}