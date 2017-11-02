 var xValues = ['Cartoner', 'Casepacker', 'Twinpack'];

var yValues = ['33', '34', '35', '36', '37', '38', '39'];

var zValues = [
  [4, 0, 0],
  [3, 0, 0],
  [2, 0, 0],
  [0, 9, 0],
  [0, 11, 0],
  [0, 0, 6],
  [0, 0, 4]
];

var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
colorscale: [

['0.0', 'rgb(255,210,210)'],
    ['0.111111111111', 'rgb(255, 204, 204)'],
    ['0.222222222222', 'rgb(255, 179, 179)'],
    ['0.333333333333', 'rgb(255, 102, 102)'],
    ['0.444444444444', 'rgb(255, 77, 77)'],
    ['0.555555555556', 'rgb(255, 51, 51)'],
    ['0.666666666667', 'rgb(255,0,0)'],
    ['0.777777777778', 'rgb(204,0,0)'],
    ['0.888888888889', 'rgb(163, 0, 0)'],
    ['0.999999999999', 'rgb(142, 0, 0)'],
    ['1.0', 'rgb(135, 0, 0)']
    
],



  showscale: true 
}];
    
var layout = {
    height: 450,
    font: {
      size: 14
    },
margin: {
    l: 60,
    r: 20,
    b: 20,
    t: 40,
    pad: 4
  },
  annotations: [],
  xaxis: {
    ticks: '',
    side: 'top'
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
    width: 800,
    height: 800,
    autosize: true,
    title: 'Asset ID',
    tickfont: {

      size: 12,
      color: 'black'
    },
    margin: {
    l: 20,
    r: 20,
    b: 20,
    t: 40,
    pad: 3
  },


  }


}; 
    
for ( var i = 0; i < yValues.length; i++ ) {
  for ( var j = 0; j < xValues.length; j++ ) {
    var currentValue = zValues[i][j];
    if (currentValue === 0) {
      var textColor = 'white';
    }else{
      var textColor = 'black';
    }
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Arial',
        size: 14,
        color: 'rgb(0,0,128)'
      },
      showarrow: false,
      font: {
        color: textColor
      }
    };
    layout.annotations.push(result);
  }
}

    //GET RID OF PLOTLY TOOLBAR
    var options = {
  scrollZoom: false, // lets us scroll to zoom in and out - works
  showLink: false, // removes the link to edit on plotly - works
  modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
  //modeBarButtonsToAdd: ['lasso2d'],
  displayLogo: false, // this one also seems to not work
  displayModeBar: false, //this one does work
};
    
Plotly.newPlot('myDiv', data, layout, options);