//anomaly_plot.js

var trace1 = {
  x: ['2016-03-10', '2016-03-20', '2016-03-25', '2016-03-30', '2016-04-05'],
  y: [2.4, .92, .77, .88, .77],
  type: 'scatter', mode: 'markers', // 'mode: markers' removes lines connecting scatter points
  name: 'Anomaly Index',
  marker:

  {
    color:'blue',                  
    size:16
  }

};


var data = [trace1];
var layout = {

  //control plotly size/margins
      autosize: true,
  height: 265,
  margin: {
    l: 50,
    r: 0,
    b: 40,
    t: 30,
    pad: 1
  },

   yaxis: //y axis controls

   {
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 0.25,
    ticklen: 8,
    tickwidth: 4,
    tickcolor: '#000'
  },
  
  shapes: [
        //Corrective Action HIGHLIGHT
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: '2016-03-11',
            y0: 0,
            x1: '2016-03-12',
            y1: .8,
            fillcolor: 'red',
            opacity: 0.2,
            line: {
                width: 0
            }
        },
        // PM HIGHLIGHT
        {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: '2016-03-15',
            y0: 0,
            x1: '2016-03-16',
            y1: 1,
            fillcolor: 'green',
            opacity: 0.2,
            line: {
                width: 0
            }
        }
    ],

  showlegend: true,
  hovermode:'closest',
       // title:'Anomaly Data',
        xaxis:{zeroline:false, title: 'Event Date'},
        yaxis:{zeroline:false, title: 'Anomaly Index'},



//annotation properties
  annotations: [ //new annotation
  //Fcorrective action ANNOTATION
    {
      x: '2016-03-11', // x axis position of dot for annotation
      y: 1.5, // y axis position of dot for annotation
      xref: 'x',
      yref: 'y',
      text: 'Corrective Action',
      showarrow: true,
      font: {
        family: 'Times New Roman',
        size: 12,
        color: '#ffffff' //font color
      },
      align: 'center',
      arrowhead: 2,
      arrowsize: 1,
      arrowwidth: 2,
      arrowcolor: 'black',
      ax: 40, //x axis position for arrows
      ay: -30, //Y AXIS position for arrows
      bordercolor: 'black',
      borderwidth: 2,
      borderpad: 4, // padding between border and text,
      bgcolor: 'red', //background color
      opacity: 0.8
    },
    //ANOMALY ANNOTATION
    {
      x: '2016-03-10', // x axis position of dot for annotation
      y: 2.4, // y axis position of dot for annotation
      xref: 'x',
      yref: 'y',
      text: 'Anomaly',
      showarrow: true,
      font: {
        family: 'Times New Roman',
        size: 16,
        color: '#ffffff' //font color
      },
      align: 'center',
      arrowhead: 2,
      arrowsize: 1,
      arrowwidth: 2,
      arrowcolor: 'black',
      ax: 20,
      ay: -30,
      bordercolor: 'black',
      borderwidth: 2,
      borderpad: 4, // padding between border and text,
      bgcolor: 'purple', //background color
      opacity: 0.8
    },
    //PM ANNOTATION
    {
      x: '2016-03-16', // x axis position of dot for annotation
      y: 2.4, // y axis position of dot for annotation
      xref: 'x',
      yref: 'y',
      text: 'PM',
      showarrow: true,
      font: {
        family: 'Times New Roman',
        size: 16,
        color: '#ffffff' //font color
      },
      align: 'center',
      arrowhead: 2,
      arrowsize: 1,
      arrowwidth: 2,
      arrowcolor: 'black',
      ax: 20,
      ay: -30,
      bordercolor: 'black',
      borderwidth: 2,
      borderpad: 4, // padding between border and text,
      bgcolor: 'green', //background color
      opacity: 0.8
    }



  ]
};

 //GET RID OF PLOTLY TOOLBAR
    var options = {
  scrollZoom: false, // lets us scroll to zoom in and out - works
  showLink: false, // removes the link to edit on plotly - works
  modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
  //modeBarButtonsToAdd: ['lasso2d'],
  displayLogo: false, // this one also seems to not work
  displayModeBar: false, //this one does work
};



Plotly.newPlot('anomaly1', data, layout, options);
