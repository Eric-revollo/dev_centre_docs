---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: NorthKorea

#### JavaScript Alias: maps/northkorea


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
                "id": "PO",
                "shapeid": "myCustomShape",
                "x": "136.62",
                "y": "411.61",
                "label": "P'yongyang",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "481.25",
                "y": "70.04",
                "label": "Sonbong"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "475.13",
                "y": "77.18",
                "label": "Najin",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "435.37",
                "y": "128.16",
                "label": "Ch'ongjin"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "315.05",
                "y": "172",
                "label": "Hyesan",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "386.43",
                "y": "253.57",
                "label": "Kimch'aek"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "202.9",
                "y": "196.47",
                "label": "Kanggye"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "279.37",
                "y": "308.63",
                "label": "Hamhung"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "277.33",
                "y": "319.85",
                "label": "Hungnam",
                "labelpos": "right"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "22.43",
                "y": "298.43",
                "label": "Sinuiju"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "164.15",
                "y": "348.4",
                "label": "Sunch'on"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "254.9",
                "y": "393.26",
                "label": "Wonsan"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "325.25",
                "y": "445.26",
                "label": "Kuum-ni"
            },
            {
                "id": "23",
                "shapeid": "newCustomShape",
                "x": "89.72",
                "y": "432",
                "label": "Namp'o",
                "labelpos": "left"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape",
                "x": "106.03",
                "y": "430.98",
                "label": "Songnim",
                "labelpos": "right"
            },
            {
                "id": "25",
                "shapeid": "newCustomShape",
                "x": "192.7",
                "y": "516.63",
                "label": "P'anmunjom-ni",
                "labelpos": "right"
            },
            {
                "id": "26",
                "shapeid": "newCustomShape",
                "x": "182.5",
                "y": "513.57",
                "label": "Kaesong",
                "labelpos": "left"
            },
            {
                "id": "27",
                "shapeid": "newCustomShape",
                "x": "110.11",
                "y": "498.28",
                "label": "Haeju"
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
                "id": "PO",
                "x": "136.62",
                "y": "411.61",
                "label": "P'yongyang",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "481.25",
                "y": "70.04",
                "label": "Sonbong"
            },
            {
                "id": "02",
                "x": "475.13",
                "y": "77.18",
                "label": "Najin",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "435.37",
                "y": "128.16",
                "label": "Ch'ongjin"
            },
            {
                "id": "04",
                "x": "315.05",
                "y": "172",
                "label": "Hyesan",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "386.43",
                "y": "253.57",
                "label": "Kimch'aek"
            },
            {
                "id": "07",
                "x": "202.9",
                "y": "196.47",
                "label": "Kanggye"
            },
            {
                "id": "08",
                "x": "279.37",
                "y": "308.63",
                "label": "Hamhung"
            },
            {
                "id": "10",
                "x": "277.33",
                "y": "319.85",
                "label": "Hungnam",
                "labelpos": "right"
            },
            {
                "id": "09",
                "x": "22.43",
                "y": "298.43",
                "label": "Sinuiju"
            },
            {
                "id": "11",
                "x": "164.15",
                "y": "348.4",
                "label": "Sunch'on"
            },
            {
                "id": "12",
                "x": "254.9",
                "y": "393.26",
                "label": "Wonsan"
            },
            {
                "id": "13",
                "x": "325.25",
                "y": "445.26",
                "label": "Kuum-ni"
            },
            {
                "id": "23",
                "x": "89.72",
                "y": "432",
                "label": "Namp'o",
                "labelpos": "left"
            },
            {
                "id": "24",
                "x": "106.03",
                "y": "430.98",
                "label": "Songnim",
                "labelpos": "right"
            },
            {
                "id": "25",
                "x": "192.7",
                "y": "516.63",
                "label": "P'anmunjom-ni",
                "labelpos": "right"
            },
            {
                "id": "26",
                "x": "182.5",
                "y": "513.57",
                "label": "Kaesong",
                "labelpos": "left"
            },
            {
                "id": "27",
                "x": "110.11",
                "y": "498.28",
                "label": "Haeju"
            }
        ],
        "application": [
            {
                "id": "PO",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
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
                "id": "23",
                "shapeid": "newCustomShape"
            },
            {
                "id": "24",
                "shapeid": "newCustomShape"
            },
            {
                "id": "25",
                "shapeid": "newCustomShape"
            },
            {
                "id": "26",
                "shapeid": "newCustomShape"
            },
            {
                "id": "27",
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
