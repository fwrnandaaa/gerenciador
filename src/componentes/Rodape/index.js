import React from 'react'
import styles from './Rodape.module.css';



export default function Rodape(props) {
  console.log(props.logo)
  return (
    
    <div className = {styles.rodape}>
      {/* <p className={styles.DataCorrente}>{mostraData()}</p> */}
<p className={styles.titulo}> {props.titulo}</p>
<img className = {`${styles.titulo}, ${styles.img}`}src={props.logo}></img> 
   
<div className={styles.divIcones}>
<div className= {styles.icones}>
<img className={styles.svg} src='facebook.svg'/>
<img className={styles.svg} src='twitter.svg'/>
<img className={styles.svg} src='instagram.svg'/>
</div>
</div>
</div>

  )

   function mostraData() {
      const Date =new Date();
      return Date.toLocalDateString;
  } 
}


