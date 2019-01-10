---
title: FusionTime Attributes | FusionCharts
description: This article contains the list of fusion time attributes.
heading: Attributes
---

This article contains the list of attributes of FusionTime. The attributes have been differentiated by FusionTime components.

## Time Axis

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`plot`</td>
		<td>String</td>
		<td>Defines the column, which will be plotted along this axis.</td>
	</tr>
	<tr>
		<td>`timeMarker`</td>
		<td>Array(Time Marker Configuration)</td>
		<td>Array of `TimeMarkerConfigs` that will be shown along the axis.</td>
	</tr>
</table>

```
new FusionCharts({
    type: 'timeseries',
    ...
    dataSource: {
		xAxis {
			plot: ' ', //Column Name
			timemarker: [{
				// Attributes of Time Marker
            }] 
		}
    },
});
```

## Time Markers

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>Sets the label of the time marker.</td>
	</tr>
	<tr>
		<td>`start`</td>
		<td>String</td>
		<td>Sets the start time of the marker. Corresponds to the start of the date/time.</td>
	</tr>
	<tr>
		<td>`end`</td>
		<td>String</td>
		<td>Sets the end time of the marker. If this is attribute is not specified, the marker is represented as a line and not as a band. Corresponds to the end of the given date/time.</td>
	</tr>
	<tr>
		<td>`timeFormat`</td>
		<td>String</td>
		<td>Sets the date/time format and specifies the start and end values for the time marker.</td>
	</tr>
	<tr>
		<td>`unit`</td>
		<td>String</td>
		<td>Defines the time unit for the time marker.</td>
	</tr>
	<tr>
		<td>`multiplier`</td>
		<td>NUmber</td>
		<td>Sets the multiplier of the time unit. Default is 1.</td>
	</tr>
</table>

```
new FusionCharts({
    type: 'timeseries',
    ...
    dataSource: {
		xAxis {
			plot: ' ', //Column Name
			timemarker: [{
				// Attributes of Time Marker
                start: ' ', //Start Date
                end: ' ', //End Date
                label: ' ', //Label of the Time Axis
                timeFormat: ' ', //Time format
                // Define the frequency, at which the cyclic time marker will be repeated.
                repeat {
			        unit: ' ', //Defines the time unit for the time marker.
			        multiplier: ' ' //Defines the multiplier of the time unit.
			    }
            }] 
		}
    },
});
```

## Y Axes

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`plot`</td>
		<td>String, Array of Strings, Array of Objects</td>
		<td>It maps to the column header for the measure which is plotted against the Y Axis. If it's an array of strings, all the strings are plotted against the same axis. If its an array of objects, the developer can additionally specify the type of the plot as well as the aggregation strategy used to represent the measure.</td>
	</tr>
	<tr>
		<td>`plotType`</td>
		<td>String</td>
		<td>This attribute sets the type of the the data plot to render the chart. By default the type is a line. It controls the plot type for all names specified.</td>
	</tr>
	<tr>
		<td>`min`</td>
		<td>Number</td>
		<td>This attribute sets the minimum value of the axis. The value of this attribute is ignored when the value is greater than the minimum value of the data plotted against the axis.</td>
	</tr>
	<tr>
		<td>`max`</td>
		<td>Number</td>
		<td>This attribute sets the maximum value of the axis. The value of this attribute is ignored when the value is less than the maximum value of the data plotted against the axis.</td>
	</tr>
	<tr>
		<td>`format`</td>
		<td>String</td>
		<td>This attribute sets the configuration of the measures plotted on the axis. If you set the `formatter` function, the provided `prefix` and `suffix` properties are ignored.</td>
	</tr>
	<tr>
		<td>`title`</td>
		<td>String</td>
		<td>Allows you to rename the title of the axis. If not specified, the axis title will be the same as the column name joined by hyphens.</td>
	</tr>
	<tr>
		<td>`aggregation`</td>
		<td>String</td>
		<td>Allows you to specify alternative aggregation strategies for the measures being plotted. It controls the aggregation strategy for all plots specified.</td>
	</tr>
	<tr>
		<td>`type`</td>
		<td>String</td>
		<td>This attribute sets the type of the the data plot to render the chart. It is used when you want to specify the chart type under `plot` object.</td>
	</tr>
