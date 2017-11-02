trace3 = {
  type: 'scatter',
  x: [0, 132, 132, 244, 244, 323, 323, 500],
  y: [1, 1, .875, .875, .75, .75, .625, .625],
  mode: 'lines+markers',
  name: 'Survial Curve',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 4,
    size: 5
  },
   marker: {
    size: 6
   }
  
};


var data = [trace3];

var layout = {


  xaxis: //x axis controls

  {  
     title: ' Asset Life',
    autotick: false,
    tick0: 0, //original tick mark
    dtick: 50, //control tick interval
    
  },

 yaxis: // y axis controls

  {
    title: 'Cumulative Survival',
    rangemode: 'decimal',
    range: [.6, 1.1], //set range of y axis scale
    showticklabels: true
    
  },

  //control plotly size/margins
      autosize: true,
      showlegend: true,
  
  margin: {
    l: 50,
    r: 0,
    b: 40,
    t: 40,
    pad: 1
  },

};

Plotly.newPlot('survival1', data, layout);