import { makeStyles } from '@material-ui/core/styles'

export const studentStyles = makeStyles({
  chart: {
    display: 'flex',
    width: '100%',
    marginTop: '2%',
  },
  chartleft: {
    padding: '24px 16px',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 1px 15px 0 hsl(0deg 0% 48% / 5%)',
    width: '48%',
  },
  chartright: {
    padding: '24px 16px',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 1px 15px 0 hsl(0deg 0% 48% / 5%)',
    width: '48%',
    marginLeft: '4%',
  },
})
