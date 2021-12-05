/* --- STATE --- */
export interface StudentData {
  id: number
  student_name: string
  student_email: string
  total_login: number
  total_incomplete_videos: number
  total_videos_completed: number
  average_mastery: string
}
export interface ActiveClassState {
  studentdata: StudentData[]
  loading: boolean
  error: any
}
