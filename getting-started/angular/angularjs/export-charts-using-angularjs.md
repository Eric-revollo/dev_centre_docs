---
title: Exporting Charts | FusionCharts
description: This article focuses on how you can export your chart using angularjs.
heading: Exporting Charts
chartPresent: true
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. This article focuses on how you can export charts using `angularjs-fusioncharts` component.

In this section we will discuss how to:

* [Export Charts as Image and PDF]({% site.baseurl %}/getting-started/angular/angularjs/export-charts-using-angularjs#export-charts-as-image-and-pdf-1)
* [Export Multiple Charts]({% site.baseurl %}/getting-started/angular/angularjs/export-charts-using-angularjs#export-multiple-charts-2)
* [Modes of Export]({% site.baseurl %}/getting-started/angular/angularjs/export-charts-using-angularjs#modes-of-export-3)
* [Export Chart Data]({% site.baseurl %}/getting-started/angular/angularjs/export-charts-using-angularjs#export-chart-data-4)

## Export Charts as Image and PDF

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

> You must have an active internet connection for this feature to work.

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to __1__. The <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_all exporting-as-image-and-pdf-introduction-example-1.js %}

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
        "exportEnabled": "1", //Export Your Chart
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
}
```

The JavaScript code of the above sample is given below:

```
var myApp = angular.module('myApp', ['ng-fusioncharts']);
myApp.controller('MyController', ['$scope', function($scope){
    $scope.myDataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        "data": [
            { "label": "Venezuela", "value": "290" },
            { "label": "Saudi", "value": "260" },
            { "label": "Canada", "value": "180" },
            { "label": "Iran", "value": "140" },
            { "label": "Russia", "value": "115" },
            { "label": "UAE", "value": "100" },
            { "label": "US", "value": "30" },
            { "label": "China", "value": "30"}
        ]
    };
}]);
```

The HTML code of the above sample is given below:

```HTML
<div ng-app="myApp">
    <div ng-controller="MyController">
        <fusioncharts 
            width="700" 
            height="400"
            type="column2d"
            datasource="{{myDataSource}}">
        </fusioncharts>
    </div>
</div>
```

## Export Multiple Charts

FusionCharts lets you export multiple charts in a single image at once, in different formats. In the sample given below, we have two charts-Column2D and Stacked Column2D chart.

<div  style="background-color: #ffffff;">
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-3.js %}</p>
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-4.js %}</p>
</div>

The JSON data to render the above chart is given below:

```
{
    data1: {
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
    data2: {
        "chart": {
            "caption": "Yearly Energy Production Rate",
            "subCaption": " Top 5 Developed Countries",
            "numbersuffix": " TWh",
            "showSum": "1",
            "plotToolText": "$label produces <b>$dataValue</b> of energy from $seriesName",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Canada"
            }, {
                "label": "China"
            }, {
                "label": "Russia"
            }, {
                "label": "Australia"
            }, {
                "label": "United States"
            }, {
                "label": "France"
            }]
        }],
        "dataSet": [{
            "seriesName": "Coal",
            "data": [{
                "value": "400"
            }, {
                "value": "830"
            }, {
                "value": "500"
            }, {
                "value": "420"
            }, {
                "value": "790"
            }, {
                "value": "380"
            }]
        }, {
            "seriesName": "Hydro",
            "data": [{
                "value": "350"
            }, {
                "value": "620"
            }, {
                "value": "410"
            }, {
                "value": "370"
            }, {
                "value": "720"
            }, {
                "value": "310"
            }]
        }, {
            "seriesName": "Nuclear",
            "data": [{
                "value": "210"
            }, {
                "value": "400"
            }, {
                "value": "450"
            }, {
                "value": "180"
            }, {
                "value": "570"
            }, {
                "value": "270"
            }]
        }, {
            "seriesName": "Gas",
            "data": [{
                "value": "180"
            }, {
                "value": "330"
            }, {
                "value": "230"
            }, {
                "value": "160"
            }, {
                "value": "440"
            }, {
                "value": "350"
            }]
        }, {
            "seriesName": "Oil",
            "data": [{
                "value": "60"
            }, {
                "value": "200"
            }, {
                "value": "200"
            }, {
                "value": "50"
            }, {
                "value": "230"
            }, {
                "value": "150"
            }]
        }]
    }
}
```

The JavaScript code of the above sample is given below:

```
var myApp = angular.module("myApp", ["ng-fusioncharts"]);
myApp.controller("MyController", ["$scope", function($scope) {
    // datasource for first chart
    $scope.firstDataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
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
    };
    //datasource for second chart 
    $scope.secondDataSource = {
        chart: {
            caption: "Yearly Energy Production Rate",
            subCaption: " Top 5 Developed Countries",
            numbersuffix: " TWh",
            showSum: "1",
            plotToolText: "$label produces <b>$dataValue</b> of energy from $seriesName",
            theme: "fusion"
        },
        categories: [{
            category: [{
                    label: "Canada"
                },
                {
                    label: "China"
                },
                {
                    label: "Russia"
                },
                {
                    label: "Australia"
                },
                {
                    label: "United States"
                },
                {
                    label: "France"
                }
            ]
        }],
        dataSet: [{
                seriesName: "Coal",
                data: [{
                        value: "400"
                    },
                    {
                        value: "830"
                    },
                    {
                        value: "500"
                    },
                    {
                        value: "420"
                    },
                    {
                        value: "790"
                    },
                    {
                        value: "380"
                    }
                ]
            },
            {
                seriesName: "Hydro",
                data: [{
                        value: "350"
                    },
                    {
                        value: "620"
                    },
                    {
                        value: "410"
                    },
                    {
                        value: "370"
                    },
                    {
                        value: "720"
                    },
                    {
                        value: "310"
                    }
                ]
            },
            {
                seriesName: "Nuclear",
                data: [{
                        value: "210"
                    },
                    {
                        value: "400"
                    },
                    {
                        value: "450"
                    },
                    {
                        value: "180"
                    },
                    {
                        value: "570"
                    },
                    {
                        value: "270"
                    }
                ]
            },
            {
                seriesName: "Gas",
                data: [{
                        value: "180"
                    },
                    {
                        value: "330"
                    },
                    {
                        value: "230"
                    },
                    {
                        value: "160"
                    },
                    {
                        value: "440"
                    },
                    {
                        value: "350"
                    }
                ]
            },
            {
                seriesName: "Oil",
                data: [{
                        value: "60"
                    },
                    {
                        value: "200"
                    },
                    {
                        value: "200"
                    },
                    {
                        value: "50"
                    },
                    {
                        value: "230"
                    },
                    {
                        value: "150"
                    }
                ]
            }
        ]
    };

    $scope.exportChart = function() {
        // export charts
        FusionCharts.batchExport({
            exportFormat: "pdf"
        })
    }
}]);
```

The HTML code of the above sample is given below:

```HTML
<div ng-app="myApp">
  <div ng-controller="MyController"> 
    <fusioncharts
        width="700"
        height="400"
        type="column2D"
        datasource="{{firstDataSource}}"
        >
    </fusioncharts>
    <fusioncharts
        width="700"
        height="400"
        type="stackedcolumn2d"
        datasource="{{secondDataSource}}">
    </fusioncharts>
    <div style="display: flex;justify-content: center">
        <button ng-click="exportChart()">Export both charts as a single PDF</button>
    </div>
  </div>
