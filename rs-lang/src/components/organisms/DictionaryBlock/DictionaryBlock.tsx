import { useState } from 'react'
import './DictionaryBlock.css'

export function DictionaryBlock () {
    const [isInProgress, setInProgress] = useState(true)
    return (
        <div>
            <div className="buttons">
                <div className={`btnLevel bg-color ${isInProgress ? 'btnLevel-active bg-color' : ''}`} onClick={() => setInProgress(true)}>Words In Progress</div>
                <div className={`btnLevel bg-color ${isInProgress ? '' : 'btnLevel-active bg-color'}`} style={{ textAlign: 'center' }} onClick={() => setInProgress(false)}>Deleted Words</div>
            </div>
        </div>
    )
}
