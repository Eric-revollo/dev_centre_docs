---
title: Configuring your Chart Using AngularJS | FusionCharts
description: This article focuses on different type of configurations possible using AngularJS.
heading: Configuring your Chart using AngularJS
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `angularjs-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/angular/angularjs/configure-your-chart-using-angularjs#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/angular/angularjs/configure-your-chart-using-angularjs#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chart configure-charts-using-angular-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

Now, create the module and the controller for the template. The code for the `js` file is given below:

```
$scope.dataSource = {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
        "updateAnimDuration": "0.3"
    },
    "data": [{
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
};

events: {
    "beforeRender": function(evt, args) {
        var controls = document.createElement('div'),
            chartRef = evt.sender;

        chartRef.getRandomNumber = function() {
            var max = 300,
                min = 50;
            return Math.round(((max - min) * Math.random()) + min);
        }
        updateData = function() {

            //clones data
            var data = Object.assign({}, chartRef.getJSONData());
            data.data[2].label = 'Canada';
            data.data[2].value = chartRef.getRandomNumber();

            data.data[3].label = 'Iran';
            data.data[3].value = chartRef.getRandomNumber();
            chartRef.setJSONData(data);
        };
        controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="updateData()" >Update chart data</button>';
        controls.style.cssText = 'text-align: center; width: 100%;';
        args.container.appendChild(controls);
    }
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div fusioncharts
    width="700" 
    height="400"
    type="column2d",
    datasource="{{dataSource}}"
></div>
<p><a class="btn btn-default" ng-click="updateMyChartData()">Click me to change data</a></p>

```

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

Now, create the module and the controller for the template. The code for the `js` file is given below:

```
$scope.dataSource = {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [{
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
};

events: {
    "beforeRender": function(evt, args) {
        var chartRef = evt.sender;

        chartRef.originalData = JSON.parse(JSON.stringify(chartRef.getJSONData()));

        chartRef.changeBackground = function() {
            var data = chartRef.getJSONData(); //copy of object
            data.chart.bgColor = '#efefef';
            chartRef.setJSONData(data);
        };

        // Resets all the chart data to it's initial verison
        chartRef.resetAttr = function() {
            chartRef.setJSONData(chartRef.originalData);
        };

        // Makes the caption text left aligned
        chartRef.makeCaptionLeft = function() {
            var data = chartRef.getJSONData();
            data.chart.captionAlignment = 'left';
            chartRef.setJSONData(data);
        };


        var btnContainer = document.createElement('div'),
            str;

        // buttons 
        str = '<button id="bgColorBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Change Chart Background</button>&nbsp&nbsp';
        str += '<button id="captionAlignBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Make Caption Text Left-Aligned</button>&nbsp&nbsp';
        str += '<button id="resetAttrBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Reset Attributes</button>';

        btnContainer.style.cssText = "text-align: center; width: 100%; margin: 10px;";
        btnContainer.innerHTML = str;
        //button attachment
        args.container.parentNode.insertBefore(btnContainer, args.container.nextSibling);
    },

    "renderComplete": function(evt, args) {
        var chartRef = evt.sender,
            bgColorBtn = document.getElementById('bgColorBtn'),
            captionAlignBtn = document.getElementById('captionAlignBtn'),
            resetAttrBtn = document.getElementById('resetAttrBtn');

        bgColorBtn.onclick = chartRef.changeBackground;
        captionAlignBtn.onclick = chartRef.makeCaptionLeft;
        resetAttrBtn.onclick = chartRef.resetAttr;
    }
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div fusioncharts
    width="700" 
    height="400"
    type="column2d",
    datasource="{{dataSource}}"
    ></div>
<p><a class="btn btn-default" ng-click="bgColorBtn()">Change chart background color</a>
<a class="btn btn-default" ng-click="captionAlignBtn()">Make Caption text left-aligned</a>
<a class="btn btn-default" ng-click="resetAttrBtn()">Reset Attributes</a>
</p>
```