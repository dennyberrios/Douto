import React from 'react';
import './CadastroAluno.css';
import Logo from './../../assets/logo/logoico.png';
import Api from './../../Api/Api';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Estado = {
    marginBottom: "0px"
}

function CadastroAluno() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [nascimento, setNacimento] = useState('')
    const [serie, setSerie] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    const criarOuEditarAluno = (e) => {
        e.preventDefault()

        const aluno = { nome, sobrenome, nascimento, serie, estado, cidade, email, senha }

        if (id) {
            Api.put('/alunos/' + id, aluno).then((response) => {
                navigate('/Login')
            })
        } else {
            Api.post('/alunos/', aluno).then((response) => {
                navigate('/Login')
            })
        }
    }



    useEffect(() => {
        function getAlunoById() {
            if (id) {
                Api.get(`/alunos/${id}`)
                    .then((response) => {
                        setNome(response.data.nome)
                        setSobrenome(response.data.sobrenome)
                        setNacimento(response.data.nascimento)
                        setSerie(response.data.serie)
                        setEstado(response.data.estado)
                        setCidade(response.data.cidade)
                        setEmail(response.data.email)
                        setSenha(response.data.senha)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
        getAlunoById()
    }, [id])

    return (
        <section className="section-cadastro">
            <form class="formCadastro" id="form">
                <div className="img-formCadastro">
                    <img src={Logo} alt="Logo" />
                    <h1 className="text-centerCadastro">{id ? 'Editar Estudante' : 'Cadastro Estudante'} </h1>
                </div>
                <div className="div-inputsCadastro">
                    <div className="box-formCadastro">
                        <div className="form-controllCadastro">
                            <label for="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                maxlength="15"
                                placeholder="Nome"
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="form-controllCadastro">
                            <label for="Snome" className="text-labelCadastro">Sobrenome:</label>
                            <input
                                type="text"
                                placeholder="Sobrenome"
                                name="sobrenome"
                                maxlength="80"
                                className="item1Cadastro"
                                id="sobrenome"
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                                required />
                        </div>
                        <div className="form-controllCadastro">
                            <label for="nascimento" className="text-labelCadastro">Data de Nascimento:</label>
                            <input
                                type="date"
                                name="nascimento"
                                maxlength="50"
                                className="item1Cadastro"
                                id="nascimento"
                                value={nascimento}
                                onChange={(e) => setNacimento(e.target.value)}
                                required />
                        </div>
                        <label className="text-labelCadastro" for="Serie">Serie:</label>
                        <select name="serie"
                            className="form-selec"
                            aria-label="Default select example"
                            value={serie}
                            onChange={(e) => setSerie(e.target.value)}
                            required>

                            <option selected>Escolha o ano Escolar</option>
                            <option value="quinto">5° Ano</option>
                            <option value="sexto">6° Ano</option>
                        </select>
                        <div className="form-controllCadastro">
                            <label for="UF" className="text-labelCadastro">UF:</label>
                            <input
                                type="text"
                                name="estado"
                                maxlength="10"
                                placeholder="UF"
                                class="item1Cadastro"
                                id="UF"
                                style={Estado}
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                required />
                        </div>
                    </div>
                    <hr className="hrCadastro" />
                    <div className="box-formCadastro">
                        <div className="form-controllCadastro">
                            <label for="cidade" className="text-labelCadastro">Cidade:</label>
                            <input
                                type="text"
                                name="cidade"
                                maxlength="50"
                                placeholder="Cidade"
                                className="item1Cadastro"
                                id="cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                required />
                        </div>
                        <div className="form-controllCadastro">
                            <label for="email" className="text-labelCadastro">E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                maxlength="50"
                                placeholder="E-mail"
                                className="item1Cadastro"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="form-controllCadastro">
                            <label for="password" className="text-labelCadastro">Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                maxlength="12"
                                placeholder="Senha"
                                className="item1Cadastro"
                                id="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required />
                        </div>
                        <div className="verSenhaCadastro">
                            <input type="checkbox" id="myCheck" /> <b>Exibir senha.</b>
                        </div>
                        <p className="textAlertSenhaCadastro">Senha deve ter no minimo 8 caracteres e no maximo 12</p>
                        <button type="submit" className="btn-cadastroCadastro" onClick={(e) => criarOuEditarAluno(e)}>Cadastrar</button>
                    </div>
                </div>
                <div className="termosCadastro">
                    <input type="checkbox" /> Eu aceito <a href="#"> Termos</a> e <a href="#">Politica de
                        Privacidade</a> do site.
                </div>
            </form>
        </section >
    )
}

export default CadastroAluno