import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape(props) {
  return (
    
    <div className = {styles.rodape}>
<p className={styles.titulo}> {props.titulo}</p>
    </div>
  )
}
