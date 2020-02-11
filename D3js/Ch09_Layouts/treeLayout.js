var height=200;
var width=500;
var margin={left:50, right:50, top:40, bottom:0};

var tree=d3.tree().size([width,height]);

var svg=d3.select('body').append('svg').attr('width','100%').attr('height','100%');
var chartGroup=svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')')


d3.json("http://0.0.0.0:8000/treeData.json").get(function (error, data) {
  console.log(data[0]);
  var root=d3.hierarchy(data[0]);
  tree(root); // this transforms the rot data

  // adding circles
  chartGroup.selectAll("circle")
    .data(root.descendants())
    .enter().append("circle")
              .attr("cx",function(d){return d.x;})
              .attr("cy",function(d){return d.y;})
              .attr("r","5");
  //console.log(root);

  chartGroup.selectAll("path")
    .data(root.descendants().slice(1))
    .enter().append("path")
            .attr("class","link")
            .attr("d",function(d) {
              return "M"+d.x+","+d.y+"L"+d.parent.x+","+d.parent.y;
            });
});
