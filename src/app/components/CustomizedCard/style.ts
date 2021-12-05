import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    overflow: 'unset',
    padding: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '144px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 15px 0 hsl(0deg 0% 48% / 5%)',
  },
  pos: {
    margin: 0,
    color: '#bf8dee',
  },
  totalStatTitle: {
    marginBottom: '12px',
    lineHeight: 1.5,
    color: '#2cd1b7',
  },
  svgIcon: {
    color: '#a7a7a7',
  },
})
