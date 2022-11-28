import React from 'react';
import "./Entrevista.css";
import Entrevista from "./../../../assets/img/perfil/Entrevista.png";
import { Link } from 'react-router-dom';
 
export default function Entre() {

    const centro = {
        textAlign: "center",
    }

    const just = {
        textAlign: "justify",
    }

    return (
        <div className="topo">
            <div className="container text-white">
                <div className="row justify-content-around">
                    <div className="img">
                        <img src={Entrevista} className="imgEntrevista" />
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div className="col-md-auto">
                        <h2 style={centro}>
                            Antônio Fagundes e a experiência “Vermelho”
                        </h2>
                        <br />
                        <p style={just}>
                            Interpretando o icônico pintor e líder do Expressionismo Abstrato, Mark Rothko, Fagundes também fala sobre o texto do espetáculo, adaptado de John Logan, este, que ficou fascinado pelas obras do pintor quando as viu no Tatte Galery (Londres) e, foi a partir disso, que resolveu montar para os palcos teatrais, “Red” (Vermelho). Confira abaixo a nossa conversa na íntegra!
                            <br />
                            <br />
                            SP da Garoa: Como está sendo a volta de “Vermelho”? Conte-nos sobre a peça.
                            <br />
                            <br />
                            Antônio Fagundes:
                            <br />
                            Esse texto do John Logan, que é um famoso roteirista de Hollywood, mas também é um excelente autor de teatro e as pessoas não sabem muito disso.
                            Ele escreveu esses dois personagens, um, baseado no Mark Rothko, pintor que realmente existiu, num momento de crise da vida dele.
                            Mas é um texto muito eletrizante com muito bom humor, que fala da relação desse pintor, o Rothko, com o seu jovem assistente.
                            Então, é uma peça que não só fala de artes plásticas mas também de conflitos.
                            <br />
                            <br />
                            SP da Garoa: Você realmente se envolve com o personagem, não é?
                            <br />
                            <br />
                            Antônio Fagundes:
                            <br />
                            Sim, o John Logan foi muito feliz em colocar esses dois personagens em cena, com toda essa força dedicada.
                            O espetáculo, dirigido pelo Jorge Takla, que também fez o cenário, possuem uma beleza única, a luz é muito bonita…
                            <br />
                            <br />
                            SP da Garoa: Vocês pintam de verdade em cena?
                            <br />
                            <br />
                            Antônio Fagundes:
                            <br />
                            A gente pinta uma tela, inclusive, depois do espetáculo a gente faz um bate-papo com a plateia e leiloa essa pintura, ou seja, nesse leilão que a plateia se diverte e muito!
                            <br />
                            <br />
                            SP da Garoa: Como é contracenar com o seu próprio filho? Está adquirindo mais experiências?
                            <br />
                            <br />
                            Antônio Fagundes:
                            <br />
                            Eu também tô adquirindo experiências porque o teatro, talvez, seja a arte mais democrática, e quando abre a cortina, ninguém entende mais do que o outro, todo mundo é igual, somos só nós dois em cena, eu dependo muito dele, da mesma forma que ele depende de mim, e da mesma forma que nós dois dependemos de quem abre a cortina. Eu tô em cena com ele, há mais de quatro anos, fizemos um outro espetáculo juntos, o “Tribos”, e tá sendo muito bom.
                        </p>
                    </div>
                    <div>
                        <br />
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
                            <br />1 -  Qual a finalidade da entrevista SP da Garoa com Antônio Fagundes? <br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha" value="A – Saber de informações pessoais da vida do ator." /> A – Saber de informações pessoais da vida do ator.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="B – Informações sobre preço e horário da peça." /> B – Informações sobre preço e horário da peça.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="C – Saber sobre a obra que deu origem a peça." /> C – Saber sobre a obra que deu origem a peça.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="D – Comentar sobre a peça e a experiência vivida." /> D – Comentar sobre a peça e a experiência vivida.
                        </ol>
                    </div>
                    <div>
                        <p style={just}>
                            <br />2 -  Durante a peça acontece um momento que diverte bastante a plateia. Que momento é esse?<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha1" value="A – Standup de piadas no meio da peça." /> A – Standup de piadas no meio da peça.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha1" value="B – Bate papo e leilão das pinturas ao final da peça." /> B – Bate papo e leilão das pinturas ao final da peça.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha1" value="C – Texto muito eletrizante com muito bom humor." /> C – Texto muito eletrizante com muito bom humor.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha1" value="D – Os atores pintando os quadros em cena." /> D – Os atores pintando os quadros em cena.
                        </ol>
                    </div>
                    <div>
                        <p style={just}>
                            <br />3 - Na peça, Antônio Fagundes contracena com outro ator. Quem é?<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha3" value="A – Seu sobrinho" /> A – Seu sobrinho
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="B – A atriz Nivea Maria" /> B – A atriz Nivea Maria
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="C – Seu próprio filho" /> C – Seu próprio filho
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="D – O ator Stenio Garcia" /> D – O ator Stenio Garcia
                        </ol>
                    </div>
                    <section className='flexivel'>
                        <Link className="btn-jogo color-btn1" type="submit" to='/Ansiedade'>VOLTAR</Link>
                        <Link className="btn-jogo color-btn2" type="submit" to='/Samaritano'>PROXIMO</Link>
                    </section>
                </div>
            </div>
        </div>
    )
};