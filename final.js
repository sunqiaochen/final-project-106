
var average_data_1995 = [0.846, 0.991, 0.630, 0.428, 0.143, 0.237]
var average_data_2001 = [0.984, 1.188, 0.551, 0.408, 0.246, 0.123]
var average_data_2007 = [1.02, 0.676, 0.677, 0.560, 0.356, 0.125]
var average_data_2015 = [1.4, 0.54, 0.63, 0.560, 0.356, 0.125]
var average_data_2019 = [1.7, 0.43, 0.58, 0.560, 0.356, 0.125]

var data_continenet_1995 = [
    ['Europe', 6.2],
    ['Asia', 3.4],
    ['NorthAmerica', 5.1],
    ['SouthAmerica', 2.8],
    ['Africa', 1.2]
]

var data_continenet_2001= [
    ['Europe', 6.4],
    ['Asia', 4.1],
    ['NorthAmerica', 5.3],
    ['SouthAmerica', 3.0],
    ['Africa', 1.3]
]

var data_continenet_2007 = [
    ['Europe', 6.6],
    ['Asia', 4.6],
    ['NorthAmerica', 5.5],
    ['SouthAmerica', 3.4],
    ['Africa', 2.1]

]
var data_continenet_2015 = [
    ['Europe', 6.85],
    ['Asia', 5.0],
    ['NorthAmerica', 5.6],
    ['SouthAmerica', 3.6],
    ['Africa', 2.2]

]
var data_continenet_2018 = [
    ['Europe', 6.9],
    ['Asia', 5.4],
    ['NorthAmerica', 5.96],
    ['SouthAmerica', 4.0],
    ['Africa', 2.3]

]



function plot_divider(){
const chart = Highcharts.chart('divider', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'You have five choices'
    },
    xAxis: {
        categories: ["1995 index", "2001 index", "2007 index", "2015 index", "2018 index"]
    },
  
    series: [{
        data: [{
            name: '1995 index',
            y: 100,
        }, {
            name: '2001 index',
            y: 100
        }, {
            name: '2007 index',
            y: 100
        }, {
            name: '2015 index',
            y: 100

        },{
            name: '2018 index',
            y: 100
        }

    
    ]
        ,
        allowPointSelect: true
    }],

    plotOptions: {series: {
			point: {
				events: {
					select: function () {
						if (this.name == "1995 index") {
                            plot_spider_1995();
                            pyramid_1995()
                        }
                        if (this.name == "2001 index") {
                            plot_spider_2001();
                            pyramid_2001();
                        }
                        if (this.name == "2007 index") {
                            plot_spider_2007();
                            pyramid_2007();
                        }
                        if (this.name == "2015 index") {
                            plot_spider_2015();
                            pyramid_2015();
                    }
                    if (this.name == "2018 index") {
                        plot_spider_2018();
                        pyramid_2018();
				}
					}
				}
			}
		}
     
    },
});
}


