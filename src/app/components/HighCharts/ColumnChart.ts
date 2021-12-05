export const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'STUDENTS LOGGED IN PER SCHOOL',
  },
  xAxis: {
    type: 'linear',
  },
  yAxis: {
    title: {
      text: 'Number of students',
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
      name: 'Schools',
      colorByPoint: true,
      data: [
        {
          name: 'Schools having number count 22',
          y: 22,
        },
        {
          name: 'Schools having number count 4',
          y: 4,
        },
        {
          name: 'Schools having number count 2',
          y: 2,
        },
        {
          name: 'Schools having number count 3',
          y: 3,
        },
        {
          name: 'Schools having number count 12',
          y: 12,
        },
      ],
    },
  ],
}
