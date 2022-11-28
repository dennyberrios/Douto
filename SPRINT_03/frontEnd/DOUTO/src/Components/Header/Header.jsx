import Logoico from "./../../assets/ico/logoico.png";
import "./Header.css"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" id="navega">
                <div id="topo">
                    <a href="./index.html"><img className="logo" src={Logoico} alt="Logo"/></a>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link active link" aria-current="page" href="index.html">HOME</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div  className="nav-link dropdown-toggle text-white link" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PARA OS PAIS
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to="/Precisamosdevoces" className="dropdown-item link" href="#">PRECISAMOS DE VOCÊS</Link>
                                        </li>
                                        <li>
                                            <Link to="/Doacoes" className="dropdown-item link" href="doacoes.html">DOAÇÕES</Link>
                                            </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Sobrenos" className="nav-link active link" aria-current="page" href="sobrenos.html">SOBRE NÓS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contato" className="nav-link active link" aria-current="page" href="contato.html">CONTATO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Login" className="nav-link active link" id="btn-login" aria-current="page" href="login.html">LOGIN</Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;