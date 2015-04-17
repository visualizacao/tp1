
var idGrafoEscolhido;
if(!idGrafoEscolhido)
  idGrafoEscolhido = 0;
var radius = 74,
  padding = 10;

var color = d3.scale.ordinal()
  .range(["#FF8C00","#F0E68C","#00BFFF","#696969","#C0C0C0", "#7B68EE","#DC143C",
    "#708090","#00FF00","#FF00FF","#483D8B","#8A2BE2","#556B2F", "#800000","#B22222",
    "#008B8B","#006400","#8B4513","#DEB88","#FF6347","#FFB6C1","#FFE4C4","#FFDAB9","#B0E0E6",
    "#D2B48C","#F5DEB3"]);

var arc = d3.svg.arc()
  .outerRadius(radius)
  .innerRadius(radius - 30);

var pie = d3.layout.pie()
  .sort(null)
  .value(function(d) { return d.population; });
          
d3.csv("data/"+idGrafoEscolhido+".csv", function(error, data) {
  color.domain(d3.keys(data[0]).filter(function(key) { 
    return key !== "idgrafo" && key !== "idpessoa"; 
  }));

data.forEach(function(d) {
  d.ages = color.domain().map(function(name) {
    return {name: name, population: +d[name]};
  });
});

var svg = d3.select("#grafos").selectAll(".pie")
              .data(data)
            .enter().append("svg")
              .attr("class", "pie")
              .attr("width", radius * 2)
              .attr("height", radius * 2)
            .append("g")
              .attr("transform", "translate(" + radius + "," + radius + ")");
             
svg.selectAll(".arc")
  .data(function(d) { return pie(d.ages); })
.enter().append("path")
  .attr("class", "arc")
  .attr("d", arc)
  .style("fill", function(d) {return color(d.data.name); });

svg.append("text")
  .attr("dy", ".35em")
  .style("text-anchor", "middle")
  .text(function(d) { return "pessoa "+ d.idpessoa; });
});
