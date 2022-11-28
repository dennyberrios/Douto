import React from 'react';
import './Precisamosdevoces.css';
import PrecisamosDeVoces from './../../assets/img/precisamos-de-voces/one.png';
import LogoMsgOne from './../../assets/img/precisamos-de-voces/for.png';
import LogoMsgTwo from './../../assets/img/precisamos-de-voces/five.png';
import LogoMsgThree from './../../assets/img/precisamos-de-voces/three.png';
import LogoMsgFour from './../../assets/img/precisamos-de-voces/two.png';




export default function Precisamosdevoces() {

    const Style = {
        paddingBottom: "100px"
    }
    return (
        <main>
            <section className="section13" style={Style}>
                <div class="imgPrecisamosDeVoces">
                    <img class="imgPrecisamos" src={PrecisamosDeVoces}
                        alt="Precisamos de voces" />
                    <img class="imgLogoApresentacao" src={LogoMsgOne}
                        alt="logo com um balão de texto" />
                </div>
                <div class="incentive">
                    <img class="imgIncetive" src={LogoMsgTwo} alt="" />
                </div>
            </section>
            <section class="section2">

                <div>
                    <img class="imgCachorro" src={LogoMsgThree} alt="Cachorro" />
                </div>
                <div class="textoInformativo">
                    <h2>Lá seu filho terá acesso a uma plataforma educativa repleta de jogos e histórias que irão melhorar a
                        capacidade de leitura e a compreensão de textos. Acompanhe seu filho durante o acesso para que seja
                        mais fácil utilizar todas as ferramentas disponíveis.</h2>
                </div>
            </section>
            <section class="section13">
                <div class="imgPrecisamosDeVoces">
                    <img class="imgLogoApresentacao2" src={LogoMsgFour}
                        alt="logo com um balão de texto" />
                </div>
            </section>
        </main>
    )
}