var dataArray = [5,11,18];
var dataDays = ['Mon','Wed','Fri'];

var rainbow = d3.scaleSequential(d3.interpolateRainbow)
                .domain([0,10]);

var rainbow2 = d3.scaleSequential(d3.interpolateRainbow)
                .domain([0,3]);

var cat20 = d3.schemeCategory20;

// Band (goo.gl/186ghj)
var x = d3.scaleBand()
          .domain(dataDays)
          .range([0,170])
          .paddingInner(0.1176);

var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
              .attr("height",function(d,i){return d*15})
              .attr("width","50")
              .attr("fill",function(d,i){return rainbow(i);})
              .attr("x",function(d,i){return 60*i+5})
              .attr("y",function(d,i){return 300-d*15});

svg.append("g")
    .attr("class","x axis hidden")
    .attr("transform","translate(0,300)")
    .call(xAxis);

var newX = 300;
svg.selectAll('circle.first')
    .data(dataArray)
    .enter().append("circle")
              .attr("fill",function(d,i){return rainbow2(i);})
              .attr("class","first")
              .attr("cx",function(d,i){newX+=(d*3)+(i*20); return newX;})
              .attr("cy","100")
              .attr("r",function(d,i){return d*3;})


var newX = 600;
svg.selectAll('circle.second')
    .data(dataArray)
    .enter().append("circle")
              .attr("fill",function(d,i){return cat20[i];})
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
