{
    type: 'line',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "lineThickness": "2"
        },
        "data": [{
                "label": "Mon",
                "value": "15123"
            },
            {
                "label": "Tue",
                "value": "14233"
            },
            {
                "label": "Wed",
                "value": "23507"
            },
            {
                "label": "Thu",
                "value": "9110"
            },
            {
                "label": "Fri",
                "value": "15529"
            },
            {
                "label": "Sat",
                "value": "20803"
            },
            {
                "label": "Sun",
                "value": "19202"
            }
        ],
        "trendlines": [{
            "line": [{
                "startvalue": "18500",
                "color": "#29C3BE",
                "displayvalue": "Average{br}weekly{br}footfall",
                "valueOnRight": "1",
                "thickness": "2"
            }]
        }]
    }
}