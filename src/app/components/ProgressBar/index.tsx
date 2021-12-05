import * as React from 'react'
import classNames from 'classnames'

import { ProgressProps, getPercentage, getColor, COLORS } from './progress'

export interface ProgressBarProps extends ProgressProps {
  animated?: boolean

  children?: React.ReactElement<ProgressBarProps>[]

  style?: React.StyleHTMLAttributes<HTMLElement>
}

class ProgressBar extends React.Component<ProgressBarProps> {
  static defaultProps = {
    min: 0,
    max: 100,
    animated: false,
    style: {},
    colors: COLORS,
  }

  renderProgressBar(mergedProps: ProgressBarProps) {
    const { min, now, max, color, label, animated, className, ...props } =
      mergedProps
    const style = { ...props.style }
    // if (color) {
    //   style.backgroundColor = color
    // }

    return (
      <div
        {...props}
        role="progressbar"
        style={{ width: `${getPercentage(25, 0, 100)}%`, ...style }}
        aria-valuenow={now}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {label}
      </div>
    )
  }

  render() {
    const {
      min,
      now,
      max,
      color,
      colors,
      label,
      size,
      animated,
      className,
      children,
      ...wrapperProps
    } = this.props

    return (
      <div
        {...wrapperProps}
        className={classNames(className, 'ProgressBar', {
          [`ProgressBar--${size}`]: size,
        })}
      >
        {children
          ? React.Children.map(
              children,
              (child: React.ReactElement<ProgressBarProps>, index) => {
                const mergedProps = {
                  color: getColor(index, ['#ec2362']),
                  ...this.props,
                  ...child.props,
                  min: this.props.min,
                  max: this.props.max,
                }

                return this.renderProgressBar(mergedProps)
              },
            )
          : this.renderProgressBar(this.props)}
      </div>
    )
  }
}

export default ProgressBar
