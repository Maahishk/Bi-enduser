import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import { faUserGraduate, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useStyles } from 'styles/common-styles'
import { teacherStyles } from './style'

const options: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'TOTAL LOGIN VS UNIQUE LOGIN OF TEACHERS',
  },
  subtitle: {
    text: 'click and drag in the plot area to zoom in',
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 24,
    categories: ['Jan', 'Feb'],
  },
  yAxis: {
    title: {
      text: 'Login counts',
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointRange: 0.4,
      borderWidth: 0,
      dataLabels: {
        enabled: false,
        format: '{point.y:.1f}%',
      },
    },
  },

  series: [
    {
      name: 'Login counts',
      data: [],
    },
    {
      name: 'unique login counts',
      data: [],
    },
  ],
}

export const TeacherPage = (props: HighchartsReact.Props) => {
  const classes = useStyles()
  const style = teacherStyles()

  return (
    <>
      <Helmet>
        <title>Teacher Page</title>
        <meta
          name="description"
          content="A Boilerplate application teacherpage"
        />
      </Helmet>
      <Header title="Teacher's Dashboard" desc="Teacher's Dashboard" />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard
            symbol={faUserGraduate}
            title="Total Teachers"
            number={1347}
          />
          <SimpleCard
            symbol={faSignOutAlt}
            title="Unique Logins"
            number={759}
          />
        </div>
        <div className={style.activity}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            {...props}
          />
        </div>
      </div>
    </>
  )
}
