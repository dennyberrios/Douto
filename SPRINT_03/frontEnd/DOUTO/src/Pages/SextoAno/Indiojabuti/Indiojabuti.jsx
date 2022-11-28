import React from 'react';
import "./Indiojabuti.css";
import Indio from "./../../../assets/img/perfil/Indio.png";
import { Link }  from 'react-router-dom';

export default function Ind() {

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
                <div className="col-md-auto">
                    <img src={Indio} width="250" height="250"/>
                </div>
                <div>
                    <br/>
                    <br/>
                </div>
                <div className="col-md-auto">
                    <h2 style={centro}>
                        O índio e o Jabuti
                    </h2>
                    <br/>
                    <p style={just}>
                        Um dia, o jabuti estava passeando e encontrou uma lâmpada mágica e a escondeu. Veio uma chuva forte, tão forte que inundou a floresta. Era preciso fazer uma mágica para parar a chuva. O indiozinho perguntou aos bichos da floresta: 
                    <br/>
                    <br/>
                        - Quem sabe de uma mágica que faça parar de chover?
                        <br/>
                        <br/>
                        A hiena deu gargalhada e disse:
                        <br/>
                        <br/>    
                        - Aqui não tem nenhum mágico.
                        <br/>
                        <br/>
                        O jabuti buscou a lâmpada e disse:
                        <br/>
                        <br/>
                        - Não sei se funciona, mas se ajudar ...
                        <br/>
                        <br/>
                        - Eu sei, disse o índio. Esfregando as mãos na lâmpada.
                    <br/>
                    <br/>
                        De repente, a lâmpada começou a soltar estrelinhas que se dirigiram para o céu fazendo a chuva parar. Todos os animais da floresta ficaram agradecidos à lâmpada, que em um passe de mágica, desapareceu. O índio e o Jabuti salvaram os animais de uma tragédia e ficaram conhecidos como os salvadores da floresta. O jabuti por ter encontrado a lâmpada mágica e o índio por ter feito ela funcionar parando com a chuva. A floresta seguiu harmoniosa para bem da natureza.                        
                    <br/>
                    <br/>
                    Fonte: <a className='Fonte' href="https://www.artesanatototal.com/historias-infantil-para-dormir-literatura-infantil-curtas-disney-evangelicas/">www.artesanatototal.com</a>
                        
                    </p>
                </div>
                <div>
                    <br/>
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
                        <br/>1 -  Qual personagem do conto riu diante da forte inundação da floreta? <br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha" value="A – Jabuti"/> A – Jabuti 
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha" value="B – Hiena"/> B – Hiena
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha" value="C – Leão"/> C – Leão
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha" value="D – Indiozinho"/> D – Indiozinho
                    </ol>
                </div>
                <div>
                    <p style={just}>
                        <br/>2 -  A lâmpada mágica fez a chuva parar com qual feitiço?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha2" value="A – Fez as nuvens irem embora."/> A – Fez as nuvens irem embora.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha2" value="B – Fez o sol ficou mais forte."/> B – Fez o sol ficou mais forte.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha2" value="C – Soltou estrelinhas que se dirigiram para o céu."/> C – Soltou estrelinhas que se dirigiram para o céu.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha2" value="D – Soltou gases na atmosfera."/> D – Soltou gases na atmosfera.
                    </ol>
                </div> 
                <div>
                    <p style={just}>
                        <br/>3 -  Por qual motivo o jabuti e o indiozinho se tornaram os salvadores da floreta?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha3" value="A – Jabuti por ter encontrado a lâmpada mágica e o índio por ter feito ela funcionar parando com a chuva."/> A – Jabuti por ter encontrado a lâmpada mágica e o índio por ter feito ela funcionar parando com a chuva.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha3" value="B – Índio por ter encontrado a lâmpada mágica e o jabuti por ter feito ela funcionar parando com a chuva."/> B – Índio por ter encontrado a lâmpada mágica e o jabuti por ter feito ela funcionar parando com a chuva.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha3" value="C – Hiena por ter encontrado a lâmpada mágica e o índio por ter feito ela funcionar parando com a chuva."/> C – Hiena por ter encontrado a lâmpada mágica e o índio por ter feito ela funcionar parando com a chuva.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha3" value="D – Jabuti por ter encontrado a lâmpada mágica e a hiena por ter feito ela funcionar parando com a chuva."/> D – Jabuti por ter encontrado a lâmpada mágica e a hiena por ter feito ela funcionar parando com a chuva.
                    </ol>
                </div>
                <section className='flexivel' >
                    <Link className="btn-jogo color-btn1" id="botao" type="submit" to='/SextoAno'>VOLTAR</Link>
                    <Link className="btn-jogo color-btn2" id="botao" type='submit' to='/Olimpiadas'>PROXIMO</Link>
                </section>
            </div>
        </div>
    </div>
    )

};