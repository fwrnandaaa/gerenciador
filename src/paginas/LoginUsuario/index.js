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
      <div className={styles.login}>
        <h1>Login de Usuário</h1>
        <div className={styles.preencher}>
          <label>Email</label>
          <input
            name="email"
            onChange={(evento) => {
              setEmail(evento.target.value);
            }}
          />
          <br />
        </div>
        <div >
          <div className={styles.preencher}>
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              onChange={(evento) => {
                setSenha(evento.target.value);
              }}
            />
            <br />
          </div>
          <input type="button" value="Login" onClick={buscarUsuario} />
        </div>
      </div>
    </>
  );
};

export default Login;
