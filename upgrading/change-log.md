---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.13.x
---

<h2 class="sub-heading">Version 3.13.3-sr.1</h2>
21th December, 2018

<h4 class="sub-heading">Improvements</h4>

* With the latest updates in **Chrome** (version 71.0.3578.98, 64-bit) and **Firefox** (64.0, 64bit), browser scrolling was breaking tool-tip and some mouse interactions in charts. This issue has now been fixed.

* Angular FusionCharts now supports **Time series**.

<h2 class="sub-heading">Version 3.13.3</h2>
6th December, 2018

<h4 class="sub-heading">New Feature</h4>

* The `FusionCharts.getVersion('all')` api is introduced to check the version of all the products and the FusionCharts Suite. From now onward, the FusionCharts Suite package will contain FusionCharts, FusionWidgets, PowerCharts, FusionMaps and FusionTime. Whenever a new version of these products is released the version of the FusionCharts Suite XT will change accordingly.    

<h4>Improvements</h4>

* With the introduction of our new product `FusionTime`, our core platform has now been updated to accommodate time series visualization along with all the other charts of FusionCharts.

<h4>Fixes</h4>

* Jammu & Kashmir map was throwing JavaScript error when entities were clicked. This issue has now been fixed.

<h4>Deprecated</h4>

* `Fusioncharts.version` is deprecated.

<h2 class="sub-heading">Version 3.13.2-sr.1</h2>
30th October, 2018

<h4 class="sub-heading">Fixes</h4>

* Charts are now rendering in IE8 with the source files or the minified files. Previously, the chart was not getting rendered using minified files.

* A JavaScript error was thrown while trying to render the chart in a hidden container. The issue has now been fixed.


<h2 class="sub-heading">Version 3.13.2</h2>
11th October, 2018

<h4 class="sub-heading">New Features</h4>

* The following events have been added to FusionCharts:

    * The [chartTypeInvalid]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#charttypeinvalid-220) event will be fired if the given chart type is invalid, or the chart type is not set.

    * After invoking the render() API method, the [containerNotFound]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#containernotfound-299) event will be fired if the chart container is not found or not provided.

    * The [animationInvoked]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#animationinvoked-228) event will be fired as soon as the chart animation starts.

    * The [beforeDraw]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedraw-230) event will be fired whenever an entire redraw of the chart isstarted through data update, change of chart message, change of chart type, or resize.

    * The [drawCancelled]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#drawcancelled-234) event will be triggered when `preventDefault()` is called from FusionCharts event `beforeDraw`.

    * The [beforeDataLoad]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#beforedataload-28) event will be triggered when the chart fetches data from the source but is yet to display it. It can be used with the Theme Manager to update chart data.

For more information regarding the events, click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events).

<h4>Improvements</h4>

* Earlier, the [renderComplete]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendercomplete-236) event was triggered every time a chart was rendered using any of the methods `render()`, `chartType()`, or `setChartData()`. It was also triggered every time chart data was successfully updated. Additionally, this event will now be fired whenever a chart is completely drawn.

* If two ranges in an Angular gauge, Bulb gauge, or map shared the same value, the `colorRange` attribute was picking up the color of the lower range. It has been modified to ensure it always picks up the color of the upper range. For more details regarding this update, click [here]({% site.baseurl %}/common-use-cases/color-range-usecases).

* Earlier, the distance of labels from the edge of Pie and Doughnut charts would be equal to the sum of values of the `labelDistance` and `slicingDistance` attributes. Now the distance of labels from the edge of the charts equals the value of `labelDistance` only.

<h4>Fixes</h4>

* A JavaScript error was thrown while trying to re-render a map using the `render()` API method before completion of animation of the ongoing rendering process. The issue has been fixed now.

* A JS error was thrown while performing a drill down for a chart container with no `id`. The issue has been fixed.

* JavaScript error was thrown when chart data was updated on `dataPlotClick` event. The issue has been fixed.

