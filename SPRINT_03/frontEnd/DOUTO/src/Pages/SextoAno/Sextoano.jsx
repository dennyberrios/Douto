import React from 'react';
import './Sextoano.css'
import { Link } from 'react-router-dom';

export default function San ( ) {

  return (
    <main>
        <section className="title-historias">
            <h1>HISTÓRIAS 6º ANO</h1>
        </section>
        <section className="card-section">
            <div className="card-historias">
                <div className="card-conteudo">
                    <div className="card-imagem"></div>
                    <div className="card-text">
                        <div className="info">
                            <h2 className='h2SextoAno'>Conto</h2>
                            <p className='pSextoAno'>O índio e o Jabuti</p>
                        </div>
                        <Link className="btn btn-primary" id="botaoHome" to="/Indiojabuti">Jogar</Link>
                    </div>
                </div>
            </div>
             <div className="card-historias">
                <div className="card-conteudo">
                    <div className="card-imagem"></div>
                    <div className="card-text">
                        <div className="info">
                            <h2 className='h2SextoAno'>Notícia</h2>
                            <p className='pSextoAno'>Olimpíadas Rio 2016</p>
                        </div>
                        <Link className="btn btn-primary" id="botaoHome" to={'/Olimpiadas'}>Jogar</Link>
                    </div>
                </div>
            </div>
            <div className="card-historias">
                <div className="card-conteudo">
                    <div className="card-imagem"></div>
                    <div className="card-text">
                        <div className="info">
                            <h2 className='h2SextoAno'>Científico</h2>
                            <p className='pSextoAno'>O sono no mundo moderno</p>
                        </div>
                        <Link className="btn btn-primary" id="botaoHome" to={'/Ansiedade'}>Jogar</Link>
                    </div>
                </div>
            </div> 
            <div className="card-historias">
                <div className="card-conteudo">
                    <div className="card-imagem"></div>
                    <div className="card-text">
                        <div className="info">
                            <h2 className='h2SextoAno'>Entrevista</h2>
                            <p className='pSextoAno'>Antônio Fagundes e a experiência “Vermelho”</p>
                        </div>
                        <Link className="btn btn-primary" id="botaoHome" to={'/Entrevista'} >Jogar</Link>
                    </div>
                </div>
            </div>
            <div className="card-historias">
                <div className="card-conteudo">
                    <div className="card-imagem"></div>
                    <div className="card-text">
                        <div className="info">
                            <h2 className='h2SextoAno'>Crítica</h2>
                            <p className='pSextoAno'>Samaritano enterra boas ideias em uma trama medíocre e derivativa</p>
                        </div>
                        <Link className="btn btn-primary" id="botaoHome"  to='/Samaritano'>Jogar</Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )

};