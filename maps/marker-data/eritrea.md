---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Eritrea

#### JavaScript Alias: maps/eritrea


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
            "id": "ER.AN"
        },
        {
            "id": "ER.DU"
        },
        {
            "id": "ER.DK"
        },
        {
            "id": "ER.GB"
        },
        {
            "id": "ER.MA"
        },
        {
            "id": "ER.SK"
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
                "id": "AS",
                "shapeid": "myCustomShape",
                "x": "136.08",
                "y": "194.1",
                "label": "Asmara",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "115.54",
                "y": "80.1",
                "label": "Nakfa",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "111.43",
                "y": "146.86",
                "label": "Keren"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "93.97",
                "y": "160.21",
                "label": "Akurdet",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "190.51",
                "y": "159.18",
                "label": "Massawa",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "241.86",
                "y": "229.02",
                "label": "Kulul",
                "labelpos": "bottom"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "378.45",
                "y": "312.21",
                "label": "Assab",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "276.78",
                "y": "217.72",
                "label": "Tio"
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
            "id": "ER.AN"
        },
        {
            "id": "ER.DU"
        },
        {
            "id": "ER.DK"
        },
        {
            "id": "ER.GB"
        },
        {
            "id": "ER.MA"
        },
        {
            "id": "ER.SK"
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
                "id": "AS",
                "x": "136.08",
                "y": "194.1",
                "label": "Asmara",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "115.54",
                "y": "80.1",
                "label": "Nakfa",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "111.43",
                "y": "146.86",
                "label": "Keren"
            },
            {
                "id": "03",
                "x": "93.97",
                "y": "160.21",
                "label": "Akurdet",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "190.51",
                "y": "159.18",
                "label": "Massawa",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "241.86",
                "y": "229.02",
                "label": "Kulul",
                "labelpos": "bottom"
            },
            {
                "id": "06",
                "x": "378.45",
                "y": "312.21",
                "label": "Assab",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "276.78",
                "y": "217.72",
                "label": "Tio"
            }
        ],
        "application": [
            {
                "id": "AS",
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
