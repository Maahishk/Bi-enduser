import React from 'react'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStyles } from './style'

interface Props {
  symbol: IconProp
  title: string
  number: number
}

const SimpleCard = (props: Props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.svgIcon}>
          {<FontAwesomeIcon icon={props.symbol} size="2x" />}
        </div>
        <Typography
          className={classes.totalStatTitle}
          variant="h5"
          component="h3"
        >
          {props.title}
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          {props.number}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
export default SimpleCard
