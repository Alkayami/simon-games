var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

  playSound(userChosenColor);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  });
}
