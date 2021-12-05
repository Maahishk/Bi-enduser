import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectcreditadded, selectcreditextended } from './slice/selectors'
import { useCreditSlice } from 'app/pages/CreditPage/slice/index'
import { teacherStyles } from '../TeacherPage/style'
import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import {
  faUserGraduate,
  faSignOutAlt,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import CardTable from 'app/components/CardTable'
import { useStyles } from 'styles/common-styles'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Sunburst from 'sunburst-chart'

const headCells = [
  { id: 1, label: 'Student Name' },
  { id: 2, label: 'credit added' },
]

const data = [
  {
    name: 'root',
    children: [
      {
        name: 'leafA',
        value: 3,
      },
      {
        name: 'nodeB',
        children: [
          {
            name: 'leafBA',
            value: 5,
          },
          {
            name: 'leafBB',
            value: 1,
          },
        ],
      },
    ],
  },
]

const optionsActivity: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'CREDIT ADDED VS CREDIT DEDUCTED TREND',
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
      text: 'Credit',
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
      name: 'Credit added',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 600, 2,
        0, 0, 1, 0, 1, 0, 1, 3, 2, 0, 1, 3, 0, 3, 0, 150, 0, 0, 2, 0, 0, 3, 0,
        0, 250, 20, 0, 0, 0, 0, 0, 2, 0, 1, 0, 750, 0, 2, 1, 0, 3, 0, 6, 0, 8,
        0, 2, 0, 0, 0, 2, 0, 0, 2,
      ],
    },
    {
      name: 'Credit Deducted',
      data: [],
    },
  ],
}

export const CreditPage = (props: HighchartsReact.Props) => {
  const classes = useStyles()
  const activityclass = teacherStyles()
  const { actions } = useCreditSlice()
  const data1 = useSelector(selectcreditadded)
  const data2 = useSelector(selectcreditextended)
  const dispatch = useDispatch()
  const [creditaddedlist, setcreditaddedlist] = React.useState<[]>([])
  const [creditextenedlist, setcreditextenedlist] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getCreditAddList())
    dispatch(actions.getCreditExtendList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data1) {
      const creditAddedListArray: any = []
      data1.map((item: any) => {
        const student = item.student_name
        const studentname = (
          <a href="/home/activeschool/activeclass/studentprofile">{student}</a>
        )
        creditAddedListArray.push({
          studentname: studentname,
          mastery: item.credit_added,
        })
        return creditAddedListArray
      })

      setcreditaddedlist(creditAddedListArray)
    }

    if (data2) {
      const creditExtendedListArray: any = []
      data2.map((item: any) => {
        const student = item.student_name
        const studentname = (
          <a href="/home/activeschool/activeclass/studentprofile">{student}</a>
        )
        creditExtendedListArray.push({
          studentname: studentname,
          mastery: item.credit_added,
        })
        return creditExtendedListArray
      })
      setcreditextenedlist(creditExtendedListArray)
    }
  }, [data1, data2])
  return (
    <>
      <Helmet>
        <title>Credit Page</title>
        <meta
          name="description"
          content="A Boilerplate application credit page"
        />
      </Helmet>
      <Header title="Credit Dashboard" desc="Credit Dashboard" />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard
            symbol={faUserGraduate}
            title="Number of Transaction"
            number={73}
          />
          <SimpleCard
            symbol={faSignOutAlt}
            title="Total credit added"
            number={1347}
          />
          <SimpleCard
            symbol={faEye}
            title="Total credit deducted"
            number={759}
          />
          <SimpleCard symbol={faEyeSlash} title="Net Credit" number={3749} />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="Most Credit Added"
            headCell={headCells}
            rows={creditaddedlist}
            search={false}
          />
          <CardTable
            title="Most Credit Extended"
            headCell={headCells}
            rows={creditextenedlist}
            search={false}
          />
        </div>
        <div className={classes.card}>
          <div className={activityclass.activity}>
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsActivity}
              {...props}
            />
          </div>
        </div>
        <div className={classes.chart}>
          <div className={classes.chartleft}></div>
          <div className={classes.chartright}></div>
        </div>
      </div>
    </>
  )
}
