import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  login: {
    height: '100vh',
    display: 'flex',
    fontFamily: 'proxima_novaregular',
  },
  loginIntro: {
    background: '#6e4bec linear-gradient(90deg,#985dec,#6e4bec)',
    backgroundImage:
      'linear-gradient(90deg, rgb(152, 93, 236), rgb(110, 75, 236))',
    backgroundPositionX: 'initial',
    backgroundPositionY: 'initial',
    backgroundSize: 'initial',
    backgroundRepeatX: 'initial',
    backgroundRepeatY: 'initial',
    backgroundAttachment: 'initial',
    backgroundOrigin: 'initial',
    backgroundClip: 'initial',
    backgroundColor: 'rgb(110, 75, 236)',
    padding: '0 48px 0 72px',
    paddingTop: '0px',
    paddingRight: '48px',
    paddingBottom: '0px',
    paddingLeft: '72px',
    position: 'relative',
    color: '#fff',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  logoWrap: {
    position: 'relative',
    width: '100%',
  },
  loginLogo: {
    width: '97px',
    marginTop: '32px',
  },
  itemCenter: {
    position: 'absolute',
    marginTop: 'auto',
  },
  descTitle: {
    fontSize: '24px',
    margin: '24px 0',
  },
  loginDesc: {
    fontSize: '16px',
  },
  loginFormWrap: {
    width: '50%',
    padding: '32px 120px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  loginForm: {
    marginTop: '24px',
  },
  formFull: {
    width: '100%',
  },
  formGroup: {
    marginBottom: '24px',
    maxWidth: '80%',
  },
  loginTitle: {
    fontSize: '24px',
  },
  formControl: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    border: '1px solid #ebebeb',
    '&focus': {
      webkitBoxShadow: '0 0 0 50px #fff inset',
      webkitTextFillColor: '#333',
    },
  },
  btnSubmit: {
    appearance: 'auto',
    background: '#6e4bec linear-gradient(90deg,#985dec,#6e4bec)',
    backgroundColor: 'rgb(110, 75, 236)',
    border: '1px solid transparent',
    padding: '12px',
    color: 'white',
    fontSize: '16px',
    borderRadius: '50px',
    width: '26%',
    cursor: 'pointer',
    transition: 'all .3s',
  },
})
