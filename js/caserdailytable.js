(function() {

  function makeplot() {
    Plotly.d3.csv("data/faults.csv", function(data){ processData(data) } );

  };

  function processData(allRows) {

    console.log(allRows[0]);
    var x = [], y = [], standard_deviation = [];

    for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      x.push( row['TIMESTAMP'] );
      y.push( row['VALUE'] );
    }
    console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
    makePlotly( x, y, standard_deviation );
  }

  function makePlotly( x, y, standard_deviation ){
    var plotDiv = document.getElementById("plot");
    var traces = [{
      x: x,
      y: y
    }];

    Plotly.newPlot('caser-daily-table', traces);
  };
    makeplot();


}());