* Click/hover effects on markers are now working on single tap in hybrid/touch devices.

* JavaScript errors were thrown in Internet Explorer and Google Chrome while invoking FusionCharts functions using `jquery-fusioncharts.js`. The issue has been fixed.

* Pie chart rendered with data empty message was throwing JS error when updated if there was a scroll chart on the same page. The issue has been fixed.

* Labels are now updated while updating a Pie 2D chart with fewer data.

* The `trendValueAlpha` attribute was not being applied to chart trendline values. The issue has been fixed.

* `reverseLegend` attribute is now working as intended for Marimekko, Radar, and Scatter charts.

* Scroll, legend scroll, and gesture (such as zooming in Zoom line charts) are now working in FusionCharts v3.13.2 for Google Chrome.

* In Angular Gauges, the color range is now applied properly, when real-time data values are in the following sequence:

    * Less than the value of `lowerLimit` of the gauge.

    * More than the value of `upperLimit` of the gauge.

* Box and Whisker charts are now correctly rendering all outlier values, without throwing JS error messages or displaying connectors.

* `onChangeCrossLine` event is now fired when the crossline is hidden.

* In Multi-axis Line charts, colors set to the axes are now correctly reflected in the legend and the anchors.

* Annotation border now appears when the value of `showborder` attribute is set to `1`.

* Hover effect on the node in a Treemap is now getting updated, after drill down.

* In Funnel charts, `labelFontSize` is now working properly for the first plot. 

* Plot border for Stacked Column chart is now displayed accurately when it is exported from Internet Explorer 11.

* If the value of `visible` attribute was set to `0` for an annotation group within `dataSource`, the group was not displayed even by using the `show()` API method. This issue has been fixed.

* In the heatmap chart, the X-axis label no longer goes behind the chart canvas when the x-axis labels are placed at top.

* In pie and doughnut charts, `categoryLabel` is no longer returning blank value on `dataPlotClick` event, when the labels are displayed.

* Data plots with a space in the `displayValue` attribute no longer break on chart export.

* The `scrollTo()` API method is now working when it is called just after  `setChartAttribute()`.

* In FusionMaps, the `link` attribute defined for markers was only accessible on the marker borders. It is now accessible everywhere on the markers, as intended.

* The scroll bar was turning black when `setChartAttribute()` was being used with the value of "scrollColor" attribute set to `""`. The issue has been fixed.

* The `animateClockwise` and `alphaAnimation` attributes are now working properly in Pie and Doughnut charts. 

* A JS error was thrown while updating a non-existing annotation using the `update()` API method. This issue has been fixed.

* The `$errorValue`, `$errorDataValue`, and `$errorPercentValue` tooltip macros are now accurately displaying the values.

* In Error Scatter and Error Bar 2D charts, `$errorValue` macro was not always displaying the correct plot value on tooltips. This issue has been fixed.

* Hover effects are now applied properly on the dial in Angular Gauges.

* The `alpha` attribute is now working properly for image annotations.

* The `leftMargin` attribute for text annotations was not behaving as intended. The issue has now been fixed.

* In Overlapped Bar 2D charts, plot values were overlapping one another which is now behaving as intended.

* In Treemap charts, hover effects were persisting even when the values of `plotHoverEffect` and `showHoverEffect` attributes were set to `0`. The issue has been fixed.

* If HTML tags were included in labels, the chart would throw a JS error and not get rendered. The issue has been fixed.

* In Horizontal/Vertical LED gauges and Vertical Bullet Graph, if the value of `captionOnTop` was set to `0`, the caption was not appearing as intended. The issue has been resolved.

* A JS error was thrown while performing a batch export to export multiple charts using `FusionCharts.batchExport()` method and the chart type is not supported. The issue has been fixed.

* While exporting a map into XLS format, the formatted `value` column was getting split into 3 columns. The issue has been fixed.

* Chart components like tooltips and events were persisting in the initial location of the chart, even after the chart was shifted via the container. The issue has been resolved.

