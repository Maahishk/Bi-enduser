export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}
export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
    return true
  } catch (error) {
    return false
  }
}
