import { useStyles } from './style'
export const MasteryStatus: any = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.progressBarSuccess}>&nbsp;</div>
      <div className={classes.progressBarWarning}>&nbsp;</div>
      <div className={classes.progressBarDanger}>&nbsp;</div>
    </>
  )
}
