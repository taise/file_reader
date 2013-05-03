'use strict'

// graph area
var h = 300;
var w = 100;
var barPadding = 1;

var dataset = [10, 50, 100, 20, 70];
var len = dataset.length;
var svg = d3.select("#graph")
.append("svg")
.attr("width", w)
.attr("height", h)

// set rect size
var setSizeGraph = svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", function(d, i) { return i * (w / len) })
.attr("y", function(d) { return h - (d * 3) });

// graphing each data of dataset
var graphing = setSizeGraph
.attr("width", w / len - barPadding)
.attr("height", function(d) { return d * 3; });

// coloring
graphing.attr("fill", function(d) {
  return "rgb(" + (d * 2.5) + ", " + (d * 5) + ", 0)";
});

// data extraction
$(function(){
  function extractData(evt){
    var csv = evt.target.text;
    console.log(1);
  };

  var csvData = $('#csvData');
  csvData.on("change", "pre", function(evt){ console.log("change!"); });
  console.log(csvData);
});
