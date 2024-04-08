var clutter = "";
var rn = "";
var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function Newhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

function makeBubble() {
  for (var i = 1; i <= 119; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtn").innerHTML = clutter;
}

function Timer() {
  var setTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(setTimer);
      document.querySelector('#pbtn').innerHTML = `<h1 id='over'>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtn").addEventListener("click", function (details) {
  var clickNum = Number(details.target.textContent);
  if (clickNum === hitrn) {
    increaseScore();
    makeBubble();
    Newhit();

  }
});
Timer();
makeBubble();
Newhit();
// increaseScore();