</table>

```
new FusionCharts({
    type: 'timeseries',
    ...
    dataSource: {
		yAxis: [{
			plotType: ' ', //To set the plot type out the 'plot' object
			min: ' ', //Minimum value of the axis
			max: ' ', //Maximum value of the axis
			format: { //Measures
    			"prefix": ' ', 
    			"suffix": ' '
  			},
		    plot: {
		        //Column header for the measure which is plotted against the Y Axis
		    },
		    type: ' ', //Plot type to render the chart
		    title: ' ', //Title of the axis
			aggregation: ' ' //Aggregate Function 	
		}],
	}
})
```

## Reference Lines

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>The label which gets displayed when you hover the reference lines.</td>
	</tr>
	<tr>
		<td>`value`</td>
		<td>Number</td>
		<td>This attribute specifies the value at which the reference line is drawn.</td>
	</tr>
</table>

```
new FusionCharts({
    type: 'timeseries',
    ...
    dataSource: {
        referenceLine: [{
            'label': ' ', //Label of the reference line
            'value': ' ' //Value of the reference line
        }],
	}
})
```

## Data Markers

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`seriesName`</td>
		<td>String</td>
		<td>This attribute specifies the name of the series on which the data marker will be displayed. If the series is specified as a combination of a series name as well as a measure name, it should be in &lt;series_name&gt;-&lt;measure_name&gt; format.</td>
	</tr>
	<tr>
		<td>`time`</td>
		<td>String</td>
		<td>Sets the time on which the data marker will be shown. Corresponds to the start of the given date/time.</td>
	</tr>
	<tr>
		<td>`timeFormat`</td>
		<td>String</td>
		<td>Sets the format of the date to specify the time for the marker.</td>
	</tr>
	<tr>
		<td>`type`</td>
		<td>String</td>
		<td>Sets the type of the marker. Example, `flag`.</td>
	</tr>
	<tr>
		<td>`identifier`</td>
		<td>Character</td>
		<td>This attribute defines a character to be shown within the data marker.</td>
	</tr>
	<tr>
		<td>`tooltext`</td>
		<td>String</td>
		<td>The text specified in this attribute is displayed in the tooltip when you hover over the data marker.</td>
	</tr>
</table>

```
new FusionCharts({
    type: 'timeseries',
    ...
    dataSource: {
        dataMarker: [{
		    seriesName: ' ', //Name of the series
		    time: ' ', //Time on which the data marker will be shown
		    identifier: ' ', //Defines a character to be shown
		    timeFormat: ' ', //Format of the date
		    tooltext: ' ' //Text in the tooltip
		}] 
	}
})
```

