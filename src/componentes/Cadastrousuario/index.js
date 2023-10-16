import React, { useState, useEffect } from 'react'
import styles from './Cadastrousuario.module.css'

const Cadastro = () => {

    const [senha, setSenha]=useState('')
    const [nome, setNome]=useState('')
    const [email, setEmail]=useState('')
    const [confSenha, setConfSenha]=useState('')
    const [salvar, setSalvar]=useState([])
    
    //Atualiza o localStorage sempre que 'salvar' for alterado
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
          alert("Usuário salvo com sucesso!")
    
        } else {
          alert  ("As senha não coincidem");
        }
        
    }
    
}
}