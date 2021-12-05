import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    marginTop: '140px',
    marginLeft: '120px',
    padding: '28px',
    backgroundColor: 'hsl(0, 0%, 98%)',
  },
  totalStat: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: 'repeat(4,1fr)',
    padding: 0,
  },
  cardTable: {
    paddingTop: '32px',
    paddingBottom: '24px',
  },
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
  link: {
    fontStyle: 'none',
    fontWeight: 'normal',
    textDecoration: 'none',
    color: 'rgb(40, 109, 205)',
  },
})