</div>
```

## Modes of Export

FusionCharts Suite XT supports the following three modes of export:

* Server-side export
* Client-side export
* Auto-export

By default, charts are exported using the auto-export feature. 

The `exportMode` attribute is used to switch between the different modes of export.

> Starting from version v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute.

To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server]({% site.baseurl %}/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.

## Export Chart Data

FusionCharts lets you export the rendered charts in JPG, PNG, SVG, and PDF formats. Starting v3.11.0, FusionCharts Suite XT introduces exporting chart data in the XLS format (as an Excel spreadsheet).

To enable chart exporting, set the chart level attribute `exportEnabled` to __1__. The <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over the button to see a dropdown menu with the export options, as shown in the image below:

![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-menu.jpg)

To export chart data, select the __Export as XLS__ option. The XLS file with the chart data gets downloaded to your machine.

A column 2D chart with export enabled is shown below. Click the <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the __Export as XLS__ option to export the chart data.

{% embed_all exporting-as-image-and-pdf-introduction-example-2.js %}

> To export a chart in the XLS format using server-side exporting, it is mandatory that the exporting server has the latest code, available in the FusionCharts package. Alternatively, you can also use the FusionCharts export link, `export.api3.fusioncharts.com`. For client-side exporting, the exporting chart data feature is supported only by modern browsers with canvas support (except Safari and IE9). You can still export your charts, without including the configurable data.

> To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server]({% site.baseurl %}/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.