d3.xml("http://0.0.0.0:8000/xmlData.xml").get(function(error, data){
  console.log(data);
  console.log(data.documentElement);
  // JS way to select data
  var xmlLetter = data.documentElement.getElementsByTagName("letter");
  console.log(xmlLetter);

  // D# way to select xmlData
  var letterNodes = d3.select(data).selectAll("letter")._groups[0][0]
  console.log(letterNodes);
})
