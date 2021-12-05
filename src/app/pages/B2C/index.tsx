import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSlice } from './slice/selectors'
import { useB2CPageSlice } from 'app/pages/B2C/slice/index'
import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import CardTable from 'app/components/CardTable'
import {
  faBookOpen,
  faUserGraduate,
  faSignOutAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { useStyles } from 'styles/common-styles'
import { Doughnut } from 'react-chartjs-2'

const headCells = [
  { id: 1, label: 'Active Subjects Name' },
  { id: 2, label: 'Total Students' },
  { id: 5, label: 'Total Incomplete Videos' },
  { id: 6, label: 'Total Videos Completed' },
  { id: 8, label: 'Average Mastery' },
  { id: 9, label: 'Mastery Status' },
]

const classheadCells = [
  { id: 0, label: 'Active Classes Name' },
  { id: 1, label: 'Subject Name' },
  { id: 2, label: 'Total Students' },
  { id: 3, label: 'Total Incomplete Videos' },
  { id: 4, label: 'Total Videos Completed' },
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

export const B2CPage = () => {
  const classes = useStyles()
  const { actions } = useB2CPageSlice()
  const data = useSelector(selectSlice)
  const dispatch = useDispatch()
  const [subjectList, setSubjectList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getSubjectList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data) {
      const subjectListArray: any = []

      data.map((item: any) => {
        const subject = item.active_subject_name
        const activesubject = (
          <a href="/home/activeschool/activesubject">{subject}</a>
        )
        subjectListArray.push({
          activeSubjectsName: activesubject,
          totalStudents: item.total_students,
          totalIncompleteVideos: item.total_incomplete_videos,
          totalVideosCompleted: item.total_videos_completed,
          averageMastery: item.average_mastery,
        })
        return subjectListArray
      })

      setSubjectList(subjectListArray)
    }
  }, [data])

  return (
    <>
      <Helmet>
        <title>B2C</title>
        <meta name="description" content="A Boilerplate application b2c page" />
      </Helmet>
      <Header title="B2C" desc="Schools > B2C" />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard symbol={faBookOpen} title="Active Subjects" number={73} />
          <SimpleCard
            symbol={faUserGraduate}
            title="Total Students"
            number={26087}
          />
          <SimpleCard
            symbol={faSignOutAlt}
            title="Unique Logins"
            number={4160}
          />
          <SimpleCard symbol={faEye} title="Completed Videos" number={6471} />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="Active Subjects in B2C (IVY SUBJECTS)"
            headCell={headCells}
            rows={subjectList}
            search={true}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="Active Classes in B2C (IVY SUBJECTS)"
            headCell={classheadCells}
            rows={subjectList}
            search={true}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="MOST POPULAR LESSONS"
            headCell={lessonHeadCells}
            rows={subjectList}
            search={true}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="LEAST POPULAR LESSONS"
            headCell={lessonHeadCells}
            rows={subjectList}
            search={true}
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
          <Doughnut
            data={{
              labels: ['Students who didnt login', 'Students who logged in'],
              datasets: [
                {
                  label: 'LOGIN STATUS OF ALL STUDENTS',
                  data: [15, 84],
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
        <div className={classes.chart}>
          <Doughnut
            data={{
              labels: ['Completed', 'Incomplete'],
              datasets: [
                {
                  label: 'MASTERY COMPLETION STATUS OF VIDEOS',
                  data: [25, 74],
                  backgroundColor: ['rgb(255, 99, 132)', 'rgb(218,112,214)'],
                  hoverOffset: 4,
                  borderWidth: 1,
                },
              ],
            }}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="STUDENT WHO HAVE NOT LOGGED IN FROM 2021-01-01 TO 2021-09-26 (TOTAL: 0)"
            headCell={studentactivityheadcell}
            rows={null}
            search={true}
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
