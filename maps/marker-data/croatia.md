---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Croatia

#### JavaScript Alias: maps/croatia


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
    "markers": {
        "shapes": [
            {
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "ZA",
                "shapeid": "myCustomShape",
                "x": "208.08",
                "y": "91.8",
                "label": "Zagreb",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "241.74",
                "y": "133.62",
                "label": "Sisak"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "422.28",
                "y": "106.08",
                "label": "Osijek",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "444.72",
                "y": "136.68",
                "label": "Vukovar",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "76.5",
                "y": "137.69",
                "label": "Rijeka",
                "labelpos": "left"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "90.78",
                "y": "155.04",
                "label": "Omisalj",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "33.66",
                "y": "194.82",
                "label": "Pula"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "138.72",
                "y": "270.3",
                "label": "Zadar",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "196.86",
                "y": "330.48",
                "label": "Sibenik"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "233.58",
                "y": "352.92",
                "label": "Ploce"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "377.4",
                "y": "441.66",
                "label": "Dubrovnik",
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
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "ZA",
                "x": "208.08",
                "y": "91.8",
                "label": "Zagreb",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "241.74",
                "y": "133.62",
                "label": "Sisak"
            },
            {
                "id": "02",
                "x": "422.28",
                "y": "106.08",
                "label": "Osijek",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "444.72",
                "y": "136.68",
                "label": "Vukovar",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "76.5",
                "y": "137.69",
                "label": "Rijeka",
                "labelpos": "left"
            },
            {
                "id": "05",
                "x": "90.78",
                "y": "155.04",
                "label": "Omisalj",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "33.66",
                "y": "194.82",
                "label": "Pula"
            },
            {
                "id": "06",
                "x": "138.72",
                "y": "270.3",
                "label": "Zadar",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "196.86",
                "y": "330.48",
                "label": "Sibenik"
            },
            {
                "id": "09",
                "x": "233.58",
                "y": "352.92",
                "label": "Ploce"
            },
            {
                "id": "10",
                "x": "377.4",
                "y": "441.66",
                "label": "Dubrovnik",
                "labelpos": "right"
            }
        ],
        "application": [
            {
                "id": "ZA",
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
                "id": "08",
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
