var ol=0;
var circleInterval = setInterval(circleAnimation,50);

function circleAnimation() {
  ol++;
  document.getElementById("circle").style.left = ol + 'px';
}
