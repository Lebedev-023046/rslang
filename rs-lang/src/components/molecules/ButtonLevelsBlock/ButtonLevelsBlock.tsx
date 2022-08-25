import React from 'react'
import { ButtonTextPage } from '../../atoms/ButtonTextPage/ButtonTextPage'

export function ButtonLevelsBlock () {
  return (
    <div className="btnLevels-block">
        <ButtonTextPage type='btnLevel' text='A1 - beginner' active/>
        <ButtonTextPage type='btnLevel' text='A2 – elementary' active/>
        <ButtonTextPage type='btnLevel' text='B1 – intermediate' active/>
        <ButtonTextPage type='btnLevel' text='B2 – upper intermediate' active/>
        <ButtonTextPage type='btnLevel' text='C1 - advanced' active/>
        <ButtonTextPage type='btnLevel' text='C2 – proficiency' active/>
        <ButtonTextPage type='btnLevel' text='Difficult Words' active/>
    </div>

  )
}
