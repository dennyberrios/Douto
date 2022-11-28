import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from './../../Api/Api'
import Logo from './../../assets/logo/logoico.png';

function CadastroAdm() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    const criarOuEditarAdm = (e) => {
        e.preventDefault()

        const adm = { nome, sobrenome, email, senha }

        if (id) {
            Api.put('/adms/' + id, adm).then((response) => {
                navigate('/LoginAdm')
            })
        } else {
            Api.post('/adms/', adm).then((response) => {
                navigate('/LoginAdm')
            })
        }
    }

    useEffect(() => {
        function getAdmById() {
            if (id) {
                Api.get(`/adms/${id}`)
                    .then((response) => {
                        setNome(response.data.nome)
                        setSobrenome(response.data.sobrenome)
                        setEmail(response.data.email)
                        setSenha(response.data.senha)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
        getAdmById()
    }, [id])

    return (
        <section class="section-cadastro">
            <form class="formCadastro" id="form">
                <div class="img-formCadastro">
                    <img src={Logo} alt="Logo" />
                    <h1 className="text-center">{id ? 'Editar Adm' : 'Cadastra ADM'}</h1>
                </div>
                <div class="div-inputsCadastro">
                    <div class="box-formCadastro">
                        <div class="form-controllCadastro">
                            <label for="nome" class="text-labelCadastro">Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                maxlength="15"
                                placeholder="Nome"
                                class="item1Cadastro"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required />
                        </div>
                        <div class="form-controllCadastro">
                            <label for="sobrenome" class="text-labelCadastro">Sobrenome:</label>
                            <input
                                type="text"
                                name="sobrenome"
                                maxlength="80"
                                placeholder="Sobrenome"
                                class="item1Cadastro"
                                id="sobrenome"
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                                required />
                        </div>
                        <div class="form-controllCadastro">
                            <label for="email" class="text-labelCadastro">E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                maxlength="50"
                                placeholder="E-mail"
                                class="item1Cadastro"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div class="form-controllCadastro">
                            <label for="password" class="text-labelCadastro">Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                maxlength="8"
                                placeholder="Senha"
                                class="item1Cadastro"
                                id="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required />
                        </div>
                        <div class="verSenhaCadastro">
                            <input type="checkbox" onclick="exibirSenha()" id="myCheck" /> <b>Exibir senha.</b>
                        </div>
                        <p class="textAlertSenhaCadastro">Senha deve ter no minimo 8 caracteres e no maximo 12</p>
                        <button type="submit" class="btn-cadastroCadastro" onClick={(e) => criarOuEditarAdm(e)}>Cadastrar</button>
                    </div>
                </div>
                <div class="termosCadastro">
                    <input type="checkbox" required /> Eu aceito <a href="#"> Termos</a> e <a href="#">Politica de
                        Privacidade</a> do site.
                </div>
            </form>
        </section>
    )
}

export default CadastroAdm