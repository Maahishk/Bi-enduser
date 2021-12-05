/* --- STATE --- */
export interface ActiveSubjectData {
  id: number
  active_subject_name: string
  total_students: number
  total_incomplete_videos: number
  total_videos_completed: number
  average_mastery: string
}

export interface ActiveClasses {
  id: number
  active_class_name: string
  subject_name: string
  total_students: number
  total_incomplete_videos: number
  total_videos_completed: number
  average_mastery: string
}
export interface ActiveSchoolState {
  subjectdata: ActiveSubjectData[]
  classesdata: ActiveClasses[]
  subjectsListLoading: boolean
  classLoading: boolean
  error: any
}
