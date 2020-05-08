document.querySelector('.grid').addEventListener('mouseover',function (e) {
  if (e.target.tagName == 'IMG') {
    let myElement = document.createElement('div');
    myElement.className = 'preview';
    e.target.parentNode.appendChild(myElement);
    // console.log(myElement);
    let myImg = document.createElement('img');
    let imgLoc = e.target.src;
    myImg.src = imgLoc;
    myElement.appendChild(myImg)

    e.target.addEventListener('mouseout', function handler(d) {
      let myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      e.target.removeEventListener('mouseout',handler, false);
      // Above line removes the event as well while hovering out
    }, false);
  }
}, false);
