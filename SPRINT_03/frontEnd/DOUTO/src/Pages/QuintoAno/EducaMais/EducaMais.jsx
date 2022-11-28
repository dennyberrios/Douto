import ImgEducaMais from './../../../assets/img/perfil/educamaisbrasil.png';
import { Link } from "react-router-dom";
import './EducaMais.css'


function EducaMais() {
    return (
        <div className="topo">
            <div className="container text-white">
                <div className="row justify-content-around">
                    <div className="img">
                        <img src={ImgEducaMais} className='EducaMais' />
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div className="col-md-auto">
                        <h2 style={{ textAlign: "center" }}>
                            Educa Mais Brasil
                        </h2>
                        <div>
                            <br />
                        </div>
                        <p style={{ textAlign: "justify" }}>Educa Mais Brasil é um programa de inclusão educacional brasileiro, pioneiro no oferecimento de bolsas de estudo para diversas modalidades de ensino. Trata-se de uma iniciativa privada, que atua há mais de 15 anos em parceria com as melhores instituições de ensino particulares de todo o Brasil, para promover o acesso de estudantes à educação de qualidade. Se você está se perguntando como conseguir uma bolsa de estudo, conheça o Educa Mais Brasil!<br />
                            <br />
                            Ao contrário do que muitos pensam, o Educa Mais Brasil não é uma entidade governamental, e sim uma empresa privada. Toda a sua atuação tem como base a parceria com escolas, universidades e cursos de todo o país, e é a partir dela que o programa oferece bolsas de estudo para a população em geral.
                            <br />
                            <br />Graduação, pós-graduação, educação básica, cursos técnicos e idiomas são as modalidades educacionais que possuem bolsas de estudo no Educa Mais Brasil. Temos bolsas de estudo de até 70% em mais de 30.000 Escolas e Faculdades em todo Brasil.<br />
                            <br />Fonte: <a className='Fonte' href="https://www.educamaisbrasil.com.br/">educamaisbrasil</a><br />
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
                        <p style={{ textAlign: "justify" }}>
                            <br />1 – O que é o programa Educa Mais Brasil?<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha" value="A – É um programa de bolsas para inclusão de jovens no esporte." /> A – É um programa de bolsas para inclusão de jovens no esporte.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="B – É um programa de financiamento estudantil para estudantes de baixa renda." /> B – É um programa de financiamento estudantil para estudantes de baixa renda.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="C – É um programa de bolsas de estudo para intercâmbio em outros países." /> C – É um programa de bolsas de estudo para intercâmbio em outros países.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="D – É um programa de oferecimento de bolsas de estudo para diversas modalidades de ensino." /> D – É um programa de oferecimento de bolsas de estudo para diversas modalidades de ensino.
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />2 – O Educa Mais Brasil oferece bolsas de estudos que atuam em parceria com quais instituições?<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha2" value="A – Com as melhores instituições de ensino público de todo o Brasil." /> A – Com as melhores instituições de ensino público de todo o Brasil.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="B – Com as melhores instituições de ensino particular de todo o Brasil." /> B – Com as melhores instituições de ensino particular de todo o Brasil.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="C – Com as melhores instituições financeiras de todo o Brasil." /> C – Com as melhores instituições financeiras de todo o Brasil.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="D – Com as melhores instituições de saúde particular de todo o Brasil." /> D – Com as melhores instituições de saúde particular de todo o Brasil.
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />3 – O Educa Mais Brasil é:<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha3" value="A – Entidade governamental." /> A – Entidade governamental.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="B – Entidade filantrópica." /> B – Entidade filantrópica.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="C – Empresa privada." /> C – Empresa privada.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="D – Empresa público-privada." /> D – Empresa público-privada.
                        </ol>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                </div>
                <section className='flexivel'>
                    <Link className="btn-jogo color-btn1" id="botao" type="submit" to="/Cardapio">VOLTAR</Link>
                    <Link className="btn-jogo color-btn2" id="botao" type="submit" to="/Lgbt">PROXIMO</Link>
                </section>
            </div>
        </div>
    )
}

export default EducaMais