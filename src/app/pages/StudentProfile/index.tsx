import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import CardTable from 'app/components/CardTable'
import { useStyles } from 'styles/common-styles'
import { useStudentProfileSlice } from './slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectSlice } from './slice/selectors'
import React, { useEffect } from 'react'
import student from 'app/images/student.png'
import { Link } from 'react-router-dom'
import PlotlyChart from 'react-plotlyjs-ts'
import {
  cumulativedata,
  cumulativelayout,
  plotstyle,
  trenddata,
  trendlayout,
} from 'app/components/HighCharts/PlotlyGraphs'

const enrollClassHeadCell = [
  { id: 0, label: 'Enrolled Class' },
  { id: 1, label: 'School Name' },
  { id: 2, label: 'Subject' },
  { id: 3, label: 'Class type' },
  { id: 4, label: 'Class Start Date' },
  { id: 5, label: 'Class End Date' },
  { id: 6, label: 'Total Incomplete Videos' },
  { id: 7, label: 'Total Complete Videos' },
  { id: 8, label: 'Average Mastery' },
  { id: 9, label: 'Mastery Status' },
]

const enrollEbook = [
  { id: 0, label: 'Enrolled Class' },
  { id: 1, label: 'School Name' },
  { id: 2, label: 'Subject' },
  { id: 3, label: 'Class type' },
  { id: 4, label: 'Class Start Date' },
  { id: 5, label: 'Class End Date' },
]

const creditHistory = [
  { id: 0, label: 'Transaction Date' },
  { id: 1, label: 'Previous balance' },
  { id: 2, label: 'Debit/Credit' },
  { id: 3, label: 'Current balance' },
  { id: 4, label: 'Details' },
]

export const StudentProfilePage = () => {
  const classes = useStyles()
  const { actions } = useStudentProfileSlice()
  const data = useSelector(selectSlice)
  const dispatch = useDispatch()
  const [enrollclassList, setenrollclassList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getEnrolledClassList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data) {
      const classListArray: any = []

      data.map((item: any) => {
        const classname = item.enrolled_class
        const schoolname = item.school_name
        const activeclass = (
          <a
            href="/home/activeschool/activesubject/activeclass"
            className={classes.link}
          >
            {classname}
          </a>
        )
        const activeschool = (
          <a href="/home/activeschool" className={classes.link}>
            {schoolname}
          </a>
        )
        classListArray.push({
          enrollClass: activeclass,
          school: activeschool,
          subject: item.subject,
          classType: item.class_type,
          classStart: item.class_start,
          classEnd: item.class_end,
          totalIncompleteVideos: item.total_incomplete_video,
          totalVideosCompleted: item.total_video_completed,
          averageMastery: item.average_mastery,
        })
        return classListArray
      })

      setenrollclassList(classListArray)
    }
  }, [classes.link, data])

  return (
    <>
      <Helmet>
        <title>Student's Dashboard</title>
        <meta
          name="description"
          content="A Boilerplate application student profile page"
        />
      </Helmet>
      <Header title="Student's Dashboard" desc="Student's Dashboard>" />
      <div className={classes.root}>
        <div className={classes.studentsection}>
          <div className={classes.studentstat}>
            <div className={classes.card}>
              <div className={classes.cardStudent}>
                <div>
                  <img src={student} alt="img" className={classes.cardImg} />
                </div>
                <div className={classes.cardBody}>
                  <span className={classes.cardTitle}>Student name</span>
                  <span className={classes.cardDetail}>email</span>
                  <span className={classes.cardDetail}>Student school</span>
                  <b className={classes.cardCredit}>0.0 Credits</b>
                </div>
                <Link className={classes.cardLink} to="">
                  View more
                </Link>
              </div>
            </div>
            <div className={classes.studentstatBox}>
              <div className={classes.card}>
                <span className={classes.cardTitle}>Active Subjects</span>
                <span className={classes.numbers}>5</span>
                <p className={classes.paragraph}>Active classes: 5</p>
              </div>
              <div className={classes.card}>
                <span className={classes.cardTitle}>Total logins</span>
                <span className={classes.numbers}>5</span>
              </div>
              <div className={classes.card}>
                <span className={classes.cardTitle}>Average Mastery</span>
                <span className={classes.numbers}>0.00%</span>
              </div>
              <div className={classes.card}>
                <span className={classes.cardTitle}>Completed Videos</span>
                <span className={classes.numbers}>0</span>
                <p className={classes.paragraph}>Incomplete videos: 0</p>
              </div>
            </div>
            <div className={classes.activity}>
              <div className={classes.activityTitleWrap}>
                <h4 className={classes.activitytitle}>Activity log</h4>
                <h4 className={classes.paragraph}>No Activity Log Found</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="ENROLLED IVY CLASSES TABLE"
            headCell={enrollClassHeadCell}
            rows={enrollclassList}
            search={true}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="ENROLLED EBOOK CLASSES TABLE"
            headCell={enrollEbook}
            rows={null}
            search={true}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="CREDIT HISTORY TABLE"
            headCell={creditHistory}
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
      </div>
    </>
  )
}
