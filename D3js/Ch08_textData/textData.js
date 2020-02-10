d3.text("http://0.0.0.0:8000/test.txt").get(function(error, data) {
  var myTabPositions = [];
  var myNewLinePositions = [];

  var tabVal = '\\b\t\\b';
  var tabMod = 'g';
  var tabRegExp = new RegExp(tabVal, tabMod);

  var lineVal = '\\b\n\\b';
  var lineMod = 'g';
  var lineRegExp = new RegExp(lineVal, lineMod);

  data.replace(tabRegExp, function(a,b){myTabPositions.push(b); return a;});
  data.replace(lineRegExp, function(a,b){myNewLinePositions.push(b); return a;});

  console.log(myTabPositions);
  console.log(myNewLinePositions);
})
