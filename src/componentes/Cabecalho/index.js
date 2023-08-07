import React from "react";
import styles from './Cabecalho.module.css'
export default function Cabecalho(props) {
  return (
    
    <>
    
{/* esse bclassname vai servir para estilizar o
 titulo na file cabecalho.mpodule.css */}
<div className = {styles.cabecalho}>
<div className = {styles.teste}>
<p className={styles.titulo} >{props.titulo}</p>
<img className = {`${styles.titulo}, ${styles.img}`}src= {props.logo}></img> 
    
    </div>
    <p className={styles.subtitulo}>{props.subtitulo}</p>
  
    </div>
    </>
    //props é o objeto q recebe as propriedades escrita no titulo e no subtitulo na file cabecalho
  // essa crase + esse dinheiro + essas chaves servem p usar duas classes no msm coiso.
   
    )
}
