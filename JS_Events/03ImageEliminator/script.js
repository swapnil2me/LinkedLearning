document.querySelector('.grid').addEventListener('click',function(e) {
  console.dir(e.target);
  if (e.target.tagName === 'IMG') {
    let howMany = this.querySelectorAll('li').length;
    console.log(howMany);
    if (howMany > 1) {
      let removeTarget = e.target.parentNode;
      removeTarget.parentNode.removeChild(removeTarget);
    }else {
      let photoTitle = e.target.alt;
      console.log(photoTitle);
      document.querySelector('#art p').innerHTML = photoTitle;
      console.dir(document.querySelector('#art p').innerHTML);
    }

  }

}, false);//Bubling mode
