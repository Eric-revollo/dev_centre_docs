---
title: Your First Chart in React Native using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the react-native-fusioncharts component.
heading: Create a Chart in React Native using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React Native** component which provides bindings for **FusionCharts**. The `react-native-fusioncharts` component allows you to easily add rich and interactive charts to any **React Native** project. 

In this page, we'll see how to install FusionCharts and render a chart using the `react-native-fusioncharts` component.

## Installation

Install **FusionCharts** and the `react-native-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='android'>Android</a></li>
    <li><a data-toggle='ios'>iOS</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab android-tab active'>

<div><strong>Step 1:</strong> To install fusioncharts and the `react-native-fusioncharts` component via npm follow the steps below:</div>
<div>1. Install the `react-native-fusioncharts` module</div>
<pre><code class="language-javascript">
    $ npm install react-native-fusioncharts --save
</code></pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="language-javascript">
    $ npm install fusioncharts --save
</code></pre>
<div><strong>Step 2:</strong> To setup the `react-native-fusioncharts` component for <strong>Android</strong>, follow the steps given below:</div>
<div>
    <ul>
        <li>Create a folder named `assets` under `android/app/src/main` directory if it doesn't exist.</li>
        <li>Copy `FusionCharts` library files (node_modules/fusioncharts folder) in the `assets` folder.</li>
        <li>Create a `fusioncharts.html` file in `assets` folder. Include the FusionCharts library files in `fusioncharts.html` file using &lt;script&gt; tag.</li>
        <pre><code class="language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;FusionCharts&lt;/title&gt;
    &lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /&gt;

    &lt;style type="text/css"&gt;
        body,
        html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-size: 13px;
        }

        #chart-container {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            user-select: none;
            -webkit-user-select: none;
            overflow: hidden;
        }

        #loading-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            user-select: none;
            -webkit-user-select: none;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id="chart-container"&gt;
        &lt;div id="loading-text"&gt;
            Chart is loading...
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script type='text/javascript'&gt;
        "use strict";
        (function() {
            var a = Promise.resolve(),
                b = {},
                c = {};
            (function d() {
                var f = function() {
                    function g() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return g() + g() + "-" + g() + "-" + g() + "-" + g() + "-" + g() + g() + g()
                };
                window.webViewBridge = {
                    send: function send(g, h, i, j) {
                        i = i || function() {}, j = j || function() {};
                        var k = {
                                targetFunc: g,
                                data: h || {},
                                msgId: f()
                            },
                            l = JSON.stringify(k);
                        a = a.then(function() {
                            return new Promise(function(m, n) {
                                b[k.msgId] = {
                                    resolve: m,
                                    reject: n
                                }, c[k.msgId] = {
                                    onsuccess: i,
                                    onerror: j
                                }, window.postMessage(l)
                            })
                        }).catch(function() {})
                    }
                }, window.document.addEventListener("message", function(g) {
                    var h;
                    try {
                        h = JSON.parse(g.data)
                    } catch (i) {
                        return
                    }
                    b[h.msgId] && (b[h.msgId].resolve(), delete b[h.msgId]), h.args && c[h.msgId] && (h.isSuccessfull ? c[h.msgId].onsuccess.apply(null, h.args) : c[h.msgId].onerror.apply(null, h.args), delete c[h.msgId])
                })
            })()
        })();
    &lt;/script&gt;

    &lt;!-- Include the required FusionCharts modules --&gt;
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.charts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
        </code></pre>
        <div>To include the specific chart types, individually add the following files using <strong>&lt;script&gt;</strong> tag:</div>
        <div>1. <strong>PowerCharts</strong> - `fusioncharts/fusioncharts.powercharts`<br/>
            2. <strong>Widgets</strong> - `fusioncharts/fusioncharts.widgets`<br/>
            3. <strong>Gantt</strong> - `fusioncharts/fusioncharts.gantt`<br/>
            4. <strong>Treemap</strong> -  `fusioncharts/fusioncharts.treemap`<br/>
            5. <strong>Zoomscatter</strong> - `fusioncharts/fusioncharts.zoomscatter`<br/>
            6. <strong>Zoomline</strong> - `fusioncharts/fusioncharts.zoomline`<br/>
            7. <strong>Overlapped Bar</strong> - `fusioncharts/fusioncharts.overlappedbar2d`<br/>
            8. <strong>Overlapped Column</strong> - `fusioncharts/fusioncharts.overlappedcolumn2d`</div>
        <li>Set `libraryPath` property to the FusionCharts component.</li>
        <pre><code class="language-javascript">
&lt;FusionCharts 
......
libraryPath={{ uri: 'file:///android_asset/fusioncharts.html' }}/&gt;
        </code></pre>
        <li>Add the following script in Application's `package.json` file to bundle your assets when you want to generate a signed APK.</li>
        <pre><code class="language-javascript">
"scripts": {
    ......
    "clean:build:android": "rm -rf android/app/build",
    "prod:android": "npm run clean:build:android  && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
},
        </code></pre>
        <li>Run the following command before genarating the signed APK:</li>
        <pre><code class="language-javascript">
$ npm run prod:android
        </code></pre>
    </ul>
</div>
<button class='btn btn-outline-secondary btn-copy' title='Copied!'>COPY</button>
</div>

<div class='tab ios-tab'>

<div><strong>Step 1:</strong> To install fusioncharts and the `react-fusioncharts` component via npm follow the steps below:</div>
<div>1. Install the `react-native-fusioncharts` module</div>
<pre><code class="language-javascript">
    $ npm install react-native-fusioncharts --save
</code></pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="language-javascript">
    $ npm install fusioncharts --save
</code></pre>
<div><strong>Step 2:</strong> To setup the `react-native-fusioncharts` component for <strong>iOS</strong>, follow the steps given below:</div>

<div>
    <ul>
        <li>Create a folder named `assets` in your project `root` if it doesn't exist.</li>
        <li>Copy `FusionCharts` library files in the `assets` folder.</li>
        <li>Create a `fusioncharts-tpl.html` file in `assets` folder. Include the FusionCharts library files in `fusioncharts.html` file using &lt;script&gt; tag.</li>
        <pre><code class="language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;!-- Include the required FusionCharts modules --&gt;
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/fusioncharts.charts.js"&gt;&lt;/script&gt;
    &lt;script type='text/javascript' src="fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;&lt;/body&gt;

&lt;/html&gt;
        </code></pre>
        <li>Add a `build"assets` script in Application's `package.json` file</li>
        <pre><code class="language-javascript">
"scripts": {
    ......
    "build:assets": "fc-build-assets --fc-template ./assets/fusioncharts-tpl.html --fc-library ./assets/fusioncharts"
},
        </code></pre>
        <li>The `--fc-library ./assets/fusioncharts` is required when you copy FusionCharts library files in your `assets` folder.<br/>
        <strong>Note:</strong> `fc-build-assets` is a utility binary provided by `react-native-fusioncharts` to package the FusionCharts modules(.js files) referenced in template(.html file) as needed by the React Native iOS build process.</li>
        <li>Run the following command before running the application:</li>
        <pre><code class="language-javascript">
$ npm run build:assets
        </code></pre>
    </ul>
</div>

<button class='btn btn-outline-secondary btn-copy' title='Copied!'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts and the `react-native-fusioncharts` component.

## Create your first chart

Let's create a Column 2D chart using the react-native-fusioncharts component showing the "Countries With Most Oil Reserves". 

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart-example-1.js %}

The data for the above chart is shown in the table below:

Country|No. of Oil Reserves||
-|-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format, as shown below:

```json
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
}
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example, [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts. 

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

To render the chart, follow the steps below:

1. Include **react**

2. Include `react-native-fusioncharts` component

3. Define the chart configuration in a JSON.
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of the `dataSource`.

4. Specify the location of `fusioncharts.html` for **Android** and **iOS**.

5. Add `style` to the container of the chart.

> The `JavaScript` code to create a chart in **Android** and **iOS** is same.

Copy the following code to `app.js` file.

```
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class PlainColumn2D extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "column2d",
            width: "700",
            height: "400",
            dataFormat: "json",
            dataSource: {
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
            }
        };
        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            android: {
                uri: "file:///android_asset/fusioncharts.html"
            },
            ios: require("./assets/fusioncharts.html")
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>A Column 2D Chart</Text>
                <View style={styles.chartContainer}>
                <FusionCharts
                type={this.state.type}
                width={this.state.width}
                height={this.state.height}
                dataFormat={this.state.dataFormat}
                dataSource={this.state.dataSource}
                libraryPath={this.libraryPath} // set the libraryPath property
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 10
    },
    chartContainer: {
        height: 400,
        borderColor: "#000",
        borderWidth: 1
    }
});
```

That's it! Your first chart using `react-native-fusioncharts` is ready.