{
    type: "timeseries",
    renderAt: "container",
    width: "95%",
    height: "450",
    dataSource: {
        data: dataStore,
        caption: {
            text: "Temperature readings of an Italian Town"
        },
        subCaption: {
            text: "Specified bins are 1-month, 1-day, 6-hours & 3-hours"
        },
        yAxis: [{
            "plot": "Temperature",
            "title": "Temperature",
            "plotType": "column",
            "format": {
                "suffix": "°C",
                "label": "Controlled Temperature",
                "value": "10",
            }
        }],
        xAxis: {
            binning: {
                //"year": [],
                "month": [1],
                "day": [1],
                "hour": [3, 6],
                "minute": [] //<Array of multipliers>
                // "second": <Array of multipliers>
                // "millisecond": <Array of multipliers>
            }
        }
    }
}