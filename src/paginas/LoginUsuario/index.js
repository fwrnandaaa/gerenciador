import React, { useState } from 'react';
import styles from './LoginUsuario.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const salvosLocalStorage = JSON.parse(localStorage.getItem('salvar')) || [];

  function buscarUsuario() {
    const findUsers = salvosLocalStorage.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (findUsers) {
      alert('Você está logado!');
    } else {
      alert('Dados inválidos. Tente novamente.');
    }
  }

  return (
    <>
      <h1>Login de Usuário</h1>
      <label>Email</label>
      <input
        name="email"
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
      />
      <br />

      <label>Senha</label>
      <input
        type="password"
        name="senha"
        onChange={(evento) => {
          setSenha(evento.target.value);
        }}
      />
      <br />

      <input type="button" value="Login" onClick={buscarUsuario} />
    </>
  );
};

export default Login;
