import React from 'react'
import FotoCadastro from './../../assets/img/login/img.png'
import Logo from './../../assets/logo/logoico.png';
import { Link } from 'react-router-dom';

function LoginAluno() {
    return (
        <section className='sectionLogin'>
            <div class="box">
                <div class="box-img">
                    <img class="foto-apresenta" src={FotoCadastro} alt="" />
                </div>
                <form class="box-login">
                    <div class="logo-login">
                        <img src={Logo} alt="" />
                        <h1 class="pt-3">Olá!</h1>
                        <h1>Seja bem vindo ao Douto!</h1>
                    </div>
                    <div class="form-login">
                        <label class="msg-label pb-2 pt-3">Insira seu E-mail e senha.</label>
                        <div class="item1">
                            <input
                                type="email"
                                name="email"
                                maxlength="50"
                                placeholder="Digite seu E-mail"
                                class="login item2"
                                id="login"
                                required
                                 />
                        </div>
                        <div class="item1">
                            <input
                                type="password"
                                name="senha"
                                maxlength="12"
                                placeholder="Digite sua senha"
                                class="senha item2"
                                id="password"
                                required
                                 />
                            <img src="./assets/img/login/invisivel.png" id="olho" alt="" />
                        </div>

                        <input type="submit" value="Entrar" id="butao"/>
                        <div><Link to='/CadastroAluno' class="cria-conta">Criar uma conta</Link></div>
                        <div><Link to='/Lista-Alunos' class="cria-conta">Esqueceu a conta</Link></div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginAluno