---
title: Exporting Charts | FusionCharts
description: This article focuses on how you can export your chart using ember.
heading: Exporting Charts
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. This article focuses on how you can export charts using `ember-fusioncharts` component.

In this section we will discuss how to:

* [Export Charts as Image and PDF]({% site.baseurl %}/getting-started/ember/export-charts-using-ember#export-charts-as-image-and-pdf-1)
* [Export Multiple Charts]({% site.baseurl %}/getting-started/ember/export-charts-using-ember#export-multiple-charts-4)
* [Modes of Export]({% site.baseurl %}/getting-started/ember/export-charts-using-ember#modes-of-export-7)
* [Export Chart Data]({% site.baseurl %}/getting-started/ember/export-charts-using-ember#export-chart-data-8)

## Export Charts as Image and PDF

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

> You must have an active internet connection for this feature to work.

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to __1__. The <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_chartData exporting-as-image-and-pdf-introduction-example-1.js json %}

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the **Column 2D** chart. The code is given below:

```
/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
    let app = new EmberAddon(defaults, {
        // Add options here
    });

    // Import FusionCharts library
    app.import('bower_components/fusioncharts/fusioncharts.js');
    app.import('bower_components/fusioncharts/fusioncharts.charts.js');        
    app.import('bower_components/fusioncharts/themes/fusioncharts.theme.fusion.js');

    return app.toTree();
};
```

In the above code necessary libraries and components have been included using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

export default Component.extend({
    width: 700,
    height: 400,
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
            "exportEnabled": "1"
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
    }
});
```

In the above code:

1. A chart component is created to render the chart.

2. To update the chart we have generated random data using **Math.random()**.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.
    * Set the value of `exportEnabled` attribute to `1`, which enables the export feature of the chart.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
}}
```

In the above code `fusioncharts` component is added to `chart-viewer.hbs` template to render the chart.

## Export Multiple Charts

FusionCharts lets you export multiple charts in a single image at once, in different formats. In the sample given below, we have two charts-Column2D and Stacked Column2D chart.

<div  style="background-color: #ffffff;">
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-3.js %}</p>
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-4.js %}</p>
</div>

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the **Column 2D** chart. The code is given below:

```
/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
    let app = new EmberAddon(defaults, {
        // Add options here
    });

    // Import FusionCharts library
    app.import('bower_components/fusioncharts/fusioncharts.js');
    app.import('bower_components/fusioncharts/fusioncharts.charts.js');        
    app.import('bower_components/fusioncharts/themes/fusioncharts.theme.fusion.js');    

    return app.toTree();
};
```

In the above code necessary libraries and components have been included using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

export default Component.extend({
    width: 700,
    height: 400,
    chartType1: 'column2d',
    dataFormat: 'json',
    dataSource1: {
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
    },    
    chartType2: 'stackedcolumn2d',    
    dataSource2: {
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
		    }, {
		        label: "China"
		    }, {
		        label: "Russia"
		    }, {
		        label: "Australia"
		    }, {
		        label: "United States"
		    }, {
		        label: "France"
		    }]
		}],
		dataSet: [{
		    seriesName: "Coal",
		    data: [{
		        value: "400"
		    }, {
		        value: "830"
		    }, {
		        value: "500"
		    }, {
		        value: "420"
		    }, {
		        value: "790"
		    }, {
		        value: "380"
		    }]
		}, {
		    seriesName: "Hydro",
		    data: [{
		        value: "350"
		    }, {
		        value: "620"
		    }, {
		        value: "410"
		    }, {
		        value: "370"
		    }, {
		        value: "720"
		    }, {
		        value: "310"
		    }]
		}, {
		    seriesName: "Nuclear",
		    data: [{
		        value: "210"
		    }, {
		        value: "400"
		    }, {
		        value: "450"
		    }, {
		        value: "180"
		    }, {
		        value: "570"
		    }, {
		        value: "270"
		    }]
		}, {
		    seriesName: "Gas",
		    data: [{
		        value: "180"
		    }, {
		        value: "330"
		    }, {
		        value: "230"
		    }, {
		        value: "160"
		    }, {
		        value: "440"
		    }, {
		        value: "350"
		    }]
		}, {
		    seriesName: "Oil",
		    data: [{
		        value: "60"
		    }, {
		        value: "200"
		    }, {
		        value: "200"
		    }, {
		        value: "50"
		    }, {
		        value: "230"
		    }, {
		        value: "150"
		    }]
		}]
	},
    actions: {
        exportPdf() {
            FusionCharts.batchExport({
                exportFormat: 'pdf'
            });
        }
    }        
});
```

In the above code:

1. A chart component is created to render the chart.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d` for the first chart and `stackedcolumn2d` for the second chart. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

3. To export multiple charts as PDF, set the `batchExport` to PDF.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
        width=width
        height=height
        type=chartType1
        dataFormat=dataFormat
        dataSource=dataSource1}}

{{fusioncharts-xt
    width=width
    height=height
    type=chartType2
    dataFormat=dataFormat
    dataSource=dataSource2
    events=events}}
    
<button {{action "exportPdf"}}>EXPORT BOTH CHART AS SINGLE PDF</button>
```

In the above code:

1. `fusioncharts` component is added to `chart-viewer.hbs` template to render both the charts.

2. A **button** has been added using `<button>` to export charts when clicked.