* Message log menu items were getting displayed, even when the value of `messageGoesToLog` was set to `0`. The issue has been fixed.

* A JS error was thrown when charts with legends were rendered with a width less than 21 px. This issue has been fixed.

* The tooltip of the gradient legend pointer was visible on hovering, even when the value of `showToolTip` attribute was set to `0`. The issue has been fixed.

<h4>Deprecated</h4>

* `smartLabelClearance` attribute is deprecated.

<h2 class="sub-heading">Version 3.13.1-sr.1</h2>
27th August, 2018

<h4 class="sub-heading">Fixes</h4>

* Legend interaction was not working in Chrome for Android devices. The issue has now been fixed.

* The size of `fusioncharts.js` file in FusionCharts Suite XT package has been reduced to 1.3 Mb. Previously the file size was 2.44 Mb. 

<h2 class="sub-heading">Version 3.13.1</h2>
10th August, 2018

<h4 class="sub-heading">Fixes</h4>

* Chart was throwing runtime error while changing the `chartType`.

* When map alias was prefixed with a path (e.g. ‘maps/’) drill down chart failed to render the maps.

* The attribute `displayValue` set as `" "` (blank space), is now working for trend line when the start value is `0`.

* Problem related to rendering FusionCharts in old IE browsers (VML) has been rectified.

* Changing theme using `setChartAttribute` has been fixed for Funnel and Pyramid chart.

* Application of palette colors on changing theme is rectified for Pie 3D charts.

* Legend icons are now properly updated on changing theme, for Multi-Axis Line chart.

* Crossline color is now properly updated on changing theme, for Stacked Column chart.

* The background color of the Thermometer graph is now properly updated for themes `Fusion`, `Gammel` or `Candy`.

* Consolidated tooltip can now safely use `<div>` element to define tooltext.

* `animateClockwise` is now working for Pie/Doughnut charts.

<h2>Version 3.13.0</h2>
3rd August, 2018

<h4 class="sub-heading">New Features</h4>

