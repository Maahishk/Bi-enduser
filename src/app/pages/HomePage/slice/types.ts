/* --- STATE --- */
export interface ActiveSchool {
  id: number
  activeSchoolname: string
  totalStudents: number
  uniqueLogins: number
  totalEbooks: number
  totalIncompleteVideos: number
  totalVideosCompleted: number
  uniqueVideoCompleted: number
  teacherCount: number
}

export interface HomePageState {
  data: ActiveSchool[]
  schoolListLoading: boolean
  error: any
}
