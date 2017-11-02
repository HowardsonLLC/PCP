(function() {

  var data = [{
    y: [19, 70, 120, 10],
    x: ['Upstream', 'Downstream', 'Mechanical', 'Order Change'],
    type: 'bar'
  }];

  var layout = {
    autosize: true
  };

  var chart = document.getElementById('dtrChart');

  Plotly.newPlot(chart, data, layout);

}());
