import React, { useRef } from 'react'
import { useStyles } from './style'

interface Props {
  title: string
  desc: string
}

const Header: React.FC<Props> = (props) => {
  const classes = useStyles()
  const divRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLHeadingElement>(null)
  return (
    <div className={classes.root} ref={divRef}>
      <div className={classes.header}>
        <h1 ref={ref}>{props.title}</h1>
      </div>
      <div className={classes.descHeader}>{props.desc}</div>
    </div>
  )
}
export default Header
