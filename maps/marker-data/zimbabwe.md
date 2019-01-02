---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Zimbabwe

#### JavaScript Alias: maps/zimbabwe


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
<pre><code class="language-json">
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
    "data": [
        {
            "id": "ZW.BU"
        },
        {
            "id": "ZW.HA"
        },
        {
            "id": "ZW.MA"
        },
        {
            "id": "ZW.MC"
        },
        {
            "id": "ZW.ME"
        },
        {
            "id": "ZW.MW"
        },
        {
            "id": "ZW.MV"
        },
        {
            "id": "ZW.MN"
        },
        {
            "id": "ZW.MS"
        },
        {
            "id": "ZW.MI"
        }
    ],
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
                "id": "HR",
                "shapeid": "myCustomShape",
                "x": "356.44",
                "y": "163.55",
                "label": "Harare",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "238.89",
                "y": "88.93",
                "label": "Kariba",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "331.91",
                "y": "133.91",
                "label": "Chinhoyi",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "371.78",
                "y": "168.66",
                "label": "Chitungwiza",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "447.42",
                "y": "228.97",
                "label": "Mutare",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "348.27",
                "y": "298.48",
                "label": "Masvingo",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "136.67",
                "y": "155.37",
                "label": "Binga",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "86.58",
                "y": "196.26",
                "label": "Hwange",
                "labelpos": "right"
            },
            {
                "id": "BL",
                "shapeid": "myCustomShape",
                "x": "212.31",
                "y": "305.64",
                "label": "Bulawayo"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "231.73",
                "y": "227.95",
                "label": "Gweru",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "294.09",
                "y": "433.42",
                "label": "Beitbridge"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
{
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "ZW.BU"
        },
        {
            "id": "ZW.HA"
        },
        {
            "id": "ZW.MA"
        },
        {
            "id": "ZW.MC"
        },
        {
            "id": "ZW.ME"
        },
        {
            "id": "ZW.MW"
        },
        {
            "id": "ZW.MV"
        },
        {
            "id": "ZW.MN"
        },
        {
            "id": "ZW.MS"
        },
        {
            "id": "ZW.MI"
        }
    ],
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
                "id": "HR",
                "x": "356.44",
                "y": "163.55",
                "label": "Harare",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "238.89",
                "y": "88.93",
                "label": "Kariba",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "331.91",
                "y": "133.91",
                "label": "Chinhoyi",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "371.78",
                "y": "168.66",
                "label": "Chitungwiza",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "447.42",
                "y": "228.97",
                "label": "Mutare",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "348.27",
                "y": "298.48",
                "label": "Masvingo",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "136.67",
                "y": "155.37",
                "label": "Binga",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "86.58",
                "y": "196.26",
                "label": "Hwange",
                "labelpos": "right"
            },
            {
                "id": "BL",
                "x": "212.31",
                "y": "305.64",
                "label": "Bulawayo"
            },
            {
                "id": "08",
                "x": "231.73",
                "y": "227.95",
                "label": "Gweru",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "294.09",
                "y": "433.42",
                "label": "Beitbridge"
            }
        ],
        "application": [
            {
                "id": "HR",
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
                "id": "BL",
                "shapeid": "myCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
