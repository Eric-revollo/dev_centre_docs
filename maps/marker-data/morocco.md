---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Morocco

#### JavaScript Alias: maps/morocco


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
            "id": "MA.CO"
        },
        {
            "id": "MA.DA"
        },
        {
            "id": "MA.FB"
        },
        {
            "id": "MA.GB"
        },
        {
            "id": "MA.GC"
        },
        {
            "id": "MA.GE"
        },
        {
            "id": "MA.LB"
        },
        {
            "id": "MA.MK"
        },
        {
            "id": "MA.MT"
        },
        {
            "id": "MA.OR"
        },
        {
            "id": "MA.OL"
        },
        {
            "id": "MA.RZ"
        },
        {
            "id": "MA.SM"
        },
        {
            "id": "MA.TD"
        },
        {
            "id": "MA.TO"
        },
        {
            "id": "MA.TH"
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
                "id": "RB",
                "shapeid": "myCustomShape",
                "x": "252.47",
                "y": "64.55",
                "label": "Rabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "277.1",
                "y": "16.31",
                "label": "Tangier",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "289.42",
                "y": "23.5",
                "label": "Ceuta Tetouan",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "361.26",
                "y": "61.47",
                "label": "Oujda",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "215.52",
                "y": "126.13",
                "label": "Marrakech",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "204.23",
                "y": "101.5",
                "label": "Safi",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "195",
                "y": "152.81",
                "label": "Agadir",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "17.44",
                "y": "358.08",
                "label": "Tarfaya",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "232.97",
                "y": "166.16",
                "label": "Ouarzazat",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "358.18",
                "y": "102.52",
                "label": "Bou Arfa",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "263.76",
                "y": "51.21",
                "label": "Kenitra",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "270.94",
                "y": "86.1",
                "label": "Meknes",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "292.5",
                "y": "66.6",
                "label": "Fes",
                "labelpos": "right"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "217.57",
                "y": "85.08",
                "label": "El Jadida",
                "labelpos": "left"
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
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "MA.CO"
        },
        {
            "id": "MA.DA"
        },
        {
            "id": "MA.FB"
        },
        {
            "id": "MA.GB"
        },
        {
            "id": "MA.GC"
        },
        {
            "id": "MA.GE"
        },
        {
            "id": "MA.LB"
        },
        {
            "id": "MA.MK"
        },
        {
            "id": "MA.MT"
        },
        {
            "id": "MA.OR"
        },
        {
            "id": "MA.OL"
        },
        {
            "id": "MA.RZ"
        },
        {
            "id": "MA.SM"
        },
        {
            "id": "MA.TD"
        },
        {
            "id": "MA.TO"
        },
        {
            "id": "MA.TH"
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
                "id": "RB",
                "x": "252.47",
                "y": "64.55",
                "label": "Rabat",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "277.1",
                "y": "16.31",
                "label": "Tangier",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "289.42",
                "y": "23.5",
                "label": "Ceuta Tetouan",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "361.26",
                "y": "61.47",
                "label": "Oujda",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "215.52",
                "y": "126.13",
                "label": "Marrakech",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "204.23",
                "y": "101.5",
                "label": "Safi",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "195",
                "y": "152.81",
                "label": "Agadir",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "17.44",
                "y": "358.08",
                "label": "Tarfaya",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "232.97",
                "y": "166.16",
                "label": "Ouarzazat",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "358.18",
                "y": "102.52",
                "label": "Bou Arfa",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "263.76",
                "y": "51.21",
                "label": "Kenitra",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "270.94",
                "y": "86.1",
                "label": "Meknes",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "292.5",
                "y": "66.6",
                "label": "Fes",
                "labelpos": "right"
            },
            {
                "id": "13",
                "x": "217.57",
                "y": "85.08",
                "label": "El Jadida",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "RB",
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
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
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
