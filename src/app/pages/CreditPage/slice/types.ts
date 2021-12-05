/* --- STATE --- */
export interface Credit {
  studentName: string
  creditAdded: number
}

export interface CreditState {
  addeddata: Credit[]
  extendeddata: Credit[]
  loading: boolean
  error: any
}
