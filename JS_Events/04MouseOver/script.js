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
  }
}, false);
