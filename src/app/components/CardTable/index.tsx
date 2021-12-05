import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {
  faFilter,
  faCopy,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { MasteryStatus } from '../MasteryStatus/index'
import { useStyles } from './style'

interface HeadCell {
  id: number
  label: string
}

interface Props {
  title: string
  headCell: HeadCell[] | null
  rows: [] | null
  search: boolean
}

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.white,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#696969',
//   },
//   body: {
//     fontSize: 16,
//     fontWeight: 'regular',
//     textAlign: 'left',
//   },
// }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const CardTable = (props: Props) => {
  const classes = useStyles()
  let searchSection
  if (props.search) {
    searchSection = (
      <>
        <div className={classes.dataTableFilter}>
          <h3 className={classes.label}>Search:</h3>
          <input type="text" className={classes.filter} />
        </div>
        <div className={classes.dtButtons}>
          <button
            type="button"
            title="Select Columns"
            aria-haspopup="true"
            aria-expanded="false"
            className={classes.button}
          >
            <span>
              <FontAwesomeIcon icon={faFilter} size="lg" />
            </span>
          </button>
          <button
            type="button"
            title="Select Columns"
            aria-haspopup="true"
            aria-expanded="false"
            className={classes.button}
          >
            <span>
              <FontAwesomeIcon icon={faFileExcel} size="lg" />
            </span>
          </button>
          <button
            type="button"
            title="Select Columns"
            aria-haspopup="true"
            aria-expanded="false"
            className={classes.button}
          >
            <span>
              <FontAwesomeIcon icon={faCopy} size="lg" />
            </span>
          </button>
        </div>
      </>
    )
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.dataTableWrap}>
          <Typography
            className={classes.h4}
            color="textSecondary"
            variant="h5"
            component="h3"
          >
            {props.title}
          </Typography>
          {searchSection}
        </div>
        <div className={classes.dataTable}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead className={classes.thead}>
                <TableRow>
                  {props.headCell?.map((cell) => (
                    <TableCell key={cell.id}>{cell.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows?.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    {Object.keys(row).map((key) => (
                      <>
                        <TableCell
                          component="th"
                          scope="row"
                          className={classes.tname}
                          key={key}
                        >
                          {row[`${key}`]}
                        </TableCell>
                      </>
                    ))}
                    <TableCell>
                      <div className={classes.progressBar}>
                        <div className={classes.progressBarWrap}>
                          <MasteryStatus />
                        </div>
                      </div>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      <div className={classes.legend}>
        <div className={classes.legendList}>
          <div className={classes.legendItem}>
            <span
              className={`${classes.legendCircle} ${classes.bgPrimaryGreen}`}
            ></span>
            <span>Complete Mastery</span>
          </div>
          <div className={classes.legendItem}>
            <span
              className={`${classes.legendCircle} ${classes.bgPrimaryYellow}`}
            ></span>
            <span>Adequate Mastery</span>
          </div>
          <div className={classes.legendItem}>
            <span
              className={`${classes.legendCircle} ${classes.bgPrimaryRed}`}
            ></span>
            <span>Inadequate Mastery</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardTable
