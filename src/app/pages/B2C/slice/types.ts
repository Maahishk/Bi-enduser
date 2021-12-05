/* --- STATE --- */
export interface B2CData {
  id: number
  active_subject_name: string
  total_students: number
  total_incomplete_videos: number
  total_videos_completed: number
  average_mastery: string
}

export interface B2CState {
  b2cdata: B2CData[]
  subjectsListLoading: boolean
  error: any
}
