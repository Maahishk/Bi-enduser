import React from 'react'
import logo from 'app/images/mst_logo_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faSchool,
  faUserGraduate,
  faCreditCard,
  faChalkboardTeacher,
  faGlobe,
  faSearch,
  faSignOutAlt,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons'
import { useStyles } from './style'

const handleLogout = () => {
  localStorage.clear()
  window.location.replace('/login')
}

const SideBar: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <img src={logo} alt="mstLogo" className={classes.brandLogo} />
      </div>
      <div className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <a href="/home" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faHome}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Home</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/home" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faSchool}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Schools</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/b2cpage" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faGlobe}
                size="5x"
                className={classes.svgIcon}
              />
              <span>B2C</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/studentspage" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faUserGraduate}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Students</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/teacherpage" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Teachers</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/creditpage" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faCreditCard}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Credit</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/assignmentpage" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faFileCode}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Assignment</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/premiumpage" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faCreditCard}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Premium</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/search" className={classes.navLink}>
              <FontAwesomeIcon
                icon={faSearch}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Search</span>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="/login" className={classes.navLink} onClick={handleLogout}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="4x"
                className={classes.svgIcon}
              />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
