document.querySelector('img.preview').addEventListener('click',function (e) {
  let lowRes = e.target.src;
  let myOverlay = document.querySelector('.overlay');
  let heighRes = document.createElement('img');
  let mySpinner = document.createElement('img');

  myOverlay.style.display = 'block';
  heighRes.className = 'bgImg';
  heighRes.src = "img/World.jpeg";//lowRes;

  myOverlay.appendChild(heighRes);

  mySpinner.className = 'spinner';
  mySpinner.src = 'img/throbber.gif'
  myOverlay.appendChild(mySpinner);

  heighRes.addEventListener('load',function () {
    mySpinner.parentNode.removeChild(mySpinner);
  });
},false);
