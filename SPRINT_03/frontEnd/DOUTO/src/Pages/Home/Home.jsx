import './Home.css';
import { Link } from 'react-router-dom';
import Carrossel1 from './../../assets/img/Home/carrossel-1.png';
import Carrossel2 from './../../assets/img/Home/carrossel-2.png';
import Carrossel3 from './../../assets/img/Home/carrossel-3.png';
import Carrossel4 from './../../assets/img/Home/carrossel-4.png';

function index() {
  return (
    <div>
        <main className="mainHome">
            <section className="color-apresentacao">
                <div className="apresentacao">
                    <div className="textApresentacao">
                        <div>
                            <h1>Bem vindo <br /> ao Douto!</h1>
                        </div>
                        <br />
                        <div>
                            <p>Oi, eu sou o Douto! Sou uma plataforma interativa para você melhorar sua leitura com jogos e
                                histórias conectadas. Vem para o universo de Literato comigo!</p>
                        </div>
                    </div>
                    <div className="imgApresentacao">
                    </div>
                </div>
            </section>
            <section className="color-carrossel">
                <div id="carouselExampleControls" className="carousel slide carrossel" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Carrossel1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Carrossel2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Carrossel3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Carrossel4} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="quemSou">
                    <h2>É um site interativo que você quer? O Douto tem as melhores opções para você. Site repleto de
                        jogos incríveis e histórias radicais. Tudo grátis e não precisa baixar nada! Vamos ser amigos?
                    </h2>
                </div>
            </section>
            <section className="jogosHistoria">
                <div className="item">
                    <h2>5° Ano</h2>
                    <Link to={"/QuintoANo"} className="conteudoHome quintoAno"></Link>
                </div>
                <div className="item">
                    <h2>6° Ano</h2>
                    <Link to={"/SextoAno"} className="conteudoHome sextoAno"></Link>
                </div>
            </section>
        </main>
    </div>
  )
}

export default index