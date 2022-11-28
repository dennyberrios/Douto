import'./footer.css'
import { Link } from 'react-router-dom'
import Logoico from "./../../assets/ico/logoico.png";
import Twiter from "./../../assets/svg/twiter.svg";
import Gmail from "./../../assets/svg/gmail.svg";
import Instagram from "./../../assets/svg/instagram.svg";
import Facebook from "./../../assets/svg/facebook.svg";

const Footer = () => {
    return ( 
        <footer>
        <div className="red-sociais">
            <div>
                <p>Conecte-se conosco nas redes sociais:</p>
            </div>
            <div>
                <a href="#"><img width="25px" src={Twiter} alt="twiter"/></a>
                <a href="#"><img width="25px" src={Gmail} alt="gmail"/></a>
                <a href="#"><img width="25" src={Instagram} alt="linkedin"/></a>
                <a href="#"><img width="25" src={Facebook} alt="github"/></a>
            </div>
        </div>
        <hr className="hrFooter"/>
        <div className="box-table">
            <div className="tab">
                <table className="tableFooter">
                    <tr className="trFooter">
                        <th>
                            <h3><img width="50" src={Logoico} alt="Logo"/> Douto</h3>
                        </th>
                    </tr>
                    <tr className="trFooter">
                        <td className="apresentRodape">Temos o dever de auxiliar a  evolução da leitura dos jovens tupiniquins. Pra nós é um prazer!</td>
                    </tr>
                </table>
            </div>
            <div className="tab">
                <table className="tableFooter">
                    <tr className="trFooter">
                        <th><a className="rodFlex" href="">SERVIÇOS</a></th>
                    </tr>
                    <tr className="trFooter">
                        <td><Link to={"/Precisamosdevoces"}>Precisamos de vocês</Link></td>
                        <td><Link to={"/Doacoes"}>Doações</Link></td>
                    </tr>
                </table>
            </div>
            <div className="tab">
                <table className="tableFooter">
                    <tr className="trFooter">
                        <th><a className="rodFlex" href="">LINKS ÚTEIS</a></th>
                    </tr>
                    <tr className="trFooter">
                        <td><Link to={"/Contato"}>Contato</Link></td>
                        <td><Link to={"/Sobrenos"}>Sobre nós</Link></td>
                    </tr>
                </table>
            </div>
            <div className="tab">
                <table className="tableFooter">
                    <tr className="trFooter">
                        <th><a className="rodFlex">CONTATO</a></th>
                    </tr>
                    <tr className="trFooter">
                        <td><a className="rodFlex" href="#"> Brasil, Br 0000, BR</a></td>
                        <td><a className="rodFlex" href="#"> info@example.com</a></td>
                        <td><a className="rodFlex" href="#"> + 55 71 0000-0000</a></td>
                        <td><a className="rodFlex" href="#"> + 55 71 0000-0000</a></td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="tab">
            <p>&copy; 2022 Copyright: <a href="#navega">douto.com</a></p>

        </div>
    </footer>
     );
}
 
export default Footer;