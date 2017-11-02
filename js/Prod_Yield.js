      /* JAVASCRIPT CODE GOES HERE */
    Plotly.d3.csv('data/prod_yield_final.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allMachineNames = unpack(rows, 'Station_Prod'),
    allMonth = unpack(rows, 'date_prod'),
    allCount = unpack(rows, 'Prod_Yield'),
    listofMachines = [],
    currentMachine,
    currentCount = [],
    currentMonth = [];

  for (var i = 0; i < allMachineNames.length; i++ ){
    if (listofMachines.indexOf(allMachineNames[i]) === -1 ){
      listofMachines.push(allMachineNames[i]);
    }
  }
  
  function getMachineData(chosenMachine) {
    currentCount = [];
    currentMonth = [];
    for (var i = 0 ; i < allMachineNames.length ; i++){
      if ( allMachineNames[i] === chosenMachine ) {
        currentCount.push(allCount[i]);
        currentMonth.push(allMonth[i]);
      } 
    }
  };

// Default station data. NEEDS TO CORRELATE TO RECORD IN FIRST FIELD OF CSV
setBubblePlot('Line');
  
function setBubblePlot(chosenMachine) {
    getMachineData(chosenMachine);  

    var trace1 = {
      x: currentMonth,
      y: currentCount,
      mode: 'lines+markers',
      marker: {
        size: 10, 
        opacity: 0.8,
        color: '#0074D9' // CHANGE MARKER COLOR
      }
    };

    var data = [trace1];

    var layout = {
      
        height:240,
        margin:{
            l:25,
            r:17,
            b:20,
            t:30,
            pad:2
        }
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

    Plotly.newPlot('plotdiv', data, layout, options);
};
  
var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    machineSelector = innerContainer.querySelector('#machinedata');

function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}

assignOptions(listofMachines, machineSelector);

function updateMachine(){
    setBubblePlot(machineSelector.value);
}
  
machineSelector.addEventListener('change', updateMachine, false);
});    