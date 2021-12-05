export interface ProgressProps {
  now?: number
  min?: number
  max?: number
  color?: string

  className?: string

  size?: 'big' | 'small'

  label?: any

  colors?: string[]
}

const ROUND_PRECISION = 1000

export function getPercentage(now: number, min: number, max: number) {
  const percentage = ((now - min) / (max - min)) * 100
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION
}

export const COLORS = [
  '#ec2362',
  '#009487',
  '#9c28aa',
  '#ffc033',
  '#4250b0',
  '#79564b',
  '#5f7c89',
  '#cbdc4d',
  '#00bccd',
]

export function getColor(index: number, colors: string[]) {
  return colors[index % colors.length]
}
