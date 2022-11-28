import React from 'react'
import { Link } from "react-router-dom"

function QuintoAno() {

    const center = {
        textAlign: "center"
    }

  return (
    <main>
        <section class="title-historias">
            <h1>HISTÓRIAS 5º ANO</h1>
        </section>
        <section class="card-section">
            <div class="card-historias">
                <div class="card-conteudo">
                    <div class="card-imagem">
                    	 </div>
                    <div class="card-text">
                        <div class="info">
                            <h2 style={center}>Conto</h2>
                            <p style={center}>Patinho Preto</p>
                        </div>
                        <Link class="btn btn-primary" id="botaoHome" to='/PatinhoPreto' >Jogar</Link>
                    </div>
                </div>
            </div>
            <div class="card-historias">
                <div class="card-conteudo">
                    <div class="card-imagem"></div>
                    <div class="card-text">
                        <div class="info">
                            <h2 style={center}>Cardapio</h2>
                            <p style={center}>Alimentação para comprar</p>
                        </div>
                        <Link class="btn btn-primary" id="botaoHome" to="/Cardapio">Jogar</Link>
                    </div>
                </div>
            </div>
            <div class="card-historias">
                <div class="card-conteudo">
                    <div class="card-imagem"></div>
                    <div class="card-text">
                        <div class="info">
                            <h2 style={center}>Propaganda</h2>
                            <p style={center}>Educa mais Brasil</p>
                        </div>
                        <Link class="btn btn-primary" id="botaoHome" to="/EducaMais">Jogar</Link>
                    </div>
                </div>
            </div>
            <div class="card-historias">
                <div class="card-conteudo">
                    <div class="card-imagem"></div>
                    <div class="card-text">
                        <div class="info">
                            <h2 style={center}>Reportagem</h2>
                            <p style={center}>Escola sofre criticas ao propor tema LGBT</p>
                        </div>
                        <Link class="btn btn-primary" id="botaoHome" to="/Lgbt">Jogar</Link>
                    </div>
                </div>
            </div>            
            <div class="card-historias">
                <div class="card-conteudo">
                    <div class="card-imagem"></div>
                    <div class="card-text">
                        <div class="info">
                            <h2 style={center}>Cientifico</h2>
                            <p style={center}>Obesidade infantil pode dobrar os riscos de morte antes dos 55 anos</p>
                        </div>
                        <Link class="btn btn-primary" id="botaoHome" to="/Obesidade">Jogar</Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
export default QuintoAno;