import React from 'react'
import './ButtonTextPage.css'

interface IButtonLevelProps {
  text: string
  active: boolean
  type: 'btnLevel' | 'btnWordCard'
}

export function ButtonTextPage ({ text, active, type }: IButtonLevelProps) {
  const activeClass = active ? 'btnLevel-active' : ''

  switch (type) {
    case 'btnLevel':
      return (
        <p className={`btnLevel ${activeClass}`}>{text}</p>
      )
    case 'btnWordCard':
      return (
        <h3 className={`btnWordCard ${activeClass}`}>{text}</h3>
      )
  }
}
