// import React, { useState } from 'react'
import { useContext } from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import './ButtonLevelsBlock.css'

interface ButtonLevelsBlockProps {
  active: number
  setActive: (i: number) => void
}

export function ButtonLevelsBlock ({ active, setActive }: ButtonLevelsBlockProps) {
  const { isAuth } = useContext(authContext)
  const levels = isAuth
? [
    ['A1 - beginner', 'beginner-bg-color'],
    ['A2 – elementary', 'elementary-bg-color'],
    ['B1 – intermediate', 'intermediate-bg-color'],
    ['B2 – upper intermediate', 'upper-bg-color'],
    ['C1 - advanced', 'advanced-bg-color'],
    ['C2 – proficiency', 'proficiency-bg-color'],
    ['Difficult Words', 'difficult-bg-color']
    ]
: [
    ['A1 - beginner', 'beginner-bg-color'],
    ['A2 – elementary', 'elementary-bg-color'],
    ['B1 – intermediate', 'intermediate-bg-color'],
    ['B2 – upper intermediate', 'upper-bg-color'],
    ['C1 - advanced', 'advanced-bg-color'],
    ['C2 – proficiency', 'proficiency-bg-color']
    ]

  return (
    <div className="btnLevels-block">
      { levels.map((elem, i) => <button id={String(i + 1)} style={{ backgroundColor: elem[1] }} className={ i === active ? `btnLevel btnLevel-active ${elem[1]}` : `btnLevel ${elem[1]}`} key={i} onClick={() => {
        setActive(i)
        localStorage.setItem('active', i.toString())
      }}>
        { elem[0] }
      </button>) }
    </div>
  )
}
