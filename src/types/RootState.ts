import { AppState } from 'app/slice/types'
import { HomePageState } from 'app/pages/HomePage/slice/types'
import { B2CState } from 'app/pages/B2C/slice/types'
import { StudentState } from 'app/pages/StudentsPage/slice/types'
import { TeacherState } from 'app/pages/TeacherPage/slice/types'
import { PremiumState } from 'app/pages/PremiumPage/slice/types'
import { CreditState } from 'app/pages/CreditPage/slice/types'
import { ActiveSchoolState } from 'app/pages/ActiveSchools/slice/types'
import { ActiveSubjectState } from 'app/pages/ActiveSubjects/slice/types'
import { ActiveClassState } from 'app/pages/ActiveClasses/slice/types'
import { StudentProfileState } from 'app/pages/StudentProfile/slice/types'
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  app?: AppState
  homepage?: HomePageState
  b2cpage?: B2CState
  studentpage?: StudentState
  teacherpage?: TeacherState
  premiumpage?: PremiumState
  creditpage?: CreditState
  activeschoolpage?: ActiveSchoolState
  activesubjectpage?: ActiveSubjectState
  activeclasspage?: ActiveClassState
  studentprofilepage?: StudentProfileState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
