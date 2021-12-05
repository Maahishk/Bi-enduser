/**
 *
 * LoginPage
 *
 */
import * as React from 'react'
import { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { useStyles } from './style'
import logo from 'app/images/mst_logo_2.png'
import { useAppSlice } from '../../slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken } from '../../slice/selectors'

interface Props {}

const LoginPage = (props: Props) => {
  const classes = useStyles()
  const { actions } = useAppSlice()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const authToken = useSelector(selectAuthToken)
  const dispatch = useDispatch()

  let history = useHistory()

  const authenticateUser = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (username === 'apnepaluser' && password === 'Nepal123') {
      dispatch(actions.loginSubmit({ email: username, password }))
    }
    handleClick()
  }
  const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(ev.target.value)
  }

  const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value)
  }

  const handleClick = () => {
    if (authToken) {
      history.push('/home')
    }
  }

  return (
    <div className={classes.login}>
      <div className={classes.loginIntro}>
        <div className={classes.logoWrap}>
          <img src={logo} alt="mstlogo" className={classes.loginLogo} />
          <div className={classes.itemCenter}>
            <span className={classes.descTitle}>Welcome to MST Intel !</span>
            <p className={classes.loginDesc}>
              MST Intel is a specialized business intelligence dashboard to get
              meticulously curated insights to understand your product better.
              Log in to get started!
            </p>
          </div>
        </div>
      </div>
      <div className={classes.loginFormWrap}>
        <form onSubmit={authenticateUser} className={classes.loginForm}>
          <div className={classes.formFull}>
            <div className={classes.formGroup}>
              <span className={classes.loginTitle}>
                Sign in to your account
              </span>
            </div>
            <div className={classes.formGroup}>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className={classes.formControl}
                value={username}
                onChange={handleEmailChange}
              />
            </div>
            <div className={classes.formGroup}>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className={classes.formControl}
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className={classes.formGroup}>
              <input
                type="submit"
                value="Sign In"
                className={classes.btnSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter(LoginPage)
