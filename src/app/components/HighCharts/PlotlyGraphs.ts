export const trenddata = [
  {
    marker: {
      color: ['rgb(255, 0, 0)', 'rgb(0,0,255)'],
    },
    name: 'INCOMPLETE',
    type: 'line',
    x: [1, 2, 3],
    y: [1, 1, 1],
  },
  {
    name: 'COMPLETE',
    type: 'line',
    x: [0, 1, 2],
    y: [2, 2, 2],
  },
]

export const cumulativedata = [
  {
    marker: {
      color: ['rgb(255, 0, 0)', 'rgb(0,0,255)'],
    },
    name: 'INCOMPLETE',
    type: 'line',
    x: [1, 2, 3],
    y: [1, 1, 1],
  },
  {
    name: 'COMPLETE',
    type: 'line',
    x: 0,
    y: 0,
  },
]

export const plotstyle = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
}

export const trendlayout = {
  title: 'COMPLETED VS INCOMPLETE VIDEOS TREND',
  xaxis: {
    title: 'Time',
    type: 'date',
  },
}

export const cumulativelayout = {
  title: 'COMPLETED VS INCOMPLETE VIDEOS CUMULATIVE',
  xaxis: {
    title: 'Time',
    type: 'date',
  },
}
