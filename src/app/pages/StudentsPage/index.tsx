import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectleastactiveSlice,
  selectmostactiveSlice,
} from './slice/selectors'
import { useStudentsPageSlice } from 'app/pages/StudentsPage/slice/index'
import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import CardTable from 'app/components/CardTable'
import {
  faEyeSlash,
  faUserGraduate,
  faSignOutAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { useStyles } from 'styles/common-styles'
import { Doughnut } from 'react-chartjs-2'
import { studentStyles } from './style'
import { teacherStyles } from '../TeacherPage/style'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const headCells = [
  { id: 0, label: 'S.N' },
  { id: 1, label: 'Student Name' },
  { id: 2, label: 'Mastery Completion Count' },
]

const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'AGGREGATED MASTERY STATUS',
  },
  xAxis: {
    type: 'linear',
    categories: ['Complete Mastery', 'Adequate Mastery', 'Inadequate Mastery'],
  },
  yAxis: {
    title: {
      text: 'Number of Mastery',
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
          name: 'Complete Mastery',
          y: 1123,
        },
        {
          name: 'Adequate Mastery',
          y: 2121,
        },
        {
          name: 'Inadequate Mastery',
          y: 4647,
        },
      ],
    },
  ],
}

const optionsActivity: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'TOTAL LOGIN VS UNIQUE LOGIN OF STUDENTS',
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
      data: [
        0, 0, 1, 12, 15, 16, 17, 18, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 34, 15, 36,
        56, 34, 12,
      ],
    },
  ],
}

export const StudentsPage = (props: HighchartsReact.Props) => {
  const classes = useStyles()
  const activityclass = teacherStyles()
  const style = studentStyles()
  const { actions } = useStudentsPageSlice()
  const data1 = useSelector(selectmostactiveSlice)
  const data2 = useSelector(selectleastactiveSlice)
  const dispatch = useDispatch()
  const [mostactiveList, setmostActiveList] = React.useState<[]>([])
  const [leastactiveList, setleastActiveList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getMostActiveList())
    dispatch(actions.getLeastActiveList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data1) {
      const mostactiveListArray: any = []
      data1.map((item: any) => {
        const student = item.student_name
        const studentname = (
          <a href="/home/activeschool/activeclass/studentprofile">{student}</a>
        )
        mostactiveListArray.push({
          id: item.id,
          studentname: studentname,
          mastery: item.masterycompletioncount,
        })
        return mostactiveListArray
      })

      setmostActiveList(mostactiveListArray)
    }

    if (data2) {
      const leastactiveListArray: any = []
      data2.map((item: any) => {
        const student = item.student_name
        const studentname = (
          <a href="/home/activeschool/activeclass/studentprofile">{student}</a>
        )
        leastactiveListArray.push({
          id: item.id,
          studentname: studentname,
          mastery: item.masterycompletioncount,
        })
        return leastactiveListArray
      })
      setleastActiveList(leastactiveListArray)
    }
  }, [data1, data2])

  return (
    <>
      <Helmet>
        <title>Student's Dashboard</title>
        <meta
          name="description"
          content="A Boilerplate application student page"
        />
      </Helmet>
      <Header title="Student's Dashboard" desc="Student's Dashboard" />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard
            symbol={faUserGraduate}
            title="Total Students"
            number={28184}
          />
          <SimpleCard
            symbol={faSignOutAlt}
            title="Unique Logins"
            number={4160}
          />
          <SimpleCard symbol={faEye} title="Completed Videos" number={6471} />
          <SimpleCard
            symbol={faEyeSlash}
            title="InCompleted Videos"
            number={73}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="Most Active Students"
            headCell={headCells}
            rows={mostactiveList}
            search={false}
          />
          <CardTable
            title="Least Active Students"
            headCell={headCells}
            rows={leastactiveList}
            search={false}
          />
        </div>
        <div className={style.chart}>
          <div className={style.chartleft}>
            <Doughnut
              data={{
                labels: ['Completed', 'Incomplete'],
                datasets: [
                  {
                    label: 'MASTERY COMPLETION STATUS OF VIDEOS',
                    data: [12, 19],
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(218,112,214)'],
                    hoverOffset: 4,
                    borderWidth: 1,
                  },
                ],
              }}
              width={100}
              height={500}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className={style.chartright}>
            <Doughnut
              data={{
                labels: ['Students who didnt login', 'Students who logged in'],
                datasets: [
                  {
                    label: 'LOGIN STATUS OF ALL STUDENTS',
                    data: [12, 19],
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(32,178,170)'],
                    hoverOffset: 4,
                    borderWidth: 1,
                  },
                ],
              }}
              width={100}
              height={500}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div className={style.chart}>
          <div className={style.chartleft}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              {...props}
            />
          </div>
          <div className={style.chartright}></div>
        </div>
        <div className={activityclass.activity}>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsActivity}
            {...props}
          />
        </div>
      </div>
    </>
  )
}
