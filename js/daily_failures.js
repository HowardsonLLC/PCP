//amcharts.com has more documentation
//Loko Changes for PCP:
//Health Score = Order Count & Order Count values changes from 0._ to _000
//Downtime Hour xtitle edits..

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial", //serial is amcharts code for line/column chart. specially when using JSON data

    "fontSize": 14,

    "legend": {
        "equalWidths": false, //turn automatic spacing between legend titles on or off
        "useGraphSettings": true, //built in amcharts graph spacing
        "valueAlign": "left",
        "valueWidth": 70,
        "fontSize": 14
    },

//Manually input data values (hardcoded JSON)

    "dataProvider": [

    {
"lineColor": "red",

        "failureID": "March1-34",
        "hours": 12,
        "Order Count": 7000,

    }, {
        "failureID": "March2-33",
        "hours": 19,
        "Order Count": 3000
    }, {
        "failureID": "March2-34",
        "hours": 10,
        "Order Count": 7000
    }, {
        "failureID": "March3-35",
        "hours": 14,
        "Order Count": 6000
    }, {
        "failureID": "March3-37",
        "hours": 15,
        "Order Count": 7000
    }, {
        "failureID": "March4-38",
        "hours": 6,
        "Order Count": 6000
    }, {
        "failureID": "March5-35",
        "hours": 8,
        "Order Count": 8000
    }, {
        "failureID": "March6-33",
        "hours": 15,
        "Order Count": 5000
    }, {
        "failureID": "March07-39",
        "hours": 6,
        "Order Count": 6000
    }, {
        "failureID": "March08-38",
        "hours": 9,
        "Order Count": 8000
    }, {
        "failureID": "March10-36",
        "hours": 24,
        "Order Count": 3000
    }, {
        "failureID": "March10-37",
        "hours": 28,
        "Order Count": 1000
    }],


    "valueAxes": [{
        "id": "hoursAxis",
        "axisAlpha": 10,
        "gridAlpha": 0,
        "position": "left",//left or right side of screen
        "title": "   Downtime Hours   ((()) " //axis title
    }, {
        "id": "scoreAxis",
        "axisAlpha": 10,
        "gridAlpha": 0,
        "inside": false, //flip axis value direction (try setting to true)
        "position": "right", //left or right side of screen
        "title": "Order Count   " //axis title
    }],


    //control graph/legend properties

    //BAR CHART CONTROLS
    "graphs": [{


        "alphaField": "alpha",
        "balloonText": "[[value]]",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendPeriodValueText": "Total: [[value.sum]]",
        "legendValueText": "[[value]]",

        "title": "Downtime Hours", //Legend title for Bar Chart
        "type": "column", //choose chart type for downtimehours (column)

        "valueField": "hours", //control what data ties into bar graph
        "valueAxis": "hoursAxis" //control what data is tied to line graph axis

    },

//LINE CHART CONTROLS
    {
        "lineColorField": "red",
        "bullet": "square", //data point marker shape
        "bulletBorderAlpha": 5, //I'm unsure what this actually does
        "bulletBorderThickness": 2, //control marker thickness

        "dashLengthField": "dashLength",
        "legendValueText": "[[value]]", //
        "title": "Order Count", // Line chart legend title
        "fillAlphas": 0, //change to 1 to do an area chart instead of line chart

        "valueField": "Order Count", //control what data ties into line graph
        "valueAxis": "scoreAxis" //control what data is tied to line graph axis

    }],


//X Axis controls
    "categoryField": "failureID", //Data values that aretied to x axis
    "categoryAxis": {
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.9, //not sure what this does
        "gridColor": "#FFFFFF", //background color
        "gridCount": 50, //not sure what this does
        labelRotation: 90, // angle of x axis values
        "fontSize": 14
    }
});
