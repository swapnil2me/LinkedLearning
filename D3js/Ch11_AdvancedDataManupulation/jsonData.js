d3.json("http://0.0.0.0:7000/treeData.json").get(function (error, data) {
  console.log(data[0]);
  console.log(data[0].children);
  console.log(data[0].children[0].children);
  console.log(data[0].children[0].children[0].name);
});
