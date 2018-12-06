---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Romania

#### JavaScript Alias: maps/romania


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-javascript">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "BI",
                "shapeid": "myCustomShape",
                "x": "298.66",
                "y": "282.12",
                "label": "Bucharest"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "92.9",
                "y": "83.78",
                "label": "Oradea",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "157.6",
                "y": "101.81",
                "label": "Cluj-Napoca"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "206.39",
                "y": "124.09",
                "label": "Targu-Mures",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "190.48",
                "y": "175",
                "label": "Sibiu",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "48.36",
                "y": "182.42",
                "label": "Timisoara",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "61.09",
                "y": "147.42",
                "label": "Arad",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "280.63",
                "y": "326.66",
                "label": "Giurgiu",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "224.42",
                "y": "301.21",
                "label": "Craiova",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "253.06",
                "y": "245",
                "label": "Pilesti"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "312.45",
                "y": "230.15",
                "label": "Ploiesti"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "384.57",
                "y": "203.63",
                "label": "Galati",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "389.87",
                "y": "219.54",
                "label": "Braila",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "425.93",
                "y": "225.9",
                "label": "Tulcea",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "340.03",
                "y": "138.93",
                "label": "Bacau",
                "labelpos": "left"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape",
                "x": "364.42",
                "y": "83.78",
                "label": "Iasi",
                "labelpos": "right"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "252",
                "y": "186.66",
                "label": "Brasov"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "404.72",
                "y": "330.9",
                "label": "Mangalia",
                "labelpos": "left"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape",
                "x": "415.33",
                "y": "304.39",
                "label": "Constanta",
                "labelpos": "left"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-javascript">
{
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "BI",
                "x": "298.66",
                "y": "282.12",
                "label": "Bucharest"
            },
            {
                "id": "01",
                "x": "92.9",
                "y": "83.78",
                "label": "Oradea",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "157.6",
                "y": "101.81",
                "label": "Cluj-Napoca"
            },
            {
                "id": "03",
                "x": "206.39",
                "y": "124.09",
                "label": "Targu-Mures",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "190.48",
                "y": "175",
                "label": "Sibiu",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "48.36",
                "y": "182.42",
                "label": "Timisoara",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "61.09",
                "y": "147.42",
                "label": "Arad",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "280.63",
                "y": "326.66",
                "label": "Giurgiu",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "224.42",
                "y": "301.21",
                "label": "Craiova",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "253.06",
                "y": "245",
                "label": "Pilesti"
            },
            {
                "id": "10",
                "x": "312.45",
                "y": "230.15",
                "label": "Ploiesti"
            },
            {
                "id": "11",
                "x": "384.57",
                "y": "203.63",
                "label": "Galati",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "389.87",
                "y": "219.54",
                "label": "Braila",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "425.93",
                "y": "225.9",
                "label": "Tulcea",
                "labelpos": "bottom"
            },
            {
                "id": "14",
                "x": "340.03",
                "y": "138.93",
                "label": "Bacau",
                "labelpos": "left"
            },
            {
                "id": "20",
                "x": "364.42",
                "y": "83.78",
                "label": "Iasi",
                "labelpos": "right"
            },
            {
                "id": "15",
                "x": "252",
                "y": "186.66",
                "label": "Brasov"
            },
            {
                "id": "16",
                "x": "404.72",
                "y": "330.9",
                "label": "Mangalia",
                "labelpos": "left"
            },
            {
                "id": "17",
                "x": "415.33",
                "y": "304.39",
                "label": "Constanta",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "BI",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "20",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape"
            },
            {
                "id": "17",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code></pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
