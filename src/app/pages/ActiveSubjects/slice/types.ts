/* --- STATE --- */
export interface ActiveClasses {
  id: number
  active_class_name: string
  total_students: number
  total_incomplete_videos: number
  total_videos_completed: number
  average_mastery: string
}
export interface ActiveSubjectState {
  classesdata: ActiveClasses[]
  classLoading: boolean
  error: any
}
