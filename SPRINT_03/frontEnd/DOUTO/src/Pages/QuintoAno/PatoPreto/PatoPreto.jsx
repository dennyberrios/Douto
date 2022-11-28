import Patinho from './../../../assets/img/perfil/patinhopreto.png'
import { Link } from "react-router-dom";
import './PatoPreto.css'

function PatoPreto() {
  return (
    <div className="topo">       
        <div className="container text-white">
            <div className="row justify-content-around">
                <div className="img">
                    <img src={Patinho} className="PatinhoPreto"/>
                </div>
                <div>
                    <br/>
                    <br/>
                </div>
                <div className="col-md-auto">
                    <h2 style={{textAlign: "center"}}>
                        Patinho Preto
                    </h2>
                    <div>
                        <br/>
                    </div>
                    <p style={{textAlign: "justify"}}>No interior da bela cidade de Passa Claro existia uma fazenda onde moram diversas famílias de patos. Certo dia uma mamãe pata colocou seus lindos ovos e os chocou por vários dias. Depois de 30 dias nasceram lindos patinhos brancos, mas um nasceu preto.<br/>
                    <br/>
                    Mamãe pata foi passear com seus filhotes na fazenda e outros patos começaram a comentar:
                    <br/>                    
                    <br/>- Que patinho mais estranho. Que patinho mais feio.<br/>
                    <br/>Diante dos comentários o patinho preto se isolou da sua família. Sempre andava sozinho e infeliz. Certo dia resolveu ir embora da fazenda onde vivia com os outros patos. Passou frio no inverno escondido em um monte de folhas e quando chegou a primavera encontrou um lindo lago azul onde passeavam uma família de cisnes negros.<br/>
                    <br/>Assistindo aquela linda cena no lago, o patinho preto exclamou:<br/>
                    <br/>- Nossa como vocês são lindos e belos.<br/>
                    <br/>Um dos cisnes negros ouviu e falou:<br/>
                    <br/>- Entra no lago. Venha passear conosco!<br/>
                    <br/>Ao entrar no lago, o patinho preto viu seu reflexo na água e toda a sua tristeza e solidão foi embora. Ele percebeu que não era um pato, mas que também um lindo cisne negro igual aos do lago azul. O patinho preto ficou muito alegre e sorridente com a novidade. Ele foi acolhido pela nova família onde passou a viver feliz para sempre. 
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
                    <p style={{textAlign: "justify"}}>
                        <br/>1 - Por que o patinho preto resolveu ir embora da fazenda?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha" value="A – Não gostava da família em que nasceu."/> A – Não gostava da família em que nasceu.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha" value="B – Foi rejeitado pela família e por outros patos."/> B – Foi rejeitado pela família e por outros patos.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha" value="C – Queria passear no lago azul."/> C – Queria passear no lago azul.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha" value="D – Queria ser um cisne negro."/> D – Queria ser um cisne negro.
                    </ol>
                </div>
                <div>
                    <p style={{textAlign: "justify"}}>
                        <br/>2 - Que história é apresentada no Patinho Preto?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha1" value="A – A gestação de 30 dias da mamãe pata."/> A – A gestação de 30 dias da mamãe pata.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha1" value="B – O passeio dos cisnes negros no lago azul."/> B – O passeio dos cisnes negros no lago azul.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha1" value="C – A harmonia de uma família de patos na fazenda da cidade de Passa Claro."/> C – A harmonia de uma família de patos na fazenda da cidade de Passa Claro.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha1" value="D – A rejeição sofrida por um pato que nasceu com a cor diferente dos demais."/> D – A rejeição sofrida por um pato que nasceu com a cor diferente dos demais.
                    </ol>
                </div>
                <div>
                    <p style={{textAlign: "justify"}}>
                        <br/>3 – Qual lição moral podemos tirar do conto do Patinho Preto?<br/>
                    </p>
                </div>
                <div>    
                    <ol>
                    <input className='itemQuest' type="radio" name="escolha7" value="A – Devemos rejeitar e excluir quem é diferente de nós."/> A – Devemos rejeitar e excluir quem é diferente de nós.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha7" value="B – Aceitar a diferença somente quando for de alguém que eu gosto ou admiro."/> B – Aceitar a diferença somente quando for de alguém que eu gosto ou admiro.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha7" value="C – Devemos aceitar aquilo que é diferente e enxergar a beleza no que cada ser tem de especial.
                    "/> C – Devemos aceitar aquilo que é diferente e enxergar a beleza no que cada ser tem de especial.
                    <br/>
                    <input className='itemQuest' type="radio" name="escolha7" value="D – A beleza é fundamental para podermos viver em harmonia na sociedade."/> D – A beleza é fundamental para podermos viver em harmonia na sociedade.
                    </ol>
                </div>
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <section className='flexivel'>
                <Link className="btn-jogo color-btn1" id="botao" type="submit" to="/QuintoANo">VOLTAR</Link>
                <Link className="btn-jogo color-btn2" id="botao" type="submit" to="/Cardapio">PROXIMO</Link>
            </section>
        </div>
    </div>
  )
}

export default PatoPreto