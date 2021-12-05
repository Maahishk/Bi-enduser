import { Switch } from 'react-router-dom'

import { PrivateRoute, PublicRoute } from 'app/components/Route'
import * as path from 'app/router/path'
import { LoginPage } from 'app/pages/LoginPage/Loadable'
import { HomePage } from 'app/pages/HomePage'
import { B2CPage } from 'app/pages/B2C'
import { StudentsPage } from 'app/pages/StudentsPage'
import { TeacherPage } from 'app/pages/TeacherPage'
import { PremiumPage } from 'app/pages/PremiumPage'
import { CreditPage } from 'app/pages/CreditPage'
import { AssigmentPage } from 'app/pages/AssignmentPage'
import { ActiveSchools } from 'app/pages/ActiveSchools'
import { ActiveSubjectPage } from 'app/pages/ActiveSubjects'
import { ActiveClassPage } from 'app/pages/ActiveClasses'
import { StudentProfilePage } from 'app/pages/StudentProfile'

const Router = () => {
  return (
    <Switch>
      <PublicRoute exact path={path.LOGIN} component={LoginPage} />
      <PrivateRoute exact path={path.DASHBOARD} component={HomePage} />
      <PrivateRoute exact path={path.B2CPAGE} component={B2CPage} />
      <PrivateRoute exact path={path.STUDENTSPAGE} component={StudentsPage} />
      <PrivateRoute exact path={path.TEACHERPAGE} component={TeacherPage} />
      <PrivateRoute exact path={path.PREMIUMPAGE} component={PremiumPage} />
      <PrivateRoute exact path={path.CREDITPAGE} component={CreditPage} />
      <PrivateRoute exact path={path.ASSIGNMENT} component={AssigmentPage} />
      <PrivateRoute exact path={path.ACTIVESCHOOL} component={ActiveSchools} />
      <PrivateRoute
        exact
        path={path.ACTIVESUBJECT}
        component={ActiveSubjectPage}
      />
      <PrivateRoute exact path={path.ACTIVECLASS} component={ActiveClassPage} />
      <PrivateRoute
        exact
        path={path.STUDENTPROFILE}
        component={StudentProfilePage}
      />
    </Switch>
  )
}

export default Router
