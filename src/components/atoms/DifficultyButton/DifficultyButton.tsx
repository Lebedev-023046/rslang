import React from 'react'
import './DifficultyButton.css'

interface DifficultyButtonProps {
  text: string
  id: number
  active: boolean
  onClick: (id: number) => void
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({
  text,
  id,
  active,
  onClick
}) => {
  return (
    <button
      className={`button difficulty-button ${active ? 'difficulty-button_active' : ''}`}
      onClick={() => onClick(id)}
    >
      {text}
    </button>
  )
}

export default DifficultyButton
