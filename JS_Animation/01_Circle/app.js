var ol=0;
var circleInterval = setInterval(circleAnimation,50);

function circleAnimation() {
  if (ol >= 4000/50) {
    document.getElementById("circle").style.backgroundColor = "dimgrey";
    clearInterval(circleInterval);
  }else {
    ol++;
    document.getElementById("circle").style.left = ol + 'px';
  }

}
