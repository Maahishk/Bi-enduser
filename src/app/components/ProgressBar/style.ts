import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  progressBar: {
    height: 'var(--ProgressBar-height)',
    overflow: 'hidden',
    backgroundColor: 'var(--ProgressBar-background)',
    borderRadius: 'var(--ProgressBar-radius)',
    boxShadow: 'var(--ProgressBar-shadow)',
  },
})
