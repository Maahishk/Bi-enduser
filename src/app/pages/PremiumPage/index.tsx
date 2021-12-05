import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectpremiumload } from './slice/selector'
import { usePremiumSlice } from 'app/pages/PremiumPage/slice/index'
import { Helmet } from 'react-helmet-async'
import Header from 'app/components/Header'
import SimpleCard from 'app/components/CustomizedCard'
import CardTable from 'app/components/CardTable'
import {
  faUserGraduate,
  faSignOutAlt,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import { useStyles } from 'styles/common-styles'

const headCells = [
  { id: 1, label: 'Student Name' },
  { id: 2, label: 'Amount' },
  { id: 3, label: 'Transaction Date' },
  { id: 4, label: 'Details' },
]

export const PremiumPage = () => {
  const classes = useStyles()
  const { actions } = usePremiumSlice()
  const data = useSelector(selectpremiumload)
  const dispatch = useDispatch()
  const [premiumList, setpremiumList] = React.useState<[]>([])

  useEffect(() => {
    dispatch(actions.getPremiumList())
  }, [actions, dispatch])

  useEffect(() => {
    if (data) {
      const premiumListArray: any = []
      data.map((item: any) => {
        const student = item.student_name
        const studentname = <a href="">{student}</a>
        premiumListArray.push({
          studentName: studentname,
          amount: item.amount,
          transactionDate: item.transaction_date,
          details: item.details,
        })
        return premiumListArray
      })

      setpremiumList(premiumListArray)
    }
  }, [data])

  return (
    <>
      <Helmet>
        <title>Premium Page</title>
        <meta
          name="description"
          content="A Boilerplate application premium page"
        />
      </Helmet>
      <Header
        title="Purchase History Dashboard"
        desc="Purchase History Dashboard"
      />
      <div className={classes.root}>
        <div className={classes.totalStat}>
          <SimpleCard
            symbol={faUserGraduate}
            title="Number of Transaction"
            number={73}
          />
          <SimpleCard
            symbol={faSignOutAlt}
            title="Khalti Transaction"
            number={1347}
          />
          <SimpleCard symbol={faEye} title="eSewa Transaction" number={759} />
          <SimpleCard
            symbol={faEyeSlash}
            title="Completed Videos"
            number={3749}
          />
        </div>
        <div className={classes.cardTable}>
          <CardTable
            title="Khalti Transaction"
            headCell={headCells}
            rows={premiumList}
            search={false}
          />
        </div>
      </div>
    </>
  )
}
