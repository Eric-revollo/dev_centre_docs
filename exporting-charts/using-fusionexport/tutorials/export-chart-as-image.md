---
title: Export chart as image | FusionCharts
description: This article talks about the SDKs used for exporting charts as images.
heading: Export chart as image
---

Exporting a single chart as an image (`.png`, the default output format) is the simplest task that you can accomplish with FusionExport. In this article, you will learn how to export a chart.

## Prerequisites

Before starting with the code, ensure that you have:

* [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running
* [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

## Chart Configuration
The chart configuration files are simple `.json` files. If you are executing the template code without any changes, the chart configuration file should be in the following path:

```bash
[code_executed_from_this_directory]/resources/chart-config-file.json
```

> It is **not** mandatory to create a file containing the chart configuration. In the code, you can directly create an object containing a serialized JSON string representation of the chart configuration, and pass it on to the `ExportConfig.set()` object of the FusionExport SDK you are using. For more clarity, see the inline comments in the [template code](/exporting-charts/using-fusionexport/tutorials/export-chart-as-image#code-3).

The accepted format of configuration is the same as that of charts which you can generate using [FusionCharts Suite](https://www.fusioncharts.com/download/fusioncharts-suite). Refer to [Chart Attributes](/chart-attributes/?chart=column2d) for detailed information on the possible configurations of the charts.

Except for the case of exporting dashboards, all other exports work on the basis of the chart configuration that you create. Here, we will use the configuration of a simple Column 2D chart.

```javascript
[{
    "type": "column2d",
    "renderAt": "chart-container",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Number of visitors in the last 3 days",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "theme": "fusion"
        },
        "data": [{
                "label": "Mon",
                "value": "15123"
            },
            {
                "label": "Tue",
                "value": "14233"
            },
            {
                "label": "Wed",
                "value": "25507"
            }
        ]
    }
}]
```

Based on the above configuration, the exported chart will look like the illustration below.

![Export-Chart-As-Image](/images/export-chart-as-image-1.png)

## Code

Before you start with the code, we suggest going through the steps that the code accomplishes.

1. Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.

2. Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method.

3. Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).

4. Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

> The above guidelines may vary slightly based on the programming language you are using, and the customizations you want on top of the defaults.

> In most cases, the default output file name is `export--1.png`. If you execute the template code without any changes, you can find it in the same directory from where the code has been executed.

> For detailed information on the vast number of possibilities, refer to [FusionExport SDK API Reference](/exporting-charts/using-fusionexport/sdk-api-reference/nodejs), and select the SDK of your choice from the left navigation panel.

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
	<li class="active"><a data-toggle="csharp">C#</a></li>
	<li><a data-toggle="java">Java</a></li>
	<li><a data-toggle="php">PHP</a></li>
	<li><a data-toggle="nodejs">Node.js</a></li>
	<li><a data-toggle="python">Python</a></li>
</ul>

<div class="tab-content extra-tabs">

<div class="tab csharp-tab">
<pre><code class="language-cs">
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
    public static class ExportSingleChart
    {
        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT)
        {
            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig exportConfig = new ExportConfig();
            List<string> results = new List<string>();

            // Instantiate the ExportManager class
            using (ExportManager exportManager = new ExportManager())
            {
                exportConfig.Set("chartConfig", File.ReadAllText("./resources/chart-config-file.json"));

                // Call the Export() method with the export config
                results.AddRange(exportManager.Export(exportConfig, outputDir = ".", unzip = true));
            }

            foreach (string path in results)
            {
                Console.WriteLine(path);
            }

            Console.Read();

        }

    }
}
</code></pre>
</div>

<div class="tab java-tab">
<pre><code class="language-java">
import com.fusioncharts.fusionexport.client.*; // import sdk

public class Script {
    public static void main(String[] args) throws Exception {
        String configPath = "resources/chart-config-file.json";

        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        // Provide path of the chart configuration which we have defined above.
        // You can also pass the same object as serialized JSON.
        config.set("chartConfig", configPath);

        // Instantiate the ExportManager class
        ExportManager manager = new ExportManager();
        // Call the export() method with the config and the respective callbacks
        manager.export(config, outputDir = ".", unzip = true);
  }
}
</code></pre>
</div>

<div class="tab php-tab">
<pre><code class="language-php">
<?php
  // Import dependencies
  require DIR__ . '/../vendor/autoload.php';
  use FusionExport\ExportManager;
  use FusionExport\ExportConfig;

  // Instantiate the ExportConfig class and add the required configurations
  $exportConfig = new ExportConfig();
  // Provide path of the chart configuration which we have defined above.  
  // You can also pass the same object as serialized JSON.
  $exportConfig->set('chartConfig', realpath('resources/chart-config-file.json'));

  // Instantiate the ExportManager class
  $exportManager = new ExportManager();

  // Call the export() method with the exportConfig and the respective callbacks
  $exportManager->export($exportConfig, $outputDir = '.', $unzip = true);
?>
</code></pre>
</div>

<div class="tab nodejs-tab">
<pre><code class="language-javascript">
// ********** IMPORT AND RESOLVE DEPENDENCIES ***********

// Import 'path' core module of Node.js
const path = require('path');

// Import FusionExport SDK client for Node.js
const {
    ExportManager,
    ExportConfig
} = require('fusionexport-node-client');


// ********** EXPORT CONFIG ***********

// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();

// Provide path of the chart configuration which we have defined above.
// You can also pass the same object as serialized JSON.
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'chart-config-file.json'));


// ********** EXPORT-MANAGER ***********

// Instantiate ExportManager
const exportManager = new ExportManager();


// ***** OUTPUT ******

// Provide the exportConfig. By default it returns a promise.
// Optionally, print the exported file names and error messages, if any

exportManager.export(exportConfig, outputDir = '.', unzip = true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});
</code></pre>
</div>

<div class="tab python-tab">
<pre><code class="language-python">
# Import sdk
from fusionexport import ExportManager, ExportConfig

# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()

# Provide path of the chart configuration which we have defined above.
# You can also pass the same object as serialized JSON.
export_config["chartConfig"] = read_file("resources/chart-config-file.json")

# Provide port and host of FusionExport Service
export_server_host = "127.0.0.1"
export_server_port = 1337

# Instantiate the ExportManager class
em = ExportManager(export_server_host, export_server_port)

# Call the export() method with the export_config as an argument
em.export(export_config, outputDir = ".", unzip = True)
</code></pre>
</div>
</div>
</div>

## Next Steps

After you have exported a single chart as an image, we recommend learning how to:

* [Change the Export Type](/exporting-charts/using-fusionexport/tutorials/change-the-export-type)

* [Change the Export Quality](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)
