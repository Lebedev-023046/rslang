import './Button.css'
import React from 'react'

interface ButtonProps {
  text: string
  type: 'primary' | 'secondary' | 'bordered' | 'rounded'
  small?: boolean
  disabled?: boolean
  // TODO add additional icon
  iconSrc?: string
  onClick: () => void
}

const Button = ({
  text = 'button',
  type = 'primary',
  small = true,
  disabled = false,
  iconSrc = '',
  onClick = () => {}
}: ButtonProps) => {
  const sizeClass = small ? 'button_small' : 'button_big'

  switch (type) {
    case 'primary':
      return (
        <button
          disabled={disabled}
          className={`button button_primary ${sizeClass}`}
          onClick={onClick}
        >
          {text}
        </button>
      )
    case 'secondary':
      return (
        <button
          disabled={disabled}
          className={`button button_secondary ${sizeClass}`}
          onClick={onClick}
        >
          {text}
        </button>
      )
    case 'bordered':
      return (
        <button
          disabled={disabled}
          className={`button button_bordered ${sizeClass}`}
          onClick={onClick}
        >
          {text}
        </button>
      )
    case 'rounded':
      return (
        <button
          disabled={disabled}
          className={`button button_rounded ${sizeClass}`}
          onClick={onClick}
        >
          {text}
        </button>
      )
  }
}

export default Button
