import React from 'react';
import "./Olimpiadas.css";
import Olimpiadas from "./../../../assets/img/perfil/Olimpiadas.png";
import { Link } from 'react-router-dom';

export default function Oli() {
 
    const centro = {
        textAlign: "center",
    }

    const just = {
        textAlign: "justify",
    }

    return (

        <div class="topo">
            <div class="container text-white">
                <div class="row justify-content-around">
                    <div class="img">
                        <img src={Olimpiadas} className="fotoOlimpiadas" />
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div class="col-md-auto">
                        <h2 style={centro}>
                        Olimpíadas Rio 2016
                        </h2>
                        <br />
                        <p style={just}>
                            O Rio de Janeiro, sede dos jogos Olímpicos e Paraolímpicos de 2016, vem se preparando para receber milhões de turistas no maior evento esportivo do planeta. Os Jogos Olímpicos ocorrerão entre os dias 05 e 21 de agosto e os Jogos Paraolímpicos, que contemplam os atletas com necessidades especiais, acontecerão de 7 a 18 de setembro.
                            <br />
                            <br />
                            Segundo a página oficial do “Rio 2016”, os Jogos Olímpicos vão ocorrer durante 17 dias (05 e 21 de agosto) em quatro regiões da Cidade Maravilhosa, que totalizam 32 locais de competição: Copacabana, Barra, Maracanã e Deodoro. As Modalidades Olímpicas incluem 42 esportes, onde participarão 10.500 atletas de 206 países. Duas novas modalidades foram inclusas nos jogos Olímpicos de 2016: o Golfe e o Rugby.
                            <br />
                            <br />
                            Já os Jogos Paraolímpicos, destinados para atletas com necessidades especiais, acontecerão durante 11 dias (7 a 18 de setembro) nas mesmas regiões da cidade (Copacabana, Barra, Maracanã e Deodoro), que no total contemplam 20 locais de competição. São 23 modalidades esportivas, onde participarão 4.350 atletas de 178 países. A novidade é a inclusão de duas novas modalidades: a Canoagem e o Triatlo.
                        </p>
                    </div>
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
                        <p style={just}>
                            <br />1 -  Quantas modalidades esportivas estiverem presentes nos jogos Olímpicos e Paraolímpicos de 2016? <br />
                        </p>
                    </div>
                        <div>
                            <ol>
                                <input
                                    type="radio"
                                    className='itemQuest'
                                    name="escolha"
                                    value= {"42 e 23"}
                                    onChange={(e) => setAtvCinco(e.target.value)}
                                    /> A – 42 e 23
                                <br />
                                <input
                                    type="radio"
                                    className='itemQuest'
                                    name="escolha"
                                    value="B – 32 e 21" /> B – 32 e 21
                                <br />
                                <input type="radio"
                                className='itemQuest'
                                    name="escolha"
                                    value="C – 40 e 20" /> C – 40 e 20
                                <br />
                                <input
                                    type="radio"
                                    className='itemQuest'
                                    name="escolha"
                                    value="D – 42 e 32" /> D – 42 e 32
                            </ol> 
                        </div>
                        <div>
                            <p style={just}>
                                <br/> 2 -  Duas modalidades foram incluídas nos jogos Olímpicos. São elas:<br />
                            </p>
                        </div>
                        <div>
                            <ol>
                                <input
                                 type="radio"
                                 className='itemQuest'
                                    name="escolha5"
                                    value="A – Skate e Dança de Rua" /> A – Skate e Dança de Rua
                                <br />
                                <input 
                                type="radio"
                                    name="escolha5"
                                    className='itemQuest'
                                    value="B – Golfe e o Rugby" /> B – Golfe e o Rugby
                                <br />
                                <input 
                                type="radio"
                                    name="escolha5"
                                    className='itemQuest'
                                    value="C – Rugby e Skate" /> C – Rugby e Skate
                                <br />
                                <input type="radio"
                                className='itemQuest'
                                    name="escolha5"
                                    value="D – Golfe e Skate" /> D – Golfe e Skate
                            </ol>
                        </div>
                        <div>
                            <p style={just}>
                                <br />3 -  Os jogos Olímpicos e Paraolímpicos de 2016 foram realizados na cidade maravilhosa. Apelido da cidade do ___________?<br />
                            </p>
                        </div>
                        <div>
                            <ol>
                                <input 
                                type="radio"
                                className='itemQuest'
                                    name="escolha6"
                                    value="A – São Paulo" /> A – São Paulo
                                <br />
                                <input
                                    type="radio"
                                    className='itemQuest'
                                    name="escolha6"
                                    value="B – Ceará" /> B – Ceará
                                <br />
                                <input
                                    type="radio"
                                    className='itemQuest'
                                    name="escolha6"
                                    value="C – Brasília" /> C – Brasília
                                <br />
                                <input
                                    type="radio"
                                    className='itemQuest'
                                    name="escolha6"
                                    value="D – Rio de Janeiro " /> D – Rio de Janeiro
                            </ol>
                        </div>

                        <section className='flexivel'>
                            <Link class="btn-jogo color-btn1" type="submit" to='/Indiojabuti'>VOLTAR</Link>
                            <Link class="btn-jogo color-btn2" type="submit" to='/Ansiedade' >PROXIMO</Link>
                        </section>
                </div>
            </div>
        </div>
    )
};