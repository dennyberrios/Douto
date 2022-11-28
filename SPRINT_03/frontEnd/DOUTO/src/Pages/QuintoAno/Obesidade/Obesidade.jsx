import React from 'react'
import Obesidade from "./../../../assets/img/perfil/Obesidade.png";
import { Link } from "react-router-dom"; 
import "./Obesidade.css"

function Obes() {
    return (
        <div className="topo">
            <div className="container text-white">
                <div className="row justify-content-around">
                    <div className="img">
                        <img src={Obesidade} className="Obesidade" />
                    </div>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div className="col-md-auto">
                        <h2 style={{ textAlign: "center" }}>
                            Obesidade infantil pode dobrar os riscos de morte antes dos 55 anos, diz estudo
                        </h2>
                        <div>
                            <br />
                        </div>
                        <p style={{ textAlign: "justify" }}>A obesidade infantil mais do que dobra os riscos de morte antes dos 55 anos de idade, segundo estudo publicado no New England Journal of Medicine. Acompanhando, em longo prazo, quase 5 mil crianças nascidas entre 1945 e 1984, os pesquisadores notaram que um quarto dos voluntários que apresentavam maior índice de massa corporal (IMC) tinha duas vezes maior taxa de morte por causas naturais antes dos 55 anos do que o grupo de menor IMC. Entre essas causas, os especialistas consideraram doença hepática alcoólica, doença cardiovascular, infecções, câncer, diabetes e overdose de drogas.<br />
                            <br />
                            “O ponto principal é que a obesidade em crianças é um sério problema que precisa ser abordado seriamente”, ressaltou o pesquisador William C. Knowler, do Instituto Nacional de Diabetes e Doenças Digestivas e Renais. “O que este estudo particular mostra é que a obesidade causará o excesso de morte prematura”, completou o especialista.
                            <br />
                            <br />Além da influência direta da obesidade infantil nos riscos de morte prematura, a pesquisa indicou que a intolerância à glicose – fator de risco para o diabetes – e a pressão alta na infância também cumprem um papel neste sentido. As taxas de morte foram 73% maiores entre o grupo de maior intolerância à glicose e 1,5 vezes maior entre aqueles que apresentavam pressão alta.<br />
                            <br />Em nota para a imprensa, o pediatra Marc Jacobson, da Academia Americana de Pediatria, destaca que o novo estudo é oportuno e importante, visto que mais de um sexto das crianças americanas estão obesas. “Ele nos dá mais dados relevantes sobre os efeitos da obesidade adolescente em longo prazo”. E, seguindo as diretrizes da Academia, o especialista recomenda a medida do índice de massa corporal em todas as crianças, e uma abordagem no estilo de vida daquelas que se apresentam obesas.<br />
                            <br />Para a prevenção, segundo ele, os pais podem usar o chamado 5210 – cinco porções diárias de frutas e vegetais, duas horas ou menos de TV por dia, uma hora de exercícios, e nenhuma ou pouquíssimas bebidas açucaradas.<br />
                            <br />Fonte: <a className='Fonte' href=" https://www.nejm.org/"> www.nejm.org/</a><br />
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
                            <br />1 - O texto lido acima fala do risco da obesidade infantil relacionada ao risco de falecimento, isso se justifica por quê?<br />
                        </p>
                    </div>
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha" value="A – A quantidade de IMC de cada pessoa." /> A – A quantidade de IMC de cada pessoa.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="B – Relacionada à alimentação durante a infância." /> B – Relacionada à alimentação durante a infância.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha" value="C – O texto apresenta fatores de risco que aumentam essa possibilidade relacionado a fatores familiares." /> C – O texto apresenta fatores de risco que aumentam essa possibilidade relacionado a fatores familiares.
                            <br />
                        </ol>
                    </div>
                    <div>
                        <p style={{ textAlign: "justify" }}>
                            <br />2 - O texto foi produzido através de pesquisa ao longo dos anos e entrevistando-se autoridades da área. Qual a motivação gerou a publicação dessa pesquisa?<br />
                        </p>
                    </div >
                    <div>
                        <ol>
                            <input className='itemQuest' type="radio" name="escolha4" value="A – Alertar sobre o risco da obesidade das crianças." /> A – Alertar sobre o risco da obesidade das crianças.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha4" value="B – Evidenciar que a obesidade não possui correlação direta com o aumento da morte antes dos 55 anos." /> B – Evidenciar que a obesidade não possui correlação direta com o aumento da morte antes dos 55 anos.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha4" value="C – Alertar sobre os riscos da obesidade nas crianças e seus efeitos de longo prazo." /> C – Alertar sobre os riscos da obesidade nas crianças e seus efeitos de longo prazo.
                            <br />
                            <input className='itemQuest' type="radio" name="escolha4" value="D – Problemas pertinentes ao excesso de alimentos." /> D – Problemas pertinentes ao excesso de alimentos.
                        </ol>
                    </div>
                </div >
                <div>
                    <br />
                    <br />
                </div>
                <section className='flexivel'>
                    <Link className="btn-jogo color-btn1" id="botao" type="submit" to="/Lgbt">VOLTAR</Link>
                    <Link className="btn-jogo color-btn2" to="/Parabens">PROXIMO</Link>
                </section>
            </div >
        </div >
    )
}
export default Obes