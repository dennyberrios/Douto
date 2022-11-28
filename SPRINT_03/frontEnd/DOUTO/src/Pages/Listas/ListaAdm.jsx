import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from './.././../Api/Api';

export default function ListaAdm() {

    const [adms, setAdms] = useState([])
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        Api.get("/adms")
            .then((response) => {
                setAdms(response.data);
                setRedirect(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [redirect])

    function deleteAdms(id) {
        Api.delete(`/adms/${id}`)
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
                        </tr>
                    </thead>
                    <tbody>
                        {adms.map((adm) => (
                            <tr className="text-white tr-hover" key={adm.id}>
                                <td className="text-dark">{adm.nome}</td>
                                <td className="text-dark">{adm.sobrenome}</td>
                                <td className="text-dark">{adm.email}</td>
                                <td className="text-dark">{adm.senha}</td>
                                <td className="d-flex justify-content-end">
                                    <Link
                                        to={`/AdmUpdate/${adm.id}`}
                                        className="btn btn-info"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteAdms(adm.id)}
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