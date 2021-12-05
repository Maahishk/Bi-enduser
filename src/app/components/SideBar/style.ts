import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    display: 'block',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 99,
    width: '120px',
    height: '100vh',
    padding: '0 12px',
    boxShadow: '0 0 20px rgb(34 36 38 / 15%)',
    background: '#fff',
    backgroundImage: 'initial',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  brandLogo: {
    display: 'block',
    margin: '32px 0',
    width: '100%',
    borderStyle: 'none',
  },
  nav: {
    display: 'block',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '12px',
  },
  navLink: {
    textAlign: 'center',
    display: 'block',
    '&active': {
      color: '#2cd1b7',
    },
    color: '#a7a7a7',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    padding: '2px',
  },
  svgIcon: {
    height: '25px',
    width: '25px',
    fill: 'currentColor',
    overflow: 'hidden',
    marginBottom: '5px',
  },
})
