import React from 'react';
import "./Ansiedade.css";
import Ansiedade from './../../../assets/img/perfil/ansiedade.png';
import { Link } from 'react-router-dom';

export default function Ind() {

    const centro = {
        textAlign: "center",
    }

    const just = {
        textAlign: "justify",
    }

    return (
        <section>
            <div className="topoAnsiedade">
                <div className="container text-white">
                    <div className="row justify-content-around">
                        <div className="img">
                            <img src={Ansiedade} className='ansiedade' />
                        </div>
                        <div>
                            <br />
                            <br />
                        </div>
                        <div className="col-md-auto">
                            <h2 style={centro}>
                                O sono no mundo moderno
                            </h2>
                            <div>
                                <br />
                            </div>
                            <p style={just}>Ansiedade, estresse e angústia são alguns dos sintomas ligados a noites mal dormidas. Cientistas demonstram que o contexto sociocultural, a tecnologia e o estilo de vida atuais contribuem significativamente para que ocorram distúrbios do sono, os quais prejudicam o desempenho mental, a segurança e a saúde das pessoas. Recentemente, um artigo da Nature and Science of Sleep (Natureza e Ciência do Sono, março de 2012) sobre “os impactos do estilo de vida e desenvolvimentos da tecnologia sobre o sono” trouxe uma revisão bastante interessante sobre os fatores ambientais e comportamentais que interferem no padrão de sono, duração e qualidade, além das consequências reportadas pela ciência nos últimos anos e possíveis tratamentos para as desordens do sono.<br />
                                <br />
                                Vários problemas são causados por escalas de serviço que alternam os turnos durante dia e noite, por exemplo. Turnos da noite acarretam menor tempo dormido durante o dia subsequente, sonolência que pode durar até vários dias após a noite de trabalho. A escala acaba tornando também o trabalhador propenso a dormir em serviço, principalmente durante as horas que antecedem a manhã. Quando o trabalhador tem seu turno durante o dia, não pode dormir até tarde, por conta de seu horário de entrada, e a isso segue um dia inteiro sem dormir. Juntos, sono reduzido e tempos longos sem dormir, têm implicado em problemas na segurança, produtividade, saúde e desempenho destes trabalhadores. Pesquisas mostram ainda que as escalas flexíveis de trabalho (como em horários noturnos, aos finais de semana ou aqueles em que o trabalhador é chamado por telefone, a qualquer momento do dia) acarretam em piores saúde mental, qualidade de sono e bem-estar pessoal que as escalas tradicionais.<br />
                                <br />
                                Em crianças, adolescentes e adultos, outro fator ambiental que tem contribuído para a ocorrência de distúrbios do sono é a exposição às mídias eletrônicas. A presença de dispositivos midiáticos (televisão ou computador) no quarto de crianças e adolescentes demonstrou que os mesmos vão dormir mais tarde e o tempo de sono fica reduzido. Estudos com adultos mostram que, para as mulheres, o tempo aumentado de navegação na internet, e o aumento das ligações telefônicas e mensagens SMS, para os homens, são fatores que aumentam os riscos de desenvolvimento dos distúrbios do sono. A exposição aos dispositivos eletrônicos tem mostrado também alterar a atenção, já que o brilho das telas também pode suprimir a liberação de melatonina, o que pode se acentuar pela presença de conteúdo excitante.<br />
                                <br />Processos fisiológicos e comportamentais, de estudo das ciências como a biologia e medicina, estão intimamente ligados com o sono. A liberação de hormônios, os ciclos de dormir/acordar e o desenvolvimento de atividades mentais (desempenho) oscilam naturalmente com o ciclo diário, e são controlados pelo “relógio biológico”, localizado no hipotálamo. Sob as condições normais, todos estes processos são controlados pelo ciclo ambiental (claro e escuro) e estão com ele sincronizados.<br />
                                <br />Tendo em vista estes aspectos do mundo moderno, as influências deles sobre o sono e, então, deste sobre a vida das pessoas, saúde, trabalho e bem-estar, é importante que as empresas atentem para os fatores que afetam a vida dos trabalhadores e até mesmo para o que eles alteram no cotidiano destas empresas, com relação ao sono (risco de acidentes, aumento dos gastos e diminuição do desempenho são alguns exemplos). Quem sabe permitir horários de descanso? Estudos mostraram que cochilos de 20 a 40 minutos são o suficiente para aumentar a atenção e desempenho, durante a noite.
                                <br />
                                <br />Finalmente, atingir a quantidade ideal de sono, em um ambiente escuro e quieto, evitar também o consumo de bebidas alcoólicas e cafeína, são condições essenciais para evitar a insônia e distúrbios do sono consequentes dela.<br />
                                <br />Texto de Renato Augusto Corrêa dos Santos, Jornal Biosferas, adaptado e utilizado para o projeto Douto para os alunos do 6º ano.<br />
                                <br />Fonte: <a className='Fonte' href="http://www1.rc.unesp.br/biosferas/Art0066.html">www1.rc.unesp.br</a> <br />
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
                                <br />1 – O texto lido é um texto de divulgação científica, isso se justifica por quê?<br />
                            </p>
                        </div>
                        <div>
                            <ol>
                                <input className='itemQuest' type="radio" name="escolha1" value="A – Apresentar um tema de interesse público à luz da ciência." /> A – Apresentar um tema de interesse público à luz da ciência.
                                <br />
                                <input className='itemQuest' type="radio" name="escolha1" value="B – Narrar um acontecimento científico para comprovar ao leitor a opinião." /> B – Narrar um acontecimento científico para comprovar ao leitor a opinião.
                                <br />
                                <input className='itemQuest' type="radio" name="escolha1" value="C – Mostrar os dados científicos do período sobre os efeitos do sono prolongado no Brasil." /> C – Mostrar os dados científicos do período sobre os efeitos do sono prolongado no Brasil.
                                <br />
                                <input className='itemQuest' type="radio" name="escolha1" value="D – Relatar fatos atuais de interesse e importância para a comunidade." /> D – Relatar fatos atuais de interesse e importância para a comunidade.
                            </ol>
                        </div>
                        <div>
                            <p style={just}>
                                <br />2 – O texto foi produzido mediante pesquisas, aprofundamentos teóricos e resultados de investigações sobre um tema. Qual o fato que gerou essas pesquisas e posteriormente a publicação desse texto?<br />
                            </p>
                        </div>
                        <div>
                            <ol>
                                <input className='itemQuest' type="radio" name="escolha2" value="A – O crescente uso da tecnologia pelos brasileiros." /> A – O crescente uso da tecnologia pelos brasileiros.
                                <br />
                                <input className='itemQuest' type="radio" name="escolha2" value="B – O crescente dos problemas socioculturais." /> B – O crescente dos problemas socioculturais.
                                <br />
                                <input className='itemQuest' type="radio" name="escolha2" value="C – Os transtornos relacionados à falta de um bom sono." /> C – Os transtornos relacionados à falta de um bom sono.
                                <br />
                                <input className='itemQuest' type="radio" name="escolha2" value="D – Problemas pertinentes ao excesso de trabalho." /> D – Problemas pertinentes ao excesso de trabalho.
                            </ol>
                        </div>
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <section className='flexivel'>
                        <Link className="btn-jogo color-btn1" id="botao" type="submit" to='/Olimpiadas'>VOLTAR</Link>
                        <Link className="btn-jogo color-btn2" id="botao" type="submit" to='/Entrevista'>PROXIMO</Link>
                    </section>
                </div>
            </div>
        </section>
    )

};