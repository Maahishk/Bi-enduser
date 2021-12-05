import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    display: 'block',
    justifyContent: 'center',
    padding: '24px 16px',
    width: '100%',
    background: '#fff',
    boxShadow: '0 1px 15px 0 hsl(0deg 0% 48% / 5%)',
    borderRadius: '8px',
  },
  h4: {
    fontSize: '1.07142857rem',
  },
  dataTableWrap: {
    display: 'flex',
  },
  dataTable: {
    position: 'relative',
    top: 40,
    marginBottom: 40,
    width: 'auto',
  },
  thead: {
    borderBottom: '2px solid #2cd1b7',
  },
  tname: {
    color: '#a7a7a7',
    textDecoration: 'none',
  },
  dtButtons: {
    position: 'absolute',
    margin: 0,
    padding: 0,
    outline: 'none',
    right: 50,
  },
  button: {
    padding: '4px',
    margin: '0 12px',
    background: 'none',
    color: '#bf8dee',
    fontSize: '1rem',
    cursor: 'pointer',
    border: '1px solid transparent',
  },
  dataTableFilter: {
    marginLeft: 'auto',
    marginRight: '24px',
    marginBottom: '24px',
    boxSizing: 'border-box',
    color: '#a7a7a7',
    display: 'flex',
    position: 'absolute',
    right: 200,
  },
  label: {
    position: 'relative',
    bottom: 10,
    marginRight: '30px',
  },
  filter: {
    width: '250px',
    height: '40px',
    borderRadius: '5px',
    boxShadow: 'none',
    border: '1px solid #a7a7a7',
  },
  progressBar: {
    position: 'relative',
  },
  progressBarWrap: {
    position: 'static',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
  },
  legend: {
    display: 'flex',
    marginTop: '24px',
    justifyContent: 'flex-end',
    color: '#000',
    fontSize: '12px',
    marginLeft: 'auto',
  },
  legendList: {
    outline: 'none',
    display: 'block',
  },
  legendItem: {
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  legendCircle: {
    display: 'block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '12px',
  },
  bgPrimaryGreen: {
    backgroundColor: '#2cd1b7',
  },
  bgPrimaryYellow: {
    backgroundColor: '#fdc829',
  },
  bgPrimaryRed: {
    backgroundColor: '#f2576c',
  },
})
