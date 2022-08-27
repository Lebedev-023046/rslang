import React, { useState } from 'react'
import './ButtonLevelsBlock.css'

export function ButtonLevelsBlock () {
  const levels = ['A1 - beginner',
                  'A2 – elementary',
                  'B1 – intermediate',
                  'B2 – upper intermediate',
                  'C1 - advanced',
                  'C2 – proficiency',
                  'Difficult Words'
                ]

  const [active, setActive] = useState(0)

  // const handleClick = (e: React.ChangeEvent<HTMLElement>) => {
  //   setActive(e.target.id)
  // }

  return (
    <div className="btnLevels-block">
      { levels.map((elem, i) => <button className={ i === active ? 'btnLevel btnLevel-active' : 'btnLevel'} key={i} onClick={() => setActive(i)}>
        { elem }
      </button>) }
    </div>
  )
}
