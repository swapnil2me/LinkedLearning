var dataArray = [5,11,18];

var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
              .attr("height",function(d,i){return d*15})
              .attr("width","50")
              .attr("fill","magenta")
              .attr("x",function(d,i){return 60*i+5})
              .attr("y",function(d,i){return 300-d*15});


var newX = 300;
svg.selectAll('circle.first')
    .data(dataArray)
    .enter().append("circle")
              .attr("class","first")
              .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX;})
              .attr("cy","100")
              .attr("r",function(d,i){return d*3;})


var newX = 600;
svg.selectAll('circle.second')
    .data(dataArray)
    .enter().append("circle")
              .attr("class","second")
              .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX;})
              .attr("cy","100")
              .attr("r",function(d,i){return d*3;})


var newX = 300;
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append("ellipse")
              .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX;})
              .attr("cy","200")
              .attr("rx",function(d,i){return d*3;})
              .attr("ry","30")


var newX = 600;
svg.selectAll("line.first")
    .data(dataArray)
    .enter().append("line")
              .attr("x1",newX)
              .attr("class","first")
              .attr("stroke","blue")
              .attr("stroke-width",'2')
              .attr("y1",function(d,i){return 300+(i*20);})
              .attr("x2",function(d,i){return newX+(d*15);})
              .attr("y2",function(d,i){return 300+(i*20);})

var newX = 600;
svg.selectAll("line.second")
    .data(dataArray)
    .enter().append("line")
              .attr("x1",newX)
              .attr("class","second")
              .style("stroke","green")//style takes precedence over the attr
              .style("stroke-width",'5')
              .attr("y1",function(d,i){return 400+(i*20);})
              .attr("x2",function(d,i){return newX+(d*15);})
              .attr("y2",function(d,i){return 400+(i*20);})


// With CSS
var newX = 600;
svg.selectAll("line.third")
    .data(dataArray)
    .enter().append("line")
              .attr("x1",newX)
              .attr("class","third")
              // .style("stroke","green")//style takes precedence over the attr and CSS
              // .style("stroke-width",'5')
              .attr("y1",function(d,i){return 500+(i*20);})
              .attr("x2",function(d,i){return newX+(d*15);})
              .attr("y2",function(d,i){return 500+(i*20);})


// text
svg.append("text")
    .attr("x", 100)
    .attr("y", 300)
    .text("Hello World !")

svg.append("text")
    .attr("x", 100)
    .attr("y", 350)
    .attr("fill","none")
    .attr("stroke","blue")
    .attr("stroke-width","2")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","start")
    .text("Start")

svg.append("text")
    .attr("x", 100)
    .attr("y", 400)
    .attr("fill","blue")
    .attr("stroke","none")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","middle")
    .text("Middle")

svg.append("text")
    .attr("x", 100)
    .attr("y", 450)
    .attr("stroke","blue")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","end")
    .attr("fill","none")
    .text("End")


// Data driven text
var textArray = ["Start","Middle","End"]
svg.append("text").selectAll("tspan")
  .data(textArray)
  .enter().append("tspan")
          .attr("x", 300)
          .attr("y", function(d,i){return 350+i*50;})
          .attr("fill","none")
          .attr("stroke","blue")
          .attr("stroke-width","2")
          .attr("dominant-baseline","middle")
          .attr("text-anchor","start")
          .attr("font-size","30")
          .text(function(d,i){return d;})
