import React, { useState } from 'react'
import styles from './Personalities.module.css'
import PersonalitiesPeople from '../PersonalitiesPeople/PersonalitiesPeople'
import FullPerson from '../FullPerson/FullPerson'

export default function Personalities() {
  const [ index, setIndex ] = useState(0)
  const [ personId, setPersonId ] = useState(null)
  const components = [ 
                       <PersonalitiesPeople setIndex={setIndex} setPersonId={setPersonId}/>, 
                       <FullPerson setIndex={setIndex} personId={personId}/> 
                     ];
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        People
      </div>
      {components[index]}
    </div>
  )
}
