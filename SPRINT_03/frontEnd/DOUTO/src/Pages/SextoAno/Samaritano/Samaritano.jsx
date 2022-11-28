import React from 'react';
import "./Samaritano.css";
import Samaritano from "./../../../assets/img/perfil/Critica.png";
import { Link } from 'react-router-dom';

export default function Sam ( ) {

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
                    <img src={Samaritano} className="imgSamaritano"/>
                </div>
                <div>
                    <br/>
                    <br/>
                </div>
                <div className="col-md-auto">
                    <h2 style={centro}>
                        Samaritano enterra boas ideias em uma trama medíocre e derivativa
                    </h2>
                    <br/>
                    <p style={just}>
                        O lance das reviravoltas é que elas têm, por definição, de surpreender o público. A frase pode parecer óbvia, mas a chance é muito grande de que você queira dizê-la em voz alta ao final de Samaritano. O filme de ação, que coloca Sylvester Stallone de novo na onda dos super-heróis (após a ponta em Guardiões da Galáxia Vol. 2, de 2017), telegrafa a grande revelação de seu terceiro ato desde os créditos iniciais. E, como não há muito mais que isso em oferta ali, cava sua própria cova de esquecimento. 
                    <br/>
                    <br/>
                        Filmes como Logan (2017), Homem de Ferro 3 (2013), O Profissional (1994) e outras obras do tropo do “velho e criança” são ordenhados pelo roteirista Bragi F. Schut para dar a Samaritano sua trama. Adolescente obcecado em histórias de um antigo herói, Sam Cleary (Javon Walton) passa a ditaracre que um vizinho velho e recluso (Stallone) é o seu ídolo superpoderoso — morto anos antes, em um embate com seu arqui-inimigo que supostamente ceifou a vida de ambos. Depois de muita insistência e um ou outro evento catalisador, a dupla improvável estreita os laços, mas a amizade entra em risco rapidamente graças a um admirador do vilão caído.
                    <br/>
                    <br/>
                        Seguindo de forma bastante protocolar a cartilha desse tipo de história, Samaritano fica refém da promessa de surpresa que ensaia em seus minutos iniciais para de fato injetar alguma personalidade em si. Por si só uma experiência frustrante, já que cinema nunca deveria ser reduzido a meros sustos e revelações, tudo piora porque a ideia por trás desse ponto de virada guarda um potencial narrativo interessante — que é, aqui, totalmente desperdiçado. Em alguma realidade do multiverso, Samaritano consegue aliar porradaria genérica com uma reflexão interessante sobre o maniqueísmo com o qual nos acostumamos a lidar em filmes de super-heróis. Infelizmente, não na nossa!
                    <br/>
                    <br/>
                        Quando anuncia com drama, pompa e olhos lacrimosos o que fez óbvio ao longo de seus 96 minutos que mais parecem 120, Samaritano nada tem a fazer com isso, simplesmente atropelando qualquer possibilidade de desdobramento interessante. Samaritano consegue ser tão obtuso à sua próxima dramaticidade que ainda se encerra em tom cínico de início de franquia, mesmo que sua principal estrela tenha 76 anos e faça todas as cenas de luta (muito pifiamente dirigidas por Julius Avery, aliás) de gorro e casaco, para facilitar a troca por um dublê. Enfim, o puro suco da bucha de canhão do streaming.
                    <br/>
                    <br/>
                        Fonte: <a className='Fonte' href="https://www.omelete.com.br/filmes/criticas/samaritano-critica">www.omelete.com.br</a>
                    </p>
                </div>
                <div>
                    <br/>
                </div>
                <div>
                    <h2>
                        Vamos checar seu aprendizado?
                    </h2>                    
                </div>
                <div>
                    <br/>
                </div>
                <div>
                    <p style={just}>
                        <br/>1 -  O que a crítica ao filme quis dizer com “enterrar boas ideias”?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha1" value="A – Resumir boas ideias."/> A – Resumir boas ideias.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha1" value="B – Desperdiçar boas ideias"/> B – Desperdiçar boas ideias
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha1" value="C – Diminuir boas ideias."/> C – Diminuir boas ideias.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha1" value="D – Esquecer boas ideias. "/> D – Esquecer boas ideias.
                    </ol>
                </div>
                <div>
                    <p style={just}>
                        <br/>2 -  Qual trecho da crítica insinua que o filme é cansativo?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha2" value="A – Samaritano consegue aliar porradaria genérica com uma reflexão interessante. "/> A – Samaritano consegue aliar porradaria genérica com uma reflexão interessante.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha2" value="B – Samaritano consegue ser tão obtuso à sua próxima dramaticidade."/> B – Samaritano consegue ser tão obtuso à sua próxima dramaticidade.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha2" value="C – O lance das reviravoltas é que elas têm, por definição, de surpreender o público"/> C – O lance das reviravoltas é que elas têm, por definição, de surpreender o público.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha2" value="D – Ao longo de seus 96 minutos que mais parecem 120. "/> D – Ao longo de seus 96 minutos que mais parecem 120.
                    </ol>
                </div>
                <div>
                    <p style={just}>
                        <br/>3 -  Outras obras são citadas na crítica como “obras do tropo velho e criança”. Uma delas é:”?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha3" value="A – Logan (2022)."/> A – Logan (2022).
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha3" value="B – Os Vingadores (2019)."/> B – Os Vingadores (2019).
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha3" value="C – Homem de Ferro 3 (2013)."/> C – Homem de Ferro 3 (2013).
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha3" value="D – Hulk (2018).  "/> D – Hulk (2018). 
                    </ol>
                </div>
                <section className='flexivel'>
                    <Link className="btn-jogo color-btn1" id="botao" type="submit" to='/Entrevista'>VOLTAR</Link>
                    <Link className="btn-jogo color-btn2" id="botao" type="submit" to='/Parabens'>PROXIMO</Link>
                </section>
            </div>
        </div>
    </div>
  )
};