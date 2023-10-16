import React, { useState } from 'react'
import styles from './LoginUsuario.module.css'

const Login = () => {

    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('')


    const salvosLocalStorage = JSON.parse(localStorage.getItem("salvar")) || [];


      function buscarUsuario(){

      }
            const findUsers = salvosLocalStorage.find((usuario) => usuario.email === email && usuario.senha === senha);

            if(findUsers) {
                alert ("Você está logado!");
            } else {
                
            }
        

      return (
       <>
           
           <label> Email</label> 
                <input name='email' onChange={(evento)=> 
                    {setEmail(evento.target.value);}}>
                </input> <br/>

            <label> Senha </label> 
                <input type='password' name='senha' onChange={(evento)=> 
                    {setSenha(evento.target.value);}}>
                </input> <br/>

           <input type="button" value="Login" onClick={()=> buscarUsuario()}/>
           <input type="button" value="Login" onClick={buscarUsuario}/>

        </>
      )

}

    
    export default Login;
        
