import React from 'react'
import Icon from '../Icon/Icon'
import './Button.css'

interface ButtonProps {
  text: string
  type: 'primary' | 'secondary' | 'bordered' | 'rounded'
  small?: boolean
  disabled?: boolean
  iconType?: string
  iconHeight?: string
  iconWidth?: string
  iconColor?: string
  onClick: (e: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  text = 'button',
  type = 'primary',
  small = true,
  disabled = false,
  iconType = '',
  iconHeight = '22px',
  iconWidth = '13px',
  iconColor = '#FFFFFF',
  onClick = () => {}
}) => {
  const sizeClass = small ? 'button_small' : 'button_big'
  const iconClass = iconType.length > 0 ? 'button_icon' : ''

  switch (type) {
    case 'primary':
      return (
        <button
          disabled={disabled}
          className={`button button_primary ${sizeClass} ${iconClass}`}
          onClick={onClick}
        >
          {(iconType.length > 0) &&
            <Icon
              type={iconType}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          }
          {text}
        </button>
      )
    case 'secondary':
      return (
        <button
          disabled={disabled}
          className={`button button_secondary ${sizeClass} ${iconClass}`}
          onClick={onClick}
        >
          {(iconType.length > 0) &&
            <Icon
              type={iconType}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          }
          {text}
        </button>
      )
    case 'bordered':
      return (
        <button
          disabled={disabled}
          className={`button button_bordered ${sizeClass} ${iconClass}`}
          onClick={onClick}
        >
          {(iconType.length > 0) &&
            <Icon
              type={iconType}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          }
          {text}
        </button>
      )
    case 'rounded':
      return (
        <button
          disabled={disabled}
          className={`button button_rounded ${sizeClass} ${iconClass}`}
          onClick={onClick}
        >
          {(iconType.length > 0) &&
            <Icon
              type={iconType}
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          }
          {text}
        </button>
      )
  }
}

export default Button
