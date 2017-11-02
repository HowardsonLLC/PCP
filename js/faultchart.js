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
      y.push( row['HOURS'] );
    }
    console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
    makePlotly( x, y, standard_deviation );
  }

  function makePlotly( x, y, standard_deviation ){
    var plotDiv = document.getElementById("plot");
    var traces = [{
      x: x,
      y: y,
      mode: 'lines+markers',
      marker: {
        size: 5, 
        opacity: 0.8,
        color: '#0074D9' // CHANGE MARKER COLOR
      }

    }];

    var layout = {

       height: 245,
    font: {
      size: 12
    },
margin: {
    l: 60,
    r: 5,
    b: 55,
    t: 0,
    pad: 4
  },
      yaxis: {
        title: 'Hours',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        }
      }
    };


    var options = {
  scrollZoom: false, // lets us scroll to zoom in and out - works
  showLink: false, // removes the link to edit on plotly - works
  modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
  //modeBarButtonsToAdd: ['lasso2d'],
  displayLogo: false, // this one also seems to not work
  displayModeBar: false, //this one does work
};

    Plotly.newPlot('dtrChart', traces, layout, options);
  };

    makeplot();


}());
