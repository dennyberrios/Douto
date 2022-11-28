import React from 'react'
import Comida from "./../../../assets/img/perfil/Comida.png";
import { Link } from "react-router-dom";
import './Cardapio.css'

function Cardapio() {
    return (
        <div className="topo">
            <div className="container text-white">
                <div className="row justify-content-around">
                    <div className="img">
                        <img src={Comida} className="Cardapio" />
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div className="col-md-auto">
                        <h2 style={{ textAlign: "center" }}>
                            Cardápio
                        </h2>
                        <div>
                            <br />
                        </div>
                        <div>
                            <p>Massas</p>
                        </div>
                        <p style={{ textAlign: "justify" }}>A La Parmegiana<br />
                            Filé de carne empanado e recheado com queijo parmesão, presunto, tomate seco, orégano. Acompanhado de massa espaguete ao molho de tomate com ervas finas. R$ 39,90
                            <br />
                            <br />
                            Carbonara<br />
                            Bacon frito, alho, manjericão, cebolinha, coentro, queijo parmesão. Acompanhado de massa espaguete ao molho branco. R$ 24,90
                            <br />
                            <br />
                            Del Madeira<br />
                            Cubos de carne grelhados no azeite, cebola, alho, champignon. Acompanhado de massa penne ao molho madeira. R$ 49,90
                            <br />
                            <br />
                        </p>
                        <div>
                            <p>Carnes</p>
                        </div>
                        <p style={{ textAlign: "justify" }}>Maminha<br />
                            1 kg de maminha. Acompanhado de baião ou arroz, farofa e vinagrete. R$ 59,90
                            <br />
                            <br />
                            Picanha Nacional<br />
                            1 kg de picanha. Acompanhado de baião ou arroz, farofa e vinagrete. R$ 79,90
                            <br />
                            <br />
                            Picanha Argentina<br />
                            1 kg de picanha. Acompanhado de baião ou arroz, farofa e vinagrete. R$ 99,90
                            <br />
                            <br />
                        </p>
                        <div>
                            <p>Peixes e Frutos do mar</p>
                        </div>
                        <p style={{ textAlign: "justify" }}>Tilápia<br />
                            Peixe inteiro de 1kg. Acompanhado de baião ou arroz, farofa e vinagrete. R$ 49,90
                            <br />
                            <br />
                            Salmão<br />
                            500g de salmão em postas grelhadas. Acompanhado de arroz branco e purê de batatas. R$ 69,90
                            <br />
                            <br />
                            Camarão ao Alho e Óleo<br />
                            1 kg de camarão frito com alho e óleo. Acompanhado de arroz branco, farofa e vinagrete. R$ 64,90
                            <br />
                            <br />
                        </p>
                    </div >
                    <div>
                        <br />
                    </div>
                    <div>
                        <h2>
                            Vamos checar seu aprendizado?
                        </h2>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />1 – Os menus do Cardápio possuem uma característica em comum. Qual é ela?<br />
                        </p>
                    </div >
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha1" value="A – Os menus são compostos por pratos brasileiros." /> A – Os menus são compostos por pratos brasileiros.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha1" value="B – Os menus possuem a descrição dos pratos." /> B – Os menus possuem a descrição dos pratos.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha1" value="C – Os menus são escritos em língua estrangeira.
                            "/> C – Os menus são escritos em língua estrangeira.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha1" value="D – Os menus são compostos por pratos de origem vegetal." /> D – Os menus são compostos por pratos de origem vegetal.
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />2 – O menu de massas possui os preços mais baratos do cardápio. Esse fato se deve a que? <br />
                        </p>
                    </div >
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha" value="A – A qualidade nutricional dos pratos é baixa." /> A – A qualidade nutricional dos pratos é baixa.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="B – As massas apresentam somente macarrão e especiarias na sua composição. " /> B – As massas apresentam somente macarrão e especiarias na sua composição.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="C – Os ingredientes utilizados para produzir os pratos são mais baratos quando comparados aos demais menus." /> C – Os ingredientes utilizados para produzir os pratos são mais baratos quando comparados aos demais menus.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="D – Os pratos do menu massa são de origem vegetal." /> D – Os pratos do menu massa são de origem vegetal.
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />3 – Todo cardápio possui um formato de apresentação dos pratos. Qual alternativa descreve melhor o formato apresentado no cardápio?
                            <br />
                        </p>
                    </div >
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha2" value="A – Menu, nome do prato, descrição do prato e preço." /> A – Menu, nome do prato, descrição do prato e preço.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="B – Menu, nome dos menus, nacionalidade dos pratos e preço." /> B – Menu, nome dos menus, nacionalidade dos pratos e preço.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="C – Nome dos pratos, nacionalidade dos pratos, descrição dos pratos.
                             "/> C – Nome dos pratos, nacionalidade dos pratos, descrição dos pratos.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="D – Menu, peso da quantidade, descrição dos pratos e preço." /> D – Menu, peso da quantidade, descrição dos pratos e preço.
                        </ol>
                    </div>
                </div >
                <div>
                    <br />
                    <br />
                </div>
                <section className='flexivel'>
                    <Link className="btn-jogo color-btn1" id="botao" type="submit" to="/PatinhoPreto">VOLTAR</Link>
                    <Link className="btn-jogo color-btn2" id="botao" type="submit" to="/EducaMais">PROXIMO</Link>
                </section>
            </div >
        </div >
    )
}
export default Cardapio