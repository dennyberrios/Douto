import Sobrenoscss from "./Sobrenos.module.css";

export default function Sobrenos() {
    return ( 
        <main className={Sobrenoscss.mainSobrenos}>
        <section className={Sobrenoscss.sc1}>
            <div className={Sobrenoscss.titleSobre}>
                <h1 className={Sobrenoscss.sobre}>SOBRE</h1>
                <h1 className={Sobrenoscss.nos}>NÓS</h1>
            </div>
            <div className={Sobrenoscss.texto}>
                <p>Somos jovens programadores de conteúdo para educação infantil de crianças de 10 a 11 anos.
                    Nós criamos o Douto, uma plataforma com histórias e jogos com recursos interativos (fáceis e
                    atrativos) para potencializar o desenvolvimento da leitura. Nós fazemos isso, pois acreditamos que
                    a educação possibilita que essas crianças, no futuro, tenham melhores oportunidades no mercado
                    de trabalho e nas relações sociais. A educação transforma o mundo.</p>
            </div>
        </section>
        <section className={Sobrenoscss.sc2}>
            <div className={Sobrenoscss.perfils}>
                <h1>EQUIPE</h1>
                <div className={Sobrenoscss.membros}>
                    <div>
                        <a href="https://www.linkedin.com/in/tarcioazevedo/"><div className={`${Sobrenoscss.item} ${Sobrenoscss.foto1}`}></div></a>
                        <h2>Tarcio Azevedo</h2>
                        <p>Pesquisa <br/> Desenvolvimento</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/jhenyffer-silva-574297182/"><div className={`${Sobrenoscss.item} ${Sobrenoscss.foto2}`}></div></a>
                        <h2>Jhenyffer</h2>
                        <p>Pesquisa <br/> Desenvolvimento</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/ewerton-rubi/"><div className={`${Sobrenoscss.item} ${Sobrenoscss.foto3}`}></div></a>
                        <h2>Ewerton Rubí</h2>
                        <p>Back-End</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/renato-wessner/"><div className={`${Sobrenoscss.item} ${Sobrenoscss.foto4}`}></div></a>
                        <h2>Renato</h2>
                        <p>Back-End</p>
                    </div>
                    <div>
                         <a href="https://www.linkedin.com/in/eduardo-junior-71049236/"><div className={`${Sobrenoscss.item} ${Sobrenoscss.foto5}`}></div></a>
                         <h2>Eduador Jr</h2>
                         <p>Design</p>
                     </div>
                    <div>
                        <a href="https://www.linkedin.com/in/danny-berrios/"><div className={`${Sobrenoscss.item} ${Sobrenoscss.foto6}`}> </div></a>
                        <h2>Danny Berrios</h2>
                        <p>Front-End</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
     );
}