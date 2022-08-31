// import React, { useState } from 'react'
import './ButtonLevelsBlock.css'

interface ButtonLevelsBlockProps {
  active: number
  setActive: (i: number) => void
}

export function ButtonLevelsBlock ({ active, setActive }: ButtonLevelsBlockProps) {
  const levels = ['A1 - beginner',
                  'A2 – elementary',
                  'B1 – intermediate',
                  'B2 – upper intermediate',
                  'C1 - advanced',
                  'C2 – proficiency',
                  'Difficult Words'
                ]

  return (
    <div className="btnLevels-block">
      { levels.map((elem, i) => <button id={String(i + 1)} className={ i === active ? 'btnLevel btnLevel-active' : 'btnLevel'} key={i} onClick={() => setActive(i)}>
        { elem }
      </button>) }
    </div>
  )
}
