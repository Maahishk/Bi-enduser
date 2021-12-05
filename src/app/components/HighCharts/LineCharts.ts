export const options: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'ENROLLED CLASS VS AVERAGE MASTERY',
  },
  xAxis: {
    type: 'linear',
  },
  yAxis: {
    title: {
      text: 'Mastery percentage',
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%',
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },
  series: [
    {
      name: 'Grade_10_Science',
      colorByPoint: true,
      data: [0, 0, 0, 0],
    },
  ],
}
