$(function(){
    $.barChart = function(barChart){ 
		var chart;
		var colWidth = 21;
		
		Highcharts.theme = {
		   colors: ["rgba(58,58,58,0.75)", "#ffffff", "rgba(43,144,143,0.99)","#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
			  "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
		   chart: {
			  backgroundColor: {
				 linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
				 stops: [
					[0, '#2a2a2b'],
					[1, '#3e3e40']
				 ]
			  },
			  style: {
				 fontFamily: "'Droid Sans', sans-serif"
			  },
			  plotBorderColor: '#606063'
		   },
		   title: {
			  style: {
				 color: '#E0E0E3',
				 fontSize: '20px'
			  }
		   },
		   subtitle: {
			  style: {
				 color: '#E0E0E3',
				 textTransform: 'uppercase'
			  }
		   },
		   xAxis: {
			  gridLineColor: '#707073',
			  rotation: -45,
			  labels: {
					style: {
						color: '#FFF',
						font: '1.3em "Segoe UI"'
					}
			  },
			  lineColor: '#707073',
			  minorGridLineColor: '#505053',
			  tickColor: '#707073',
			  title: {
				 style: {
					color: '#A0A0A3',
					font: 'normal 0em "Segoe UI", Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
				 }
			  }
		   },
		   yAxis: {
			  gridLineColor: '#707073',
			  labels: {
				 style: {
					color: '#E0E0E3',
					font: '1.3em "Segoe UI"'
				 }
			  },
			  lineColor: '#707073',
			  minorGridLineColor: '#505053',
			  tickColor: '#707073',
			  tickWidth: 1,
			  title: {
				 style: {
					color: '#A0A0A3',
					font: 'normal 0em "Segoe UI", Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
				 }
			  }
		   },
		   tooltip: {
			  backgroundColor: 'rgba(0, 0, 0, 0.85)',
			  style: {
				color: '#F0F0F0',
				fontSize: '20px'
			  }
		   },
		   plotOptions: {
			  series: {
				 pointPadding: 0,
				 groupPadding: 0,
				 dataLabels: {
					color: '#B0B0B3'
				 },
				 marker: {
					lineColor: '#333'
				 }
			  },
			  boxplot: {
				 fillColor: '#505053'
			  },
			  candlestick: {
				 lineColor: 'white'
			  },
			  errorbar: {
				 color: 'white'
			  }
		   },
		   legend: {
			  itemStyle: {
				 color: '#E0E0E3'
			  },
			  itemHoverStyle: {
				 color: '#FFF'
			  },
			  itemHiddenStyle: {
				 color: '#606063'
			  }
		   },
		   credits: {
			  style: {
				 color: '#666'
			  }
		   },
		   labels: {
			  style: {
				 color: '#707073'
			  }
		   },

		   drilldown: {
			  activeAxisLabelStyle: {
				 color: '#F0F0F3'
			  },
			  activeDataLabelStyle: {
				 color: '#F0F0F3'
			  }
		   },

		   navigation: {
			  buttonOptions: {
				 symbolStroke: '#DDDDDD',
				 theme: {
					fill: '#505053'
				 }
			  }
		   },
		   rangeSelector: {
			  buttonTheme: {
				 fill: '#505053',
				 stroke: '#000000',
				 style: {
					color: '#CCC'
				 },
				 states: {
					hover: {
					   fill: '#707073',
					   stroke: '#000000',
					   style: {
						  color: 'white'
					   }
					},
					select: {
					   fill: '#000003',
					   stroke: '#000000',
					   style: {
						  color: 'white'
					   }
					}
				 }
			  },
			  inputBoxBorderColor: '#505053',
			  inputStyle: {
				 backgroundColor: '#333',
				 color: 'silver'
			  },
			  labelStyle: {
				 color: 'silver'
			  }
		   },

		   navigator: {
			  handles: {
				 backgroundColor: '#666',
				 borderColor: '#AAA'
			  },
			  outlineColor: '#CCC',
			  maskFill: 'rgba(255,255,255,0.1)',
			  series: {
				 color: '#7798BF',
				 lineColor: '#A6C7ED'
			  },
			  xAxis: {
				 gridLineColor: '#505053'
			  }
		   },

		   scrollbar: {
			  barBackgroundColor: '#808083',
			  barBorderColor: '#808083',
			  buttonArrowColor: '#CCC',
			  buttonBackgroundColor: '#606063',
			  buttonBorderColor: '#606063',
			  rifleColor: '#FFF',
			  trackBackgroundColor: '#404043',
			  trackBorderColor: '#404043'
		   },

		   // special colors for some of the
		   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
		   background2: '#505053',
		   dataLabelsColor: '#B0B0B3',
		   textColor: '#C0C0C0',
		   contrastTextColor: '#F0F0F3',
		   maskColor: 'rgba(255,255,255,0.3)'
		};

		Highcharts.setOptions(Highcharts.theme);

		var chartOptions = {
            chart: {
				renderTo: barChart.container,
                /*type: barChart.type*/
				zoomType: 'xy'
            },
            title: {
                text: barChart.title
            },
            xAxis: {
                categories: barChart.xAxisCategory,
				rotation: -45,
                title: {
                    text: barChart.xAxisCaption
                }
            },
			yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Budget',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
				plotBands: [
					{from: -500, to: -25, color: 'rgba(255, 0, 0, 0.5)'},
					{from: -25, to: 0, color: 'rgba(255, 255, 0, 0.5)'},
					{from: -0, to: 2500, color: 'rgba(0, 255, 0, 0.5)'}
				]
            }, { // Secondary yAxis
                title: {
                    text: 'Expenses',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true
            }],
            tooltip: {
                formatter: function() {
                    return ''+
                        '$ '+ this.y + barChart.unit;
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
						color: 'white',
						y: 100,
						x: 5,
					    style: {
							fontSize: '1.2em'
						}
                    },
                    pointWidth: 32,
                    pointPadding: 0
				}
			},
            legend: {
				enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'bottom',
                x: -10,
                y: -600,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: false
            },
            credits: {
                enabled: false
            },
						
            series: [{
                type: 'column',
                yAxis: 1,
                data: barChart.spend,
            },{
                type: 'spline',
                data: barChart.budget
            }
			]
        }
		
		chart = new Highcharts.Chart(chartOptions);		
	}
});