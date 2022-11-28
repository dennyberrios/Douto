import ImgLgbt from "./../../../assets/img/perfil/lgbt.png";
import { Link } from "react-router-dom";
import "./Lgbt.css"

function Lgbt() {
    return (
        <div className="topo">
            <div className="container text-white">
                <div className="row justify-content-around">
                    <div className="img">
                        <img src={ImgLgbt} className='Lgbt'/>
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div className="col-md-auto">
                        <h2 style={{ textAlign: "center" }}>
                            Escola de aluno que sofreu críticas ao propor tema LGBT terá projeto para discutir diversidade no contexto educacional.
                        </h2>
                        <div>
                            <br />
                        </div>
                        <p style={{ textAlign: "justify" }}>O Ministério Público (MP) de Campinas (SP) decidiu montar um grupo para criar um projeto que vai abordar, na Escola Estadual Aníbal de Freitas, a diversidade no contexto educacional. A proposta da Promotoria de Infância e Juventude é reunir a comunidade escolar e outros órgãos da sociedade para debater o tema "com o devido planejamento".<br />
                            <br />
                            A proposta do aluno foi feita em um grupo de WhatsApp da escola e amplamente rechaçada por parte dos membros. Depois que o caso foi denunciado, a Diretoria de Ensino, a Polícia Civil e o Ministério Público passaram a apurar. Houve protesto e a ex-diretora e uma professora mediadora acabaram afastadas. Segundo o promotor, a deliberação ocorreu em uma reunião entre o MP e a Ordem dos Advogados do Brasil (OAB). Agora, um novo encontro, programado para sexta-feira (26), vai incluir a comunidade escolar.
                            <br />
                            <br />A proposta é que o grupo para debater o projeto seja composto por representantes da Escola (direção, professores, funcionários, pais e alunos), das Diretorias de Ensino, do MP, da OAB, e de outros órgãos que trabalham com a matéria diversidade.<br />
                            <br />A Secretaria Estadual da Educação informou, em nota, que deve participar da reunião de sexta-feira "para pensar um projeto sobre diversidade no âmbito educacional". "O encontro deve ser realizado de maneira virtual e contará com diversos representantes da comunidade escolar; alunos, pais, professores, profissionais da direção e demais funcionários. Além disso, representantes das Diretorias de Ensino de Campinas Leste e Oeste também devem estar presentes".<br />
                            <br />Fonte: <a className='Fonte' href=" https://g1.globo.com/sp/campinas-regiao/noticia/2021/06/23/escola-de-aluno-que-sofreu-criticas-ao-propor-tema-lgbt-tera-projeto-para-discutir-diversidade-no-contexto-educacional.ghtml">www.g1.globo.com</a>
                            <br />
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
                        <p style={{ textAlign: "justify" }}>
                            <br />1 – Por qual motivo o Ministério Público de Campinas decidiu apurar a conduta da diretoria da Escola Estadual Aníbal de Freitas?
                            <br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha" value="A – Aluno sofreu críticas da diretoria ao propor tema LGBT." /> A – Aluno sofreu críticas da diretoria ao propor tema LGBT.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="B – Aluno ganhou um prêmio por tema elogiado pela escola." /> B – Aluno ganhou um prêmio por tema elogiado pela escola.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="C – Aluno sofreu bullying dos colegas de classNamee." /> C – Aluno sofreu bullying dos colegas de classNamee.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="D – Aluno não teve projeto aprovado na feira de ciências." /> D – Aluno não teve projeto aprovado na feira de ciências.
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />2 – Diante da repercussão do caso, membros da escola foram afastados de suas funções. Foram eles:<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha2" value="A – A ex-diretora e a coordenadora." /> A – A ex-diretora e a coordenadora.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="B – A ex-diretora e uma professora mediadora. " /> B – A ex-diretora e uma professora mediadora.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="C – Aluno e professora mediadora." /> C – Aluno e professora mediadora.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha2" value="D – Coordenadora e professora mediadora." /> D – Coordenadora e professora mediadora.
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />3 – Qual a proposta da Secretaria Estadual de Educação para a solução do caso?<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha3" value="A – Reunir a comunidade escolar e outros órgãos da sociedade para debater o tema com o devido planejamento." /> A – Reunir a comunidade escolar e outros órgãos da sociedade para debater o tema com o devido planejamento.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="B – Apurar o caso junto com a Diretoria de Ensino, a Polícia Civil e o Ministério Público." /> B – Apurar o caso junto com a Diretoria de Ensino, a Polícia Civil e o Ministério Público.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="C – Montar um grupo para criar um projeto que vai abordar, na Escola Estadual Aníbal de Freitas, a diversidade no contexto educacional.
"/> C – Montar um grupo para criar um projeto que vai abordar, na Escola Estadual Aníbal de Freitas, a diversidade no contexto educacional.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha3" value="D – Um projeto sobre diversidade no âmbito educacional com participação de diversos representantes da comunidade escolar." /> D – Um projeto sobre diversidade no âmbito educacional com participação de diversos representantes da comunidade escolar.
                        </ol>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                </div>
                <section className="flexivel">
                    <Link className="btn-jogo color-btn1" id="botao" type="submit" to="/EducaMais">VOLTAR</Link>
                    <Link className="btn-jogo color-btn2" id="botao" type="submit" to="/Obesidade">PROXIMO</Link>
                </section>
            </div>
        </div>
    )
}
export default Lgbt