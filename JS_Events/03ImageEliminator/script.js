document.querySelector('.grid').addEventListener('click',function(e) {
  console.log(e);
  var removeTarget = e.target.parentNode;
  console.log(removeTarget.parentNode);
  removeTarget.parentNode.removeChild(removeTarget);
}, false);//Bubling mode
