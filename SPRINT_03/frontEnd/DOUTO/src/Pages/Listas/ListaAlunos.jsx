import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from './.././../Api/Api';

function ListaAlunos() {

    const [alunos, setAlunos] = useState([])
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        Api.get("/alunos")
            .then((response) => {
                setAlunos(response.data);
                setRedirect(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [redirect])

    function deleteAluno(id) {
        Api.delete(`/alunos/${id}`)
        setRedirect(true);
    }

    return (
        <div className="container p-3">
            <div className="table-responsive d-flex justify-content-center">
                <table className="table table-hover table-sm table-colors">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Nascimento</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Serie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno) => (
                            <tr className="text-white tr-hover" key={aluno.id}>
                                <td className="text-dark">{aluno.nome}</td>
                                <td className="text-dark">{aluno.sobrenome}</td>
                                <td className="text-dark">{aluno.email}</td>
                                <td className="text-dark">{aluno.senha}</td>
                                <td className="text-dark">{aluno.nascimento}</td>
                                <td className="text-dark">{aluno.cidade}</td>
                                <td className="text-dark">{aluno.estado}</td>
                                <td className="text-dark">{aluno.serie}</td>
                                <td className="d-flex justify-content-end">
                                    <Link
                                        to={`/AlunoUpdate/${aluno.id}`}
                                        className="btn btn-info"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteAluno(aluno.id)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaAlunos;