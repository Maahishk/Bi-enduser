import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSlice } from './slice/selectors'
import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import CardTable from 'app/components/CardTable'
import {
  faUserGraduate,
  faTachometerAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { useStyles } from 'styles/common-styles'
import { useActiveSubjectPageSlice } from './slice'
import PlotlyChart from 'react-plotlyjs-ts'
import {
  cumulativedata,
  cumulativelayout,
  plotstyle,
  trenddata,
  trendlayout,
} from 'app/components/HighCharts/PlotlyGraphs'
import { options } from 'app/components/HighCharts/LineCharts'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const classheadCells = [
  { id: 0, label: 'Active Classes Name' },
  { id: 1, label: 'Total Students' },
  { id: 2, label: 'Total Incomplete Videos' },
  { id: 3, label: 'Total Videos Completed' },
  { id: 4, label: 'Average Mastery' },
  { id: 5, label: 'Mastery Status' },
]

const lessonHeadCells = [
  { id: 0, label: 'Lesson' },
  { id: 1, label: 'Mastery Completion Count' },
]

const studentheadCell = [
  { id: 0, label: 'StudentId' },
  { id: 1, label: 'mastery Completion Count' },
]

const studentactivityheadcell = [
  { id: 0, label: 'Student name' },
  { id: 1, label: 'Student Email' },
]

export const ActiveSubjectPage = (props: HighchartsReact.Props) => {
  const classes = useStyles()
  const { actions } = useActiveSubjectPageSlice()
  const data = useSelector(selectSlice)
  const dispatch = useDispatch()
  const [classList, setclassList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getClassesList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data) {
      const classListArray: any = []

      data.map((item: any) => {
        const classname = item.active_class_name
        const activeclass = (
          <a
            href="/home/activeschool/activesubject/activeclass"
            className={classes.link}
          >
            {classname}
          </a>
        )
        classListArray.push({
          activeClassName: activeclass,
          totalStudents: item.total_students,
          totalIncompleteVideos: item.total_incomplete_videos,
          totalVideosCompleted: item.total_videos_completed,
          averageMastery: item.average_mastery,
        })
        return classListArray
      })

      setclassList(classListArray)
    }
  }, [classes.link, data])

  return (
    <>
      <Helmet>
        <title>Adhhyayan School</title>
        <meta
          name="description"
          content="A Boilerplate application active subject page"
        />
      </Helmet>
      <Header
        title="Adhyayan School"
        desc="Schools > Adhyayan School > Science (Subject hierarchy-IVY)"
      />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard
            symbol={faUserGraduate}
            title="Total Students"
            number={2}
          />
          <SimpleCard
            symbol={faTachometerAlt}
            title="Average Mastery"
            number={0.0}
          />
          <SimpleCard symbol={faEye} title="Completed Videos" number={0} />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="Active Classes in Science (IVY SUBJECTS)"
            headCell={classheadCells}
            rows={classList}
            search={true}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="MOST POPULAR LESSONS"
            headCell={lessonHeadCells}
            rows={null}
            search={false}
          />
          <CardTable
            title="LEAST POPULAR LESSONS"
            headCell={lessonHeadCells}
            rows={null}
            search={false}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="MOST ACTIVE STUDENTS"
            headCell={studentheadCell}
            rows={null}
            search={false}
          />
          <CardTable
            title="LEAST ACTIVE STUDENTS"
            headCell={studentheadCell}
            rows={null}
            search={false}
          />
        </div>
        <div className={classes.cardTable}>
          <div className={classes.chart}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              {...props}
            />
          </div>
        </div>
        <div className={classes.chart}>
          <PlotlyChart
            data={trenddata}
            layout={trendlayout}
            style={plotstyle}
          />
        </div>
        <div className={classes.chart}>
          <PlotlyChart
            data={cumulativedata}
            layout={cumulativelayout}
            style={plotstyle}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="STUDENT WHO HAVE NOT WATCHED A VIDEO FROM 2021-01-01 TO 2021-09-26 (TOTAL: 1)"
            headCell={studentactivityheadcell}
            rows={null}
            search={true}
          />
        </div>
      </div>
    </>
  )
}
