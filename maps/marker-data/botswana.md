---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Botswana

#### JavaScript Alias: maps/botswana


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
            "id": "BW.CE"
        },
        {
            "id": "BW.GH"
        },
        {
            "id": "BW.KG"
        },
        {
            "id": "BW.KL"
        },
        {
            "id": "BW.KW"
        },
        {
            "id": "BW.NE"
        },
        {
            "id": "BW.NW"
        },
        {
            "id": "BW.SE"
        },
        {
            "id": "BW.SO"
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
                "id": "GA",
                "shapeid": "myCustomShape",
                "x": "378.76",
                "y": "430.85",
                "label": "Gaborone",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "239.97",
                "y": "122.21",
                "label": "Maun"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "475.08",
                "y": "219.57",
                "label": "Francistown",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "502.01",
                "y": "262.03",
                "label": "Selebi Phikwe",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "491.65",
                "y": "281.71",
                "label": "Serowe",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "490.61",
                "y": "303.46",
                "label": "Mahalapye",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "364.26",
                "y": "414.28",
                "label": "Molepolole"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "363.22",
                "y": "446.39",
                "label": "Kanye",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "179.9",
                "y": "502.32",
                "label": "Tshabong",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "34.9",
                "y": "281.71",
                "label": "Mamuno",
                "labelpos": "right"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "150.9",
                "y": "243.39",
                "label": "Ghanzi",
                "labelpos": "right"
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
            "id": "BW.CE"
        },
        {
            "id": "BW.GH"
        },
        {
            "id": "BW.KG"
        },
        {
            "id": "BW.KL"
        },
        {
            "id": "BW.KW"
        },
        {
            "id": "BW.NE"
        },
        {
            "id": "BW.NW"
        },
        {
            "id": "BW.SE"
        },
        {
            "id": "BW.SO"
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
                "id": "GA",
                "x": "378.76",
                "y": "430.85",
                "label": "Gaborone",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "239.97",
                "y": "122.21",
                "label": "Maun"
            },
            {
                "id": "02",
                "x": "475.08",
                "y": "219.57",
                "label": "Francistown",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "502.01",
                "y": "262.03",
                "label": "Selebi Phikwe",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "491.65",
                "y": "281.71",
                "label": "Serowe",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "490.61",
                "y": "303.46",
                "label": "Mahalapye",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "364.26",
                "y": "414.28",
                "label": "Molepolole"
            },
            {
                "id": "07",
                "x": "363.22",
                "y": "446.39",
                "label": "Kanye",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "179.9",
                "y": "502.32",
                "label": "Tshabong",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "34.9",
                "y": "281.71",
                "label": "Mamuno",
                "labelpos": "right"
            },
            {
                "id": "10",
                "x": "150.9",
                "y": "243.39",
                "label": "Ghanzi",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "GA",
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
