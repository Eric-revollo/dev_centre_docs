---
title: Create a Chart in jQuery | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the jquery-fusioncharts component.
heading: Create a Chart in jQuery Using FusionCharts
author: sowmya
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight jQuery plugin which provides bindings for FusionCharts. The `jquery-fusioncharts` plugin allows you to easily add rich and interactive charts to any jQuery project.

On this page, we'll see how to install FusionCharts and render a chart using the `jquery-fusionCharts` plugin.

## Prerequisite

In case of including Fusioncharts dependencies from **CDN** or **Local Files**, you can skip this step and get started with the code mentioned in the below steps.

- jQuery requires Node.js and NPM installed your machine. Please check it by running `node -v` and `npm -v` respectively. If either of them returns command not found, then please go to [Node.js](https://nodejs.org/) website to install it properly.

> Initialize npm, install webpack locally, and install the webpack-cli. Make sure you run `npx webpack` command in the terminal to ensure that the build is successful.

Follow the steps mentioned [here](https://webpack.js.org/guides/getting-started/) to initialize a jQuery project through npm.
If you choose to install `fusioncharts` package via **npm**, make sure you have Node.js and NPM installed in your system. Please check it by running `node -v` and `npm -v` respectively. To get Node.js, go to the [official website](https://nodejs.org/).

## Installation and including dependencies

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<div class='mt-30'>To install the FusionCharts package and the `jquery-fusioncharts` component include the following code in the html file</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- jQuery --&gt;
    &lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script>
    &lt;!-- FusionCharts --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- jQuery-FusionCharts --&gt;
    &lt;script type="text/javascript" src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script>
    &lt;!-- Fusion Theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div class='mt-30'>Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- jQuery --&gt;
    &lt;script type="text/javascript" src="path/to/local/jquery.min.js"&gt;&lt;/script&gt;
    &lt;!-- FusionCharts --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- jQuery-FusionCharts --&gt;
    &lt;script type="text/javascript" src="path/to/local/jquery-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Fusion Theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab npm-tab'>
<div class='mt-30'>Follow the steps mentioned [here](https://webpack.js.org/guides/getting-started/) to initialize a jQuery project through npm.</div>
<div class='mt-30'>You can install the `jquery-fusioncharts` and `fusioncharts` components through npm as shown below</div>
<pre><code class="language-javascript">
    $ npm install jquery-fusioncharts fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-30'>After installing the fusioncharts components, add the references for the dependencies within `index.js`. Import all the required dependencies to get started.</div>
<pre><code class="language-javascript">
//Including FusionCharts Dependencies
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
var $ = require('jquery');
var jQueryFusionCharts = require('jquery-fusioncharts');

Charts(FusionCharts); // Resolve Charts as dependency for FusionCharts

FusionTheme(FusionCharts); // Resolve Fusion theme as dependency for FusionCharts

jQueryFusionCharts(FusionCharts); //Resolve jQueryFusionCharts as dependency for FusionCharts
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</div>

</div>
</div>

That completes the installation of `FusionCharts` and the `jquery-fusioncharts` plugin.

## Preparing the data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along the x-axis and 'No. of oil reserves' as **data values** along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will take the below shape.

```javascript
// Preparing the chart data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];
```

## Configure your chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```javascript
// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", //Set the chart type
  width: "700", //Set the chart width
  height: "400", //Set the chart height
  dataFormat: "json", //Set the type of data
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
    subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
    xAxisName: "Country", //Set the x-axis name
    yAxisName: "Reserves (MMbbl)", //Set the y-axis name
    numberSuffix: "K",
    theme: "fusion" //Set the theme for your chart
  },
  // Chart Data - from step 2
  data: chartData
};
```

> Have a look at different chart types with their aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

## Render the chart

Get ready to render your first chart finally with the steps below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab cdn-tab active'>
<pre><code class="language-html">
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- Include jQuery --&gt;
        &lt;script type="text/javascript" src=" https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script>
        &lt;!-- Include fusioncharts core library file --&gt;
        &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
        &lt;!-- Include fusion theme file --&gt;
        &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
        &lt;!-- Include fusioncharts jquery plugin --&gt;
        &lt;script type="text/javascript" src=" https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script>
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript"&gt;
            //STEP 2 - Chart Data
            const chartData = [{
                label: "Venezuela",
                value: "290"
            }, {
                label: "Saudi",
                value: "260"
            }, {
                label: "Canada",
                value: "180"
            }, {
                label: "Iran",
                value: "140"
            }, {
                label: "Russia",
                value: "115"
            }, {
                label: "UAE",
                value: "100"
            }, {
                label: "US",
                value: "30"
            }, {
                label: "China",
                value: "30"
            }]
            //STEP 3 - Chart Configurations
        	const chartConfigs = {
                type: "column2d",
                width: "700",
                height: "400",
                dataFormat: "json",
                dataSource: {
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
                    "data": chartData
                }
            }
            // Create a chart container
            $('document').ready(function () {
                $("#chart-container").insertFusionCharts(chartConfigs);
            });
        &lt;/script&gt;
        &lt;div id="chart-container"&gt;FusionCharts will render here&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-html">
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- Include jQuery --&gt;
        &lt;script type="text/javascript" src="path/to/local/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusioncharts core library file --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusion theme file --&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusioncharts jquery plugin --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript"&gt;
            //STEP 2 - Chart Data
            const chartData = [{
                label: "Venezuela",
                value: "290"
            }, {
                label: "Saudi",
                value: "260"
            }, {
                label: "Canada",
                value: "180"
            }, {
                label: "Iran",
                value: "140"
            }, {
                label: "Russia",
                value: "115"
            }, {
                label: "UAE",
                value: "100"
            }, {
                label: "US",
                value: "30"
            }, {
                label: "China",
                value: "30"
            }];
          //STEP 3 - Chart Configurations
        	const chartConfigs = {
                type: "column2d",
                width: "700",
                height: "400",
                dataFormat: "json",
                dataSource: {
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
                    "data": chartData
                }
            }
            // Create a chart container
            $('document').ready(function () {
                $("#chart-container").insertFusionCharts(chartConfigs);
            });
        &lt;/script&gt;
        &lt;div id="chart-container"&gt;FusionCharts will render here&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab npm-tab'>
<div><strong>Step 1</strong>: In `index.js` include the necessary files and import the fusioncharts dependency. The consolidated code is shown below:</div>
<pre><code class="language-javascript">
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
var $ = require('jquery');
var jQueryFusionCharts = require('jquery-fusioncharts');
$('document').ready(function () {
    Charts(FusionCharts);* // Resolve Charts as dependency for FusionCharts*
    FusionTheme(FusionCharts);*  // Resolve Fusion theme as dependency for FusionCharts*
    jQueryFusionCharts(FusionCharts);* //Resolve jQueryFusionCharts as dependency for FusionCharts*
    //STEP 2 - Chart Data
    const chartData = [{
        label: "Venezuela",
        value: "290"
    }, {
        label: "Saudi",
        value: "260"
    }, {
        label: "Canada",
        value: "180"
    }, {
        label: "Iran",
        value: "140"
    }, {
        label: "Russia",
        value: "115"
    }, {
        label: "UAE",
        value: "100"
    }, {
        label: "US",
        value: "30"
    }, {
        label: "China",
        value: "30"
    }];
    //STEP 3 - Chart Configurations
    const chartConfigs = {
        type: "column2d",
        width: "700",
        height: "400",
        dataFormat: "json",
        dataSource: {
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
            "data": chartData
        }
    }
    $("#chart-container").insertFusionCharts(chartConfigs);
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<div class='mt-30'><strong>Step 2: Specify the chart container within the `index.html` file.</strong></div>
<pre><code class="language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Getting Started&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="chart-container"&gt;Fusioncharts will render here&lt;/div&gt;
    &lt;script src="main.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<div class='mt-30'><strong>Step 3: Run `npx webpack` command in the terminal. Once the build is successful, open the `index.html` file to see your chart.</strong></div>
</div>

</div>
</div>

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `jquery-fusioncharts` is ready.
