// var ol=0;
// var circleInterval = setInterval(circleAnimation,50);
//
// function circleAnimation() {
//   if (ol >= 4000/50) {
//     document.getElementById("circle").style.backgroundColor = "dimgrey";
//     clearInterval(circleInterval);
//   }else {
//     ol++;
//     document.getElementById("circle").style.left = ol + 'px';
//   }
//
// }


var ol = 0;
var circleInterval;
function circleAnimation(time) {
  ol ++;
  document.getElementById("circle").style.left = ol + "px";
  if (time<4000) {
    circleInterval = requestAnimationFrame(circleAnimation);
  }else {
    document.getElementById("circle").style.backgroundColor = "dimgrey";
    cancelAnimationFrame(circleInterval);
  }
}

circleInterval=requestAnimationFrame(circleAnimation);
