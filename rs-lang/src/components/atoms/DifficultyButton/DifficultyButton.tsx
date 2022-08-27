import React from 'react'
import './DifficultyButton.css'

interface DifficultyButtonProps {
  text: string
  active: boolean
  onClick: (e: React.MouseEvent) => void
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({
  text,
  active,
  onClick
}) => {
  return (
    <button
      className={`button difficulty-button ${active ? 'difficulty-button_active' : ''}`}
      id={text}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default DifficultyButton
