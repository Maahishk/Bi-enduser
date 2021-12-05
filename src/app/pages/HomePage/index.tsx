import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectHomePageload } from './slice/selector'
import { useHomepageSlice } from 'app/pages/HomePage/slice/index'
import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import CardTable from 'app/components/CardTable'
import {
  faSchool,
  faUserGraduate,
  faSignOutAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { Doughnut } from 'react-chartjs-2'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { options } from 'app/components/HighCharts/ColumnChart'
import { useStyles } from './style'

const headCells = [
  { id: 0, label: 'S.N' },
  { id: 1, label: 'Active School Name' },
  { id: 2, label: 'Total Students' },
  { id: 3, label: 'Unique Logins' },
  { id: 4, label: 'Total Ebooks' },
  { id: 5, label: 'Total Incomplete Videos' },
  { id: 6, label: 'Total Videos Completed' },
  { id: 7, label: 'Unique Video Completed' },
  { id: 8, label: 'Teacher Count' },
  { id: 9, label: 'Mastery Status' },
]

export const HomePage = (props: HighchartsReact.Props) => {
  const classes = useStyles()
  const { actions } = useHomepageSlice()
  const data = useSelector(selectHomePageload)
  const dispatch = useDispatch()
  const [schoolList, setSchoolList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getSchoolList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data) {
      const schoolListArray: any = []
      data.map((item: any) => {
        let school = item.active_school_name
        let href = '/home/activeschool'
        const schoolname = (
          <a href={href} className={classes.link}>
            {school}
          </a>
        )
        schoolListArray.push({
          id: item.id,
          activeSchoolName: schoolname,
          totalStudents: item.total_students,
          uniqueLogins: item.unique_logins,
          totalEbooks: item.total_ebooks,
          totalIncompleteVideos: item.total_incomplete_videos,
          totalVideosCompleted: item.total_videos_completed,
          uniqueVideoCompleted: item.unique_video_completed,
          teacherCount: item.teacher_count,
        })
        return schoolListArray
      })

      setSchoolList(schoolListArray)
    }
  }, [classes.link, data])

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header title="School's Dashboard" desc="School's Dashboard" />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard
            symbol={faSchool}
            title="Total Active Schools"
            number={73}
          />
          <SimpleCard
            symbol={faUserGraduate}
            title="Total Students"
            number={1347}
          />
          <SimpleCard
            symbol={faSignOutAlt}
            title="Unique Logins"
            number={759}
          />
          <SimpleCard symbol={faEye} title="Completed Videos" number={3749} />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="ACTIVE SCHOOLS TABLE"
            headCell={headCells}
            rows={schoolList}
            search={true}
          />
        </div>
        <div className={classes.chart}>
          <div className={classes.chartleft}>
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
              height={500}
              width={100}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className={classes.chartright}>
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
              height={500}
              width={100}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
        <div className={classes.chart}>
          <div className={classes.chartleft}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              {...props}
            />
          </div>
          <div className={classes.chartright}></div>
        </div>
      </div>
    </>
  )
}
