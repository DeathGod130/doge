var scoreElement = document.getElementById('score');
var score = 0;
var doge = document.getElementById('doge');

doge.addEventListener('click', function() {
  addToScore(100);
}, false);

function addToScore(blah){
  score += blah
  scoreElement.innerHTML = score;
}

