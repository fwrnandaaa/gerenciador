import React, { useState, useEffect } from 'react'
import styles from './Cadastrousuario.module.css'

const Cadastro = () => {

    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [confSenha, setConfSenha] = useState('')
    const [salvar, setSalvar] = useState([])

    useEffect(() => {
        localStorage.setItem('salvar', JSON.stringify(salvar));
    }, [salvar])


    function salvarUsuario() {
        if (senha === confSenha) {
            const usuarioExiste = salvar.find((usuario) => usuario.email === email);

            if (usuarioExiste) {
                alert("Usuário já está cadastrado. Faça login.");

            } else if (senha === confSenha) {
                setSalvar([...salvar, { email, nome, senha }])
                console.log('Dados Usuário>>', "Email", email, "Nome", nome)
                localStorage.setItem("senha", JSON.stringify({ salvar }))
                console.log(salvar)
                alert("Usuário cadastrado com sucesso!")

            } else {

                alert("As senha não coincidem");
            }

        }
    } return (
        <>
            <div className={styles.cadastro}>
                <h1 id="cadastroTitulo">Cadastro de Usuário</h1>
                <div className={styles.preencher}>
                    
                    <label> Email</label>
                    <input name='email' onChange={(evento) => { setEmail(evento.target.value); }}>
                    </input> <br />
                </div>
                <div className={styles.preencher}>
                    <label> Nome do usuário </label>
                    <input name='nome' onChange={(evento) => { setNome(evento.target.value); }}>
                    </input> <br />
                </div>

                <div className={styles.preencher}>
                    <label> Senha </label>
                    <input type='password' name='senha' onChange={(evento) => { setSenha(evento.target.value); }}>
                    </input> <br />
                </div>

                <div className={styles.preencher}>
                    <label> Confirmação de senha  </label>
                    <input type='password' name='confSenha' onChange={(evento) => { setConfSenha(evento.target.value); }}>
                    </input> <br />
                </div>
                <input type="button" value="Salvar" onClick={() => salvarUsuario()} />
            </div>



        </>
    )



}
export default Cadastro;