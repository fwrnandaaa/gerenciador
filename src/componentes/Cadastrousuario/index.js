import React, { useState, useEffect } from 'react'
import styles from './Cadastrousuario.module.css'

const Cadastro = () => {

    const [senha, setSenha]=useState('')
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [confSenha, setConfSenha]=useState('')
    const [salvar, setSalvar]=useState([])
  
    useEffect(() => {
      localStorage.setItem('salvar', JSON.stringify(salvar));
    }, [salvar])


    function salvarUsuario(){
        if (senha === confSenha) {
        const usuarioExiste = salvar.find((usuario) => usuario.email === email);
    
        if (usuarioExiste) {
          alert("Usuário já está cadastrado. Faça login.");
    
        } else if (senha === confSenha) {
          setSalvar([...salvar, {email, nome, senha}])
          console.log('Dados Usuário>>', "Email", email, "Nome", nome)
          localStorage.setItem("senha",JSON.stringify({salvar}))
          console.log(salvar)
          alert("Usuário cadastrado com sucesso!")
    
        } else {
            
          alert  ("As senha não coincidem");
        }
        
    } 
}return ( 
    <>
    <h1>Cadastro de Usuário</h1> 

   <label> Email</label> 
        <input name='email' onChange={(evento)=> 
            {setEmail(evento.target.value);}}>
        </input> <br/>

    <label> Nome do usuário </label> 
        <input name='nome' onChange={(evento)=> 
            {setNome(evento.target.value);}}>
        </input> <br/>

    <label> Senha </label> 
        <input type='password' name='senha' onChange={(evento)=> 
            {setSenha(evento.target.value);}}>
        </input> <br/>

    <label> Confirmação de senha  </label> 
        <input type='password' name='confSenha' onChange={(evento)=> 
            {setConfSenha(evento.target.value);}}>
        </input> <br/>

   <input type="button" value="Salvar" onClick={()=> salvarUsuario()}/>




</>
)    



}
export default Cadastro;