* FusionCharts Suite XT v3.13.0 introduces two new chart types: **[Overlapped column]({% site.baseurl %}/chart-guide/standard-charts/overlapped-column-and-bar-charts#overlapped-column-d-chart-1)** chart and **[Overlapped bar]({% site.baseurl %}/chart-guide/standard-charts/overlapped-column-and-bar-charts#overlapped-bar-d-chart-2)** chart.

* Spline and Spline Area charts are now part of both FusionCharts XT and PowerCharts XT. 

* Spline and Spline Area charts can now be built as part of combination charts, using the `renderAs` attribute. For example, `"renderAs": "spline"`.

* A common [theme]({% site.baseurl %}/api/fusioncharts/fusioncharts-properties#fusionchartsoptionsstatic-member-9) can now be applied to all charts in a page.

* In multi-level pie chart, [highlightParentPieSlices]({% site.baseurl %}/chart-attributes/?chart=multilevelpie&attribute=chart_highlightparentpieslices) and [highlightChildPieSlices]({% site.baseurl %}/chart-attributes/?chart=multilevelpie&attribute=chart_highlightChildPieSlices) attributes have been introduced to determine the direction of the highlight effect. 

* The inner radius of the multi-level pie chart can be configured explicitly using `innerRadius` attribute.

* Custom fonts from client-side export can now be exported using [useCanvas]({% site.baseurl %}/api/fusioncharts/fusioncharts-properties#fusionchartsoptionsstatic-member-9) option.

* Data from Multi-level Pie charts can now be exported in CSV or XLS formats.

* In zoomline chart, [maxPeakDataLimit]({% site.baseurl %}/chart-attributes/?chart=zoomline&attribute=chart_maxpeakdatalimit) and [minPeakDataLimit]({% site.baseurl %}/chart-attributes/?chart=zoomline&attribute=chart_minpeakdatalimit) attributes consider the limits as a range when both the attributes are used.

* [getSVGString]({% site.baseurl %}/api/fusioncharts/fusioncharts-methods#getsvgstring-95) now accepts an object as the second parameter with a property named `keepImages`. It can now export the logo or any images (background images, etc.) present in the chart.

* In `resized` event the `id` of the chart is added under the `dataObject`.

<h4>Improvements</h4>

* `Angular-FusionCharts` plugin has been renamed to `AngularJS-Fusioncharts`.
* `Angular 2` and `Angular 4` plugins have been renamed to `Angular-FusionCharts`.
* The folder structure of the download package is modified. A new folder as `integrations` is added which contains all the **client-side** and **server-side** tech stacks. For more details click [here]({% site.baseurl %}/upgrading/changed-behavior#updated-fusioncharts-suite-xt-download-package-5). 

* For dual y-axis charts, the secondary data plots now overlaps the primary data plots if `renderAs` attribute is set as column. If you would like the old behavior, click [here]({% site.baseurl %}/upgrading/changed-behavior#secondary-data-plots-overlap-primary-data-plots-3) to know more.

* In order to free chart area, the restore button in select-scatter and drag-able chart has been moved to [options menu]({% site.baseurl %}/chart-guide/standard-charts/drag-able-charts#dragable-column-d-chart-1). The list of attributes which have been added are as follows:

    * [enableSubmit]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_enablesubmit)

    * [submitText]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_submittext)

    * [enableRestore]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_enablerestore)

    * [restoreText]({% site.baseurl %}/chart-attributes/?chart=dragcolumn2d&attribute=chart_restoretext)

* Data plots (column and area) in the [inverse chart]({% site.baseurl %}/chart-guide/standard-charts/inverse-y-axis-chart) will now appear from the top of the canvas. If you would like the old behavior, click [here]({% site.baseurl %}/upgrading/changed-behavior#inversed-data-plot-2) to know more.

* The hyphen ( - ) character is now supported in the parameter of the JavaScript function of `link` attribute.

* The `defaultPrevented` property in the `eventObject` is used instead of the `prevented` property.

* The [onChangeCrossLine]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#onchangecrossline-287) event is fired when the mouse pointer is moved from one data plot to another.

* Gradient legend now sustains the state even on resize.

* The chart names in theme files are now case insensitive.

* [rendered]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#rendered-222) event will also be fired when updating the chart type.

* Starting 3.13.0, Map specification sheets should be available based on the version
    * Older Map files are supported till 3.12.2
    * Latest Map files are supported starting 3.13.0

> If you are using version v3.12.2 or older, [download](https://www.fusioncharts.com/download/map-definition-files) the latest version and replace for upgrading to the latest map definition files.

* The core maps package has been updated to:

    * Updated the specification sheet for 12 cities and regions under Ethiopia Zonal Divisions and Region maps:

        * Addis Ababa City

        * Afar Region

        * Amhara Region

        * Benishangul Gumuz Region

        * Dire Dawa City

        * Ethiopia Region

        * Gambella Region

        * Harari Region

        * Oromia Region

        * SNNPR

        * Somali Region

        * Tigray Region

    * Updated the specification sheet of Ethiopia to add the following 64 new entities:

        * Afar Zone 1

        * Afar Zone 2

        * Afar Zone 3

        * Afar Zone 4

        * Afar Zone 5

        * Agew Awi

        * East Gojam

        * North Gonder

        * North Shewa(R3)

        * North Wello

        * Oromiya(R3)

        * South Gonder

        * South Wello

        * Wag Hemra

        * West Gojam

        * Bahir Dar

        * Asosa

        * Kamashi

        * Metekel

        * Tongo

        * Gambella Zone 1

        * Gambella Zone 2

        * Gambella Zone 3

        * Gambella Zone 4

        * Arsi

        * Bale

        * Borena

        * Illubabor

        * Jimma

        * East Harerge

        * East Shewa

        * East Wellega

        * West Harerge

        * West Shewa

        * West Wellega

        * North Shewa(R4)

        * Afder

        * Degehabur

        * Fik

        * Gode

        * Jigjiga

        * Korahe

        * Liben

        * Shinile

        * Warder

        * Bench Maji

        * Gedio

        * Gurage

        * Hadiya

        * Kefico Shekicho

        * KAT

        * North Omo

        * Sidama

        * South Omo

        * Amaro

        * Burji

        * Dirashe

        * Konso

        * Yem

        * Central Tigray

        * East Tigray

        * South Tigray

        * West Tigray

        * Mekele

    * Updated the specification sheet for 16 provinces and regions under Cuba:

        * Artemisa

        * Camaguey

        * CiegodeAvila

        * Cienfuegos

        * Granma

        * Guantanamo

        * Havana

        * Holguin

        * IsladelaJuventud

        * LasTunas

        * Matanzas

        * Mayabeque

        * PinardelRio

        * SanctiSpiritus

        * SantiagodeCuba

        * VillaClara

    * Updated the specification sheet of Cuba to add and rename the following entities:

        * Renamed Ciego de vila to Ciego de Ávila.

        * Added Havana

        * Added Artemisa

        * Added Mayabeque

    * The specification sheet for Colombia has been updated, to add the following 33 separate departments, as follows: 

        * Amazonas

        * Antioquia

        * Arauca

        * Atlantico

        * Bogota

        * Bolivar

        * Boyaca

        * Caldas

        * Caqueta

        * Casanare

        * Cauca

        * Cesar

        * Choco

        * Cordoba

        * Cundinamarca

        * Guainia

        * Guaviare

        * Huila

        * LaGuajira

        * Magdalena

        * Meta

        * Narino

        * NortedeSantander

        * Putumayo

        * Quindio

        * Risaralda

        * SanAndresProvidenciaandSantaCatalina

        * Santander

        * Sucre

        * Tolima

        * ValledelCauca

        * Vaupes

        * Vichada

    * Updated the definition of the Uttar Pradesh in the specification sheet.

    * Updated the definition of the West Bengal in the specification sheet.

    * Updated the definition of the Jammu & Kashmir in the specification sheet.

    * The specification sheet for Indonesia has been updated to add the following 27 separate provinces, as follows: 

        * Bali

        * BangkaBelitungIslands

        * Banten

        * Bengkulu

        * CentralJava

        * CentralKalimantan

        * EastJava

        * EastKalimantan

        * EastNusaTenggara

        * Gorontalo

        * Indonesia

        * JakartaSpecialCapitalRegion

        * Jambi

        * Lampung

        * NorthKalimantan

        * NorthMaluku

        * NorthSulawesi

        * NorthSumatra

        * Riau

        * SoutheastSulawesi

        * SouthKalimantan

        * SpecialRegionofAceh

        * SpecialRegionofYogyakarta

        * WestJava

        * WestNusaTenggara

        * WestSulawesi

        * WestSumatra 

    * In the specification sheet for Oceania, files for the following entities have been updated:

        * PapuaNewGuinea

        * Samoa

    * The specification sheet for Zimbabwe (Provinces) has been updated to add entities for 10 separate provinces, as follows:

        * Bulawayo

        * Harare

        * Manicaland

        * MashonalandCentral

        * MashonalandEast

        * MashonalandWest

        * Masvingo

        * MatabelelandNorth

        * MatabelelandSouth

        * Midlands

    * The following long names have been updated in the specification sheet for Papua New Guinea:

        * Chimbu renamed as Simbu (Chimbu)

        * Northern renamed as Oro (Northern)

        * North Solomons renamed as Autonomous Region of Bougainville

        * Sanduan renamed as Sandaun (West Sepik)

    * Updated the specification sheet of Papua New Guinea to add the following entities

        * Hela

        * Jiwaka

    * The following long names have been updated in the specification sheet for Samoa:

        * Aana has been renamed as A'ana

        * Faasaleleaga has been renamed as Fa'asaleleaga

        * Gagaemauga has been renamed as Gaga'emauga

        * Gagaifomauga has been renamed as Gaga'ifomauga

        * Satupaitea has been renamed as Satupa'itea

        * Vaao Fonoti has been renamed as Va'a-o-Fonoti

    * Map of Dominican Republic (main map) has been updated.

    * The specification sheet for Dominican Republic (Provinces) has been updated to add entities for 32 separate provinces, as follows:

        * Azua

        * Bahoruco

        * Barahona

        * Dajabón

        * Distrito Nacional

        * Duarte

        * El Seibo

        * Elías Piña

        * Espaillat

        * Hato Mayor

        * Independencia

        * La Altagracia

        * La Romana

        * La Vega

        * María Trinidad Sánchez

        * Monseñor Nouel

        * Monte Cristi

        * Monte Plata

        * Pedernales

        * Peravia

        * Puerto Plata

        * Salcedo

        * Samaná

        * San Cristóbal

        * San José de Ocoa

        * San Juan

        * San Pedro de Macorís

        * Santiago

        * Santiago Rodríguez

        * Santo Domingo

        * Sánchez Ramírez

        * Valverde

    * Map of North Korea (main map) has been completely retraced.

    * Borders of the following maps have been updated:

        * North Hwanghae

        * Pyongyang

        * South Pyongan

        * Kangwon

        * North Pyongan

        * South Hwanghae

    * A new entity for the province Nampo has been added to the specification sheet for North Korea.

    * The following long names have been updated in the specification sheet:

        * Chagang-do has been renamed as Chagang.

        * Hamgyng-bukto has been renamed as North Hamgyong.

        * Hamgyng-namdo has been renamed as South Hamgyong.

        * Hwanghae-bukto has been renamed as North Hwanghae.

        * Hwanghae-namdo has been renamed as South Hwanghae.

        * Kangwn-do has been renamed as Kangwon.

        * P'yngan-bukto has been renamed as North Pyongan.

        * P'yngan-namdo has been renamed as South Pyongan.

        * P'yngyang has been renamed as Pyongyang.

        * Rasn has been renamed as Rason.

        * Yanggang-do has been renamed as Ryanggang.

    * The following maps have been merged with other maps:

        * Kumgangsan

        * Sinuiju

        * Kaesong

    * Internal Canvas Borders of all North Korea Maps have been updated.

    * The following maps have been updated for South Korea:

        * The image for the map of Seoul has been updated. The entity name has been updated to remove -gu.

        * Within the Incheon map, the borders of Ongjin and Jung entities have been updated.

        * Within the Daejeon map, names of all entities have been updated to remove -gu.

        * The borders of the map of Ulsan have been updated.

        * The map name Jejudo has been renamed as Jeju.

    * Within the Gwangju map under South Korea, names of all entities have been updated to remove -gu. Also, the following short names have been updated:

        * BG renamed to BK.

        * SG renamed to SO.

        * NG renamed to NM.

    * The main map of France has been updated from 22 regions to display 27 regions. Long names of the following entities have been updated:

        * Bretagne has been renamed as Brittany.

        * Bourgogne has been renamed as Burgundy.

        * Centre has been renamed as Centre-Val de Loire.

        * Corse has been renamed as Corsica.

        * Ile-de-France has been renamed as Île-de-France.

        * Basse-Normandie has been renamed as Lower Normandy.

        * Picardie has been renamed as Picardy.

        * Provence-Alpes-Côte D'Azur has been renamed as PACA (Provence-Alpes-Côte D'Azur).

        * Haute-Normandie has been renamed as Upper Normandy.

    * France (2016) map has been updated from 13 regions to 18 regions (including 5 overseas ones). The 5 overseas regions have been added as a single entity.

    * France (Departments) map has been updated from 96 departments to 97 departments, with 5 new overseas regions. Metropolitan Lyon has been added as the new entity. The following entities have been renamed:

        * Alpes de Haute Provence has been renamed as Alpes-de-Haute-Provence.

        * Hautes Alpes has been renamed as Hautes-Alpes.

        * Alpes Maritimes has been renamed as Alpes-Maritimes.

        * Ardeche has been renamed as Ardèche.

        * Ariege has been renamed as Ariège.

        * Bouches du Rhone has been renamed as Bouches-du-Rhône.

        * Charente Maritime has been renamed as Charente-Maritime.

        * Correze has been renamed as Corrèze.

        * Corse du Sud has been renamed as Corse-du-Sud.

        * Haute Corse has been renamed as Haute-Corse.

        * Cote d'Or has been renamed as Côte-d'Or

        * Cotes d'Armor has been renamed as Côtes-d'Armor.

        * Drome has been renamed as Drôme.

        * Eure et Loir has been renamed as Eure-et-Loir

        * Finistere has been renamed as Finistère.

        * Haute Garonne has been renamed as Haute-Garonne.

        * Herault has been renamed as Hérault.

        * Ille et Vilaine has been renamed as Ille-et-Vilaine.

        * Indre et Loire has been renamed as Indre-et-Loire.

        * Isere has been renamed as Isère.

        * Loir et Cher has been renamed as Loir-et-Cher.

        * Haute Loire has been renamed as Haute-Loire.

        * Loire Atlantique has been renamed as Loire-Atlantique.

        * Lot et Garonne has been renamed as Lot-et-Garonne.

        * Lozere has been renamed as Lozère.

        * Maine et Loire has been renamed as Maine-et-Loire.

        * Haute Marne has been renamed as Haute-Marne.

        * Meurthe et Moselle has been renamed as Meurthe-et-Moselle.

        * Nievre has been renamed as Nièvre.

        * Pas de Calais has been renamed as Pas-de-Calais.

        * Puy de Dome has been renamed as Puy-de-Dôme.

        * Pyrenees Atlantiques has been renamed as Pyrénées-Atlantiques.

        * Hautes Pyrenees has been renamed as Hautes-Pyrénées.

        * Pyrenees Orientales has been renamed as Pyrénées-Orientales

        * Bas Rhin has been renamed as Bas-Rhin.

        * Haut Rhin has been renamed as Haut-Rhin.

        * Rhone has been renamed as Rhône.

        * Haute Saone has been renamed as Haute-Saône.

        * Saone et Loire has been renamed as Saône-et-Loire.

        * Haute Savoie has been renamed as Haute-Savoie.

        * Ville de Paris has been renamed as Paris.

        * Seine Maritime has been renamed as Seine-Maritime.

        * Seine et Marne has been renamed as Seine-et-Marne.

        * Deux Sevres has been renamed as Deux-Sèvres.

        * Tarn et Garonne has been renamed as Tarn-et-Garonne.

        * Vendee has been renamed as Vendée.

        * Haute Vienne has been renamed as Haute-Vienne.

        * Val d'Oise has been renamed as Val-d'Oise.

        * French Guiana has been renamed as Guyane.

        * Réunion has been renamed as La Réunion.

    * The specification sheet for Iran has been updated with the following entities:

        * Iran Regions (main map)

        * Isfahan

        * Kermanshah

        * Mashhad

        * Tabriz

        * Tehran

    * The specification sheet for Vietnam (Administrative Regions) has been updated with the following entities:

        * Central Highlands

        * Mekong River Delta

        * North Central

        * Northeast

        * Northwest

        * Red River Delta

        * South Central Coast

        * Southeast

        * Vietnam Region

    * The specification sheets for separate provinces in Zambia have been updated  for the following entities:

        * Central has been renamed as Central Zambia

        * Eastern has been renamed as Eastern Zambia

        * North-Western has been renamed as North Western Zambia

        * Northern has been renamed as Northern Zambia

        * Southern has been renamed as Southern Zambia

        * Western has been renamed as Western Zambia

    * The specification sheet for Zambia has been updated to include the following entities:

        * Central Zambia

        * Copperbelt

        * Eastern Zambia

        * Luapula

        * Lusaka

        * Muchinga

        * Northern Zambia

        * North Western Zambia

        * Southern Zambia

        * Western Zambia

    * The following entries have been renamed in the main map for Tajikistan:

        * Sogd has been renamed as Sughd.

        * Regions of Republican Subordination has been renamed as Region of Republican Subordination.

        * Badakhshoni Kuni has been renamed as Gorno-Badakhshan.

    * The entry for Khatlon district has been added to the main map.

<h4>Fixes</h4>

* In touch devices, tooltip was not hiding on touch outside the chart.

* The height of the chart canvas was contracting when updated using the `setChartAttribute()` function.

* Y-axis values were getting cropped when `yAxisMaxValue` attribute value was set in decimals.

* In Treemap charts, label text were overflowing and was accumulating at the corners of the chart.

* In Real-time charts, request for updated data was being sent to data source immediately after the chart was rendered, bypassing the specified update interval.

* Links were not working in funnel & pyramid charts when `enableSlicing` attribute was disabled.

* In Stacked charts that included line, such as Stacked Column 2D Line, multiple line series were considered as stacked, which led to improper axis limits.

* In Gantt charts, data table and process label column was getting displaced when their width was adjusted by dragging.

* In Pie and Doughnut charts 3D, `dataIndex` was giving wrong values from data-plot events.

* Combinations of some special characters were not getting encoded in the tooltips of real-time charts when fed from the server.

* In Stacked Area 2D charts, plots would not render properly when stacked with 100%, if there was a zero value.

* Data plots were not getting displayed in logarithmic charts if the plot values were set less than `1` or had more than 10 decimal places.

* Category labels were not drawn correctly, if padding was applied to the `<div>` tag.

* A blank XLS file was getting exported when `setChartAttribute()` method was used.

* If there were multiple charts in a page, the plot values of all charts wouldn't appear unless the rendering animation was completed for all charts.

* `feedData()` was not working, when data was fed with dial/pointer id in Angular Gauges and Horizontal Linear Gauges.

* FusionCharts was adding itself to the global window scope even if it was required using an AMD loader.

* India main map was getting tilted during rendering.

* `getCSVData()` was not returning the complete data(`id` and `value`) when plots were not selected. It was only returning the `id`.

* Experimental API `enableFirebugLite` has been removed from the Suite, as most of the browsers now have their own debugger.

<h4> Removed </h4>

* Single Series grid support is removed.

* Following are the list of attributes which have been removed from the FusionCharts XT Suite:

    * `Annrenderdelay`
    * `btnTextColor`
    * `btnFontSize`
    * `formBtnWidth`
    * `formBtnBorderColor`
    * `formBtnBgColor`
    * `btnPadding`
    * `btnSpacing`
    * `restoreBtnWidth`
    * `restoreBtnBorderColor`
    * `restoreBtnBgColor`
    * `clickBubbles`

* The deprecated methods `getXML()` & `setDataXML()` have been removed.

* The deprecated method `setCurrentRenderer()` has been removed.

* The method `getChartFromId()` has been removed. Use `getObjectReference()` instead.

* The method `getMapFromId()` has been removed.  Use `getObjectReference()` instead.

<h4>Deprecated</h4>

* Support for coma (`,`) separator option is FC constructor has been deprecated.

* Following is the list of deprecated attributes:

    * `showFormBtn`

    * `formBtnTitle`

    * `showRestoreBtn`

    * `restoreBtnTitle`

* `setTransparent()` method is deprecated. Use `containerBackgroundOpacity` instead.

* `ref` property is deprecated. Use `getObjectReference()` instead.

* `dataXMLInvalid` event is deprecated. Use `dataInvalid` instead.