## Chart Configuration and Root JSON Attributes

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`type`</td>
		<td>Number</td>
		<td>Sets the chart type.</td>
	</tr>
	<tr>
		<td>`width`</td>
		<td>Number</td>
		<td>Sets the width of the chart canvas.</td>
	</tr>
	<tr>
		<td>`height`</td>
		<td>Number</td>
		<td>Sets the height of the chart canvas.</td>
	</tr>
	<tr>
		<td>`enableNavigator`</td>
		<td>Boolean</td>
		<td>Enables/disables the time navigator.</td>
	</tr>
	<tr>
		<td>`animation`</td>
		<td>Boolean</td>
		<td>This attribute gives you the option to control animation in your charts. If you do not want to animate any part of the chart, set this as 0.</td>
	</tr>
	<tr>
		<td>`animationDuration`</td>
		<td>Number</td>
		<td>This attribute sets the animation duration, if animation is set to 1.</td>
	</tr>
	<tr>
		<td>`paletteColors`</td>
		<td>Array(String)</td>
		<td>Palette attribute allows to select a palette theme that applies to chart background, canvas, font and tool-tips, it does not change the colors of data items (i.e., column, line, pie etc.). Using paletteColors attribute, you can specify your custom list of hex colors for the data items. The list of colors have to be separated by comma e.g., paletteColors: `#FF0000`, `#0372AB`, `#FF5904`.</td>
	</tr>
	<tr>
		<td>`clickURL`</td>
		<td>String</td>
		<td>The entire chart can now act as a hotspot. Use this URL to define the hotspot link for the chart. The link can be specified in FusionCharts Link format.</td>
	</tr>
	<tr>
		<td>`hasRTLText`</td>
		<td>Boolean</td>
		<td>This attribute, when set to 1, indicates to the chart that the text (rendered on the chart) may contain RTL characters and the textual display has to be managed accordingly.</td>
	</tr>
	<tr>
		<td>`showPrintMenuItem`</td>
		<td>Boolean</td>
		<td>Whether to show "Print Chart" item in the context menu of the chart? Even if you opt to hide the item in context menu, you can still opt to invoke print() JavaScript method of the chart to print the same.</td>
	</tr>
	<tr>
		<td>`showToolTip`</td>
		<td>Boolean</td>
		<td>Whether to show tool tip on chart.</td>
	</tr>
	<tr>
		<td>`exportEnabled`</td>
		<td>Boolean</td>
		<td>Whether the chart will allow exporting to images, PDFs, SVG or XLS.</td>
	</tr>
	<tr>
		<td>`exportAction`</td>
		<td>String</td>
		<td>In case of server-side exporting, the action specifies whether the exported image will be sent back to client as download, or whether it'll be saved on the server.</td>
	</tr>
	<tr>
		<td>`exportHandler`</td>
		<td>String</td>
		<td>In case of server side exporting, this refers to the path of the server-side export handler (the ready-to-use scripts that we provide).</td>
	</tr>
	<tr>
		<td>`exportFormats`</td>
		<td>String</td>
		<td>Lets you configure what output formats to allow for export of chart, in the export context menu, and also customize the label for each menu item. The attribute value should be a pipe (|) delimited separated key-value pair. Example: exportFormats: 'PNG=Export as High Quality Image&#124;JPG&#124;PDF=Export as PDF File'</td>
	</tr>
	<tr>
		<td>`exportAtClientSide`</td>
		<td>Boolean</td>
		<td>This attribute when set to 1, enables the client-side export feature.</td>
	</tr>
	<tr>
		<td>`exportShowMenuItem`</td>
		<td>Number</td>
		<td>Whether the menu items related to export (e.g., Save as JPEG etc.) will appear in the context menu of chart.</td>
	</tr>
	<tr>
		<td>`exportTargetWindow`</td>
		<td>String</td>
		<td>In case of server-side exporting and when using download as action, this lefts you configure whether the return image, PDF, SVG or XLS will open in same window (as an attachment for download), or whether it will open in a new window.</td>
	</tr>
	<tr>
		<td>`exportFileName`</td>
		<td>String</td>
		<td>Using this attribute you can specify the name (excluding the extension) of the output (export) file.</td>
	</tr>
	<tr>
		<td>`baseChartMessageImageHAlign`</td>
		<td>String</td>
		<td>This attribute allows to set a custom horizontal alignment for all images displayed as chart messages. Possible values are `left`, `right` and `middle`.</td>
	</tr>
	<tr>
		<td>`baseChartMessageImageVAlign`</td>
		<td>String</td>
		<td>This attribute allows to set a custom vertical alignment for all images displayed as chart messages. Possible values are `top`, `bottom` and `middle`.</td>
	</tr>
	<tr>
		<td>`loadMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed when a chart begins to load. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., loadStartMessageFont, loadStartMessageFontSize, loadStartMessageColor. If message keys are not specified, base cosmetics are used. </br> To display an image as the chart message, prefix I- to the image URL. </br> Alignment and properties of the image can be configured using attributes such as loadMessageHAlign, loadMessageVAlign, loadMessageAlpha and so on.</td>
	</tr>
	<tr>
		<td>`loadMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart loadMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`loadMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart loadMessage, this attribute allows to set a custom vertical alignment for the image.  Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`typeNotSupportedMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed when the specified chart type is not supported. To display an image as the chart message, prefix I- to the image URL.</td>
	</tr>
	<tr>
		<td>`typeNotSupportedMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart typeNotSupportedMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`typeNotSupportedMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart typeNotSupportedMessage, this attribute allows to set a custom vertical alignment for the image. Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`renderErrorMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if an error is encountered while rendering the chart. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., renderErrorMessageFont, renderErrorMessageFontSize, renderErrorMessageColor. </br> If message keys are not specified, base cosmetics are used. To display an image as the chart message, prefix I- to the image URL. Alignment and properties of the image can be configured using attributes such as renderErrorMessageHAlign, renderErrorMessageVAlign, renderErrorMessageAlpha and so on.</td>
	</tr>
	<tr>
		<td>`renderErrorMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart renderErrorMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`renderErrorMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart renderErrorMessage, this attribute allows to set a custom vertical alignment for the image. Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`dataLoadStartMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed when chart data begins loading. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataLoadStartMessageFont, dataLoadStartMessageFontSize, dataLoadStartMessageColor. If message keys are not specified, base cosmetics are used. </br> Alignment and properties of the image can be configured using attributes such as dataLoadStartMessageHAlign, dataLoadStartMessageVAlign, dataLoadStartMessageAlpha and so on. To display an image as the chart message, prefix I- to the image URL. </td>
	</tr>
	<tr>
		<td>`dataLoadStartMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadStartMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`dataLoadStartMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadStartMessage, this attribute allows to set a custom vertical alignment for the image. Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`dataEmptyMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if the data loaded for a chart is empty. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataEmptyMessageFont, dataEmptyMessageFontSize, dataEmptyMessageColor. If message keys are not specified, base cosmetics are used. </br> To display an image as the chart message, prefix I- to the image URL. Alignment and properties of the image can be configured using attributes such as dataEmptyMessageHAlign, dataEmptyMessageVAlign, dataEmptyMessageAlpha and so on. </td>
	</tr>
	<tr>
		<td>`dataEmptyMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataEmptyMessage, this attribute allows to set a custom horizontal alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataEmptyMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataEmptyMessage, this attribute allows to set a custom vertical alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataLoadErrorMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if an error is encountered while loading chart data. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataLoadErrorMessageFont, dataLoadErrorMessageFontSize, dataLoadErrorMessageColor. If message keys are not specified, base cosmetics are used. </br> Alignment and properties of the image can be configured using attributes such as dataLoadErrorMessageHAlign, dataLoadErrorMessageVAlign, dataLoadErrorMessageAlpha and so on. To display an image as the chart message, prefix I- to the image URL.</td>
	</tr>
	<tr>
		<td>`dataLoadErrorMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadErrorMessage, this attribute allows to set a custom horizontal alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataLoadErrorMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadErrorMessage, this attribute allows to set a custom vertical alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataInvalidMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if the data to be loaded for the chart is invalid. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataInvalidMessageFont, dataInvalidMessageFontSize, dataInvalidMessageColor. If message keys are not specified, base cosmetics are used. </br> Alignment and properties of the image can be configured using attributes such as dataInvalidMessageHAlign, dataInvalidMessageVAlign, dataInvalidMessageAlpha and so on. To display an image as the chart message, prefix I- to the image URL.</td>
	</tr>
	<tr>
		<td>`dataInvalidMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataInvalidMessage, this attribute allows to set a custom horizontal alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataInvalidMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataInvalidMessage, this attribute allows to set a custom vertical alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
