var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
var dataYear = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016",]

var parseDate = d3.timeParse("%Y");
console.log(d3.max(dataYear, function(d){return parseDate(d);}));
console.log(d3.extent(dataYear, function(d){return parseDate(d);}));

var height = 200;
var width = 500;

var margin = {left:50, right:50, top:40, bottom:0};

// Scales

var y = d3.scaleLinear()
            .domain([0,d3.max(dataArray)])
            .range([height, 0]);// Inverted to work with browsers upside down nature

var x = d3.scaleTime()
            .domain(d3.extent(dataYear, function(d){return parseDate(d);}))
            .range([0, width]);

console.log(x(parseDate('2010')));
// Generator Axis
var yAxis = d3.axisLeft(y)
                .ticks(3)
                .tickPadding(10)
                .tickSize(10);
                // More on ticks
                // goo.gl/BFOcoe

var xAxis = d3.axisBottom(x);

// Generator Area
var area = d3.area()
              .x(function(d,i){return x(parseDate(dataYear[i]));})
              .y0(height)
              .y1(function(d){return y(d);});

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");
// Chart group
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");

//
chartGroup.append("path").attr("d",area(dataArray));
chartGroup.append("g").attr("class","axis y")
              .call(yAxis);
chartGroup.append("g").attr("class","axis x")
              .attr("transform","translate("+0+","+height+")")
              .call(xAxis);
// or Separate axis groups
// svg.append("g").attr("class","axis y")
//               .attr("transform","translate("+margin.left+","+margin.top+")")
//               .call(yAxis);


// More generators on
// https://github.com/d3/d3/blob/master/API.md
// https://bl.ocks.org/
// https://bl.ocks.org/mbostock
