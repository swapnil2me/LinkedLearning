var dataArray = [{x:5,y:5},
                 {x:10,y:15},
                 {x:15,y:8},
                 {x:20,y:18},
                 {x:25,y:10}];

var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");

// generator : d3 line
var line = d3.line()
            .x(function(d,i){return d.x*6;})
            .y(function(d,i){return d.y*6;})
            //.curve(d3.curveCardinal);//M30,30C30,30,50,87,60,90C70,93,80,45,90,48C100,51,110,106,120,108C130,110,150,60,150,60
            .curve(d3.curveStep);//M30,30L45,30L45,90L75,90L75,48L105,48L105,108L135,108L135,60L150,60

svg.append("path")
  .attr("fill","none")
  .attr("stroke","blue")
  .attr("d",line(dataArray));
