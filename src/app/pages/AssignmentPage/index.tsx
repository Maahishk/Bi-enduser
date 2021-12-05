import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import CardTable from 'app/components/CardTable'
import {
  faSchool,
  faUserGraduate,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useStyles } from 'styles/common-styles'

const headCells = [
  { id: 1, label: 'Assignment Title' },
  { id: 2, label: 'Class Name' },
  { id: 3, label: 'Subject Name' },
  { id: 4, label: 'School Name' },
  { id: 5, label: 'Created At' },
  { id: 6, label: 'Deadline' },
  { id: 7, label: 'Submitted' },
  { id: 8, label: 'Graded' },
  { id: 9, label: 'Pending' },
]

export const AssigmentPage = () => {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Assignment Page</title>
        <meta
          name="description"
          content="A Boilerplate application assignment page"
        />
      </Helmet>
      <Header title="Assignment's Dashboard" desc="Assignment's Dashboard" />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard symbol={faSchool} title="Ongoings" number={0} />
          <SimpleCard
            symbol={faUserGraduate}
            title="Total Assignments"
            number={348}
          />
          <SimpleCard symbol={faSignOutAlt} title="Submissions" number={108} />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="ONGOING ASSIGNMENT TABLE"
            headCell={headCells}
            rows={null}
            search={true}
          />
        </div>
      </div>
    </>
  )
}