</table>

## Date/time Format

`outputFormat` attribute is used to set the format of the column being grouped. To set the date/time format of the chart, set the value of `outputFormat` attribute as per your requirement. 

List of predefined date/time format is given below:

<table>
	<tr>
		<th>Date/Time Format</th>
		<th>Description</th>
	</tr>
		<tr>
		<td>`%a`</td>
		<td>Abbreviated weekday name.</td>
	</tr>
	<tr>
		<td>`%A`</td>
		<td>Full weekday name.</td>
	</tr>
	<tr>
		<td>`%b`</td>
		<td>Abbreviated month name.</td>
	</tr>
	<tr>
		<td>`%B`</td>
		<td>Full month name.</td>
	</tr>
	<tr>
		<td>`%c`</td>
		<td>Locale’s date and time, such as %x and %X.</td>
	</tr>
	<tr>
		<td>`%d`</td>
		<td>Zero-padded day of the month as a decimal number [01,31].</td>
	</tr>
	<tr>
		<td>`%e`</td>
		<td>Space-padded day of the month as a decimal number [1,31]. `%e` is equivalent to `%_d`.</td>
	</tr>
	<tr>
		<td>`%f`</td>
		<td>Microseconds as a decimal number [000000, 999999].</td>
	</tr>
	<tr>
		<td>`%H`</td>
		<td>Hour (24-hour clock) as a decimal number [00,23].</td>
	</tr>
	<tr>
		<td>`%I`</td>
		<td>Hour (12-hour clock) as a decimal number [01,12].</td>
	</tr>
	<tr>
		<td>`%j`</td>
		<td>Day of a year as a decimal number [001,366].</td>
	</tr>
	<tr>
		<td>`%m`</td>
		<td>Month as a decimal number  [01,12].</td>
	</tr>
	<tr>
		<td>`%M`</td>
		<td>Minute as a decimal number [00,59].</td>
	</tr>
	<tr>
		<td>`%L`</td>
		<td>Milliseconds as a decimal number [000, 999].</td>
	</tr>
	<tr>
		<td>`%p`</td>
		<td>Can either be **AM** or **PM**.</td>
	</tr>
	<tr>
		<td>`%Q`</td>
		<td>Milliseconds according to UNIX epoch.</td>
	</tr>
	<tr>
		<td>`%q`</td>
		<td>Quarter of the year starting from January [Q1, Q2, Q3, Q4].</td>
	</tr>
	<tr>
		<td>`%s`</td>
		<td>Seconds according to UNIX epoch.</td>
	</tr>
	<tr>
		<td>`%S`</td>
		<td>Second as a decimal number [00, 61].</td>
	</tr>
	<tr>
		<td>`%u`</td>
		<td>Weeday starts from Monday(ISO 8601) as a decimal number [1,7].</td>
	</tr>
	<tr>
		<td>`%U`</td>
		<td>Sunday-based week of a year as a decimal number [00,53]. All days in a new year preceding the first Sunday will be considered as week 0.</td>
	</tr>
	<tr>
		<td>`%V`</td>
		<td>ISO 8601 week of the year as a decimal number [01, 53]. Weeks start on Monday and are numbered from 01 for the first week and 52 or 53 for the last week. Week 1 is the first week where four or more days fall within the new year. Basically, week 01 is the first week of the year that contains a Thursday; or, the week that has 4 January in it.</td>
	</tr>
	<tr>
		<td>`%w`</td>
		<td>Sunday-based weekday as a decimal number [0,6].</td>
	</tr>
	<tr>
		<td>`%W`</td>
		<td>Monday-based week of the year as a decimal number [00,53]. All days in a new year preceding the first Monday will be considered as week 0.</td>
	</tr>
	<tr>
		<td>`%x`</td>
		<td>Locale’s date. Example: %-m/%-d/%Y.</td>
	</tr>
	<tr>
		<td>`%X`</td>
		<td>Locale’s time. Example: %-I:%M:%S %p.</td>
	</tr>
	<tr>
		<td>`%y`</td>
		<td>A year without century as a decimal number [00,99].</td>
	</tr>
	<tr>
		<td>`%Y`</td>
		<td>A year with century as a decimal number [2000, 1999].</td>
	</tr>
	<tr>
		<td>`%Z`</td>
		<td>Time Zone offset, such as -0700, -07:00, -07, or Z.</td>
	</tr>
	<tr>
		<td>`%%`</td>
		<td>A literal percent sign (%)</td>
	</tr>
</table>

**Example:**

```javascript
unitDefaultFormats = {
	'Year': '%Y', // 2018
	'Month': '%b %Y', // Jan 2018
	'Day': '%b %d, %Y', // Jan 01, 2018
	'Hour': '%b %d, %Y %H hrs', // Jan 01, 2018 23 hrs
	'Minute': '%b %d, %Y %H:%M', // Jan 01, 2018 23:34
	'Second': '%b %d, %Y %H:%M:%S', // Jan 01, 2018 23:34:26
	'Millisecond': '%b %d, %Y %H:%M:%S:%L' // Jan 01, 2018 23:34:26:123
};
```