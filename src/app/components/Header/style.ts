import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    background: '#fff',
    backgroundImage: 'initial',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '24px 0 24px 143px',
    paddingTop: '24px',
    paddingRight: '0px',
    paddingBottom: '24px',
    paddingLeft: '143px',
    display: 'flex',
    justifyContent: 'spacebetween',
    boxShadow: '0 3px 13px rgb(34 36 38 / 15%)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 98,
    color: '#a7a7a7',
  },
  header: {
    position: 'relative',
  },
  descHeader: {
    position: 'absolute',
    top: '70%',
  },
})
