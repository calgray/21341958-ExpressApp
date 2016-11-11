

//requires D3.js and DC.js
//globals:
//d3 - API for defining a wide variety of graphss
//dc - D3 warpper that can perform data binding to D3 graphs
//ndx - 2-way data binding pipeline

queue().defer(d3.json, "/api/data?hashtag=australia").await(makeAustraliaGraph);
queue().defer(d3.json, "/api/data?hashtag=perth").await(makePerthGraph);
queue().defer(d3.json, "/api/data?hashtag=sydney").await(makeSydneyGraph);
queue().defer(d3.json, "/api/data?hashtag=melbourne").await(makeMelbourneGraph);

function makeAustraliaGraph(error, apiData) {
  makeGraph(apiData, "australia")
}

function makePerthGraph(error, apiData) {
  makeGraph(apiData, "perth")
}

function makeSydneyGraph(error, apiData) {
  makeGraph(apiData, "sydney")
}

function makeMelbourneGraph(error, apiData) {
  makeGraph(apiData, "melbourne")
}

function makeGraph(apiData, tag) {
  var dataset = apiData;
  var ndx = crossfilter(dataset);

  var scoreDimension = ndx.dimension(function(d) { return d.score; });
  var popularityDimension = ndx.dimension(function(d) { return d.popularity; });
  var summedPopularity = scoreDimension.group().reduceSum(function(d) { return d.total; });

  //var all = ndx.groupAll();
  //var totalPopularity = popularity.group().reduceSum(function(d) { return d.total_popularity });

  var popularitySpread = dc.barChart("#popularity-spread-" + tag);

  popularitySpread
      .height(220)
      .transitionDuration(1000)
      .dimension(scoreDimension)
      .group(summedPopularity)
      //.margins({top: 10, right: 50, bottom: 30, left: 50})
      .centerBar(true)
      .gap(1)
      .elasticY(true)
      .x(d3.scale.linear().domain([-15,15]))
      .renderHorizontalGridLines(true)
      .renderVerticalGridLines(true)
      .ordering(function(d){return d.value;})
      .yAxis().tickFormat(d3.format("s"));

  dc.renderAll();
};
