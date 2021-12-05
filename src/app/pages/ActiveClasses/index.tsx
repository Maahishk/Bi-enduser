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
import { useActiveClassPageSlice } from './slice'
import PlotlyChart from 'react-plotlyjs-ts'
import {
  cumulativedata,
  cumulativelayout,
  plotstyle,
  trenddata,
  trendlayout,
} from 'app/components/HighCharts/PlotlyGraphs'

const enrollStudentCell = [
  { id: 0, label: 'Student Name' },
  { id: 1, label: 'Student Email' },
  { id: 2, label: 'Total Logins' },
  { id: 3, label: 'Total InCompleted Videos' },
  { id: 4, label: 'Total Completed Videos' },
  { id: 5, label: 'Average Mastery' },
  { id: 6, label: 'Mastery Status' },
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

export const ActiveClassPage = () => {
  const classes = useStyles()
  const { actions } = useActiveClassPageSlice()
  const data = useSelector(selectSlice)
  const dispatch = useDispatch()
  const [studentList, setstudentList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getStudentList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data) {
      const studentListArray: any = []

      data.map((item: any) => {
        const studentname = item.student_name
        const student = (
          <a
            href="/home/activeschool/activeclass/studentprofile"
            className={classes.link}
          >
            {studentname}
          </a>
        )
        studentListArray.push({
          studentName: student,
          studentEmail: item.student_email,
          totalLogin: item.total_login,
          totalIncompleteVideos: item.total_incomplete_videos,
          totalVideosCompleted: item.total_videos_completed,
          averageMastery: item.average_mastery,
        })
        return studentListArray
      })

      setstudentList(studentListArray)
    }
  }, [classes.link, data])

  return (
    <>
      <Helmet>
        <title>Adhhyayan School</title>
        <meta
          name="description"
          content="A Boilerplate application active class page"
        />
      </Helmet>
      <Header
        title="Adhyayan School"
        desc="Schools > Adhyayan School > Grade_10_Science (Class hierarchy-IVY)"
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
            headCell={enrollStudentCell}
            rows={studentList}
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