// plot spider chart of three different year
function plot_spider_1995(){
    Highcharts.chart('spider1', {

        chart: {
            polar: true,
            type: 'line'
        },
    
        title: {
            text: '1995 Spider chart',
            x: -60
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Economy (GDP per Capita)', 'Family', 'Health (Life Expectancy)', 'Freedom',
                'Trust (Government Corruption)', 'Generosity'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
    
        series: [{
            name: 'index',
            data: average_data_1995,
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
}

function plot_spider_2001(){
    Highcharts.chart('spider1', {

        chart: {
            polar: true,
            type: 'line'
        },
    
        title: {
            text: '2001 Spider chart',
            x: -30
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Economy (GDP per Capita)', 'Family', 'Health (Life Expectancy)', 'Freedom',
                'Trust (Government Corruption)', 'Generosity'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
    
        series: [{
            name: 'index',
            data: average_data_2001,
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
}

function plot_spider_2007(){
    Highcharts.chart('spider1', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: '2007 Spider chart',
        x: -40
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Economy (GDP per Capita)', 'Family', 'Health (Life Expectancy)', 'Freedom',
            'Trust (Government Corruption)', 'Generosity'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    series: [{
        name: 'index',
        data: average_data_2007,
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});


}

function plot_spider_2015(){
    Highcharts.chart('spider1', {

        chart: {
            polar: true,
            type: 'line'
        },
    
        title: {
            text: '2015 Spider chart',
            x: -40
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Economy (GDP per Capita)', 'Family', 'Health (Life Expectancy)', 'Freedom',
                'Trust (Government Corruption)', 'Generosity'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
    
        series: [{
            name: 'index',
            data: average_data_2015,
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
}

function plot_spider_2018(){ 
    Highcharts.chart('spider1', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: '2018 Spider chart',
        x: -40
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Economy (GDP per Capita)', 'Family', 'Health (Life Expectancy)', 'Freedom',
            'Trust (Government Corruption)', 'Generosity'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    series: [{
        name: 'index',
        data: average_data_2018,
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});}


// plot pyramid of three differet year
function pyramid_1995() {
    Highcharts.chart('container', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: '1995 Pyramid3D Chart'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '50%',
                height: '80%',
                center: ['60%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: data_continenet_2015
        }]
    });
}
function pyramid_2001(){
    Highcharts.chart('container', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: '2001 Pyramid3D Chart'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '50%',
                height: '80%',
                center: ['60%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: data_continenet_2001
        }]
    });
}
function pyramid_2007() {
    Highcharts.chart('container', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: '2007 Pyramid3D Chart'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '50%',
                height: '80%',
                center: ['60%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: data_continenet_2007
        }]
    });
}
function pyramid_2015(){
    Highcharts.chart('container', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: '2015 Pyramid3D Chart'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '50%',
                height: '80%',
                center: ['60%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: data_continenet_2015
        }]
    });

}
function pyramid_2018(){
    Highcharts.chart('container', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: '2018 Pyramid3D Chart'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '50%',
                height: '80%',
                center: ['60%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: data_continenet_2018
        }]
    });

}

// barplot of different countries happiness index
function barplot() {
    Highcharts.chart('bars', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'World happiness index'
        },
        xAxis: {
            categories: ['Africa', 'South America', 'North America', 'Europe', 'Asia'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'happiness index',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1995',
            data: [1.2, 2.8, 5.1, 6.2, 3.4]
        }, {
            name: 'Year 2001',
            data: [1.3, 3.0, 5.3, 6.4, 4.1]
        }, {
            name: 'Year 2007',
            data: [2.1, 3.4, 5.5, 6.6, 4.6]
        }, {
            name: 'Year 2015',
            data: [2.2, 3.6, 5.6, 6.85, 5.0]
        }, {
            name: 'Year 2018',
            data: [2.3, 4.0, 5.95, 6.9, 5.4]
        }
    ]
    });
}


function timeplot(){
    Highcharts.chart('container-time', {
        chart: {
            zoomType: 'x',
            type: 'timeline'
        },
        xAxis: {
            type: 'datetime',
            visible: false
        },
        yAxis: {
            gridLineWidth: 1,
            title: null,
            labels: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Timeline of Happiness Index Research'
        },
        subtitle: {
            text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
        },
        tooltip: {
            style: {
                width: 300
            }
        },
        series: [{
            dataLabels: {
                allowOverlap: false,
                format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                    '{point.x:%d %b %Y}</span><br/>{point.label}'
            },
            marker: {
                symbol: 'circle'
            },
            data: [{
                x: Date.UTC(1995,3, 15),
                label: 'First research of world happiness index',
                description: "In 1990, the world happiness organization started the first research of world happiness index and there are only 40 countries in this huge research."
            }, {
                x: Date.UTC(2001, 11, 2),
                label: 'Second research of world happiness index',
                description: "In the 21th century, this organization started the second research and this time some huge countries joined the research such as China and India"
            }, {
                x: Date.UTC(2007, 3, 17),
                label: 'Third research of world happiness index',
                description: "After six years, the organization started the third research, which now have 100 countries"
            }, {
                x: Date.UTC(2015, 7, 8),    
                label: 'Fourth research of world happiness index',
                description: "In 2015, more countries joined the researches. Before, there are only few countries in Africa such as Egypt. In this year, almost half of African countries joined the research"
            }, {
                x: Date.UTC(2018, 10, 20),
                label: 'Fifth research of world happiness index',
                description: "This is the nearest research that happend in 2018 and this time there are 156 countries in the research which is more than half of countries in the world"
            }]
        }]
    });
}

