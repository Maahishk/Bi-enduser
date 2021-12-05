/* --- STATE --- */
export interface EnrolledClasses {
  id: number
  enrolledClass: string
  schoolname: string
  subject: string
  classType: number
  classStart: string
  classEnd: string
  totalincompleteVideo: number
  totalcompleteVideo: number
  averageMastery: string
}
export interface StudentProfileState {
  classdata: EnrolledClasses[]
  loading: boolean
  error: any
}
