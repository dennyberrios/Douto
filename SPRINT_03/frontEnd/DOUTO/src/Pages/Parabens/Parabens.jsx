import React from 'react';
import { Link } from 'react-router-dom';
import Img from './../../assets/img/Jogos/Educação.png';
import './Parabens.css';

function Parabens() {
  return (
    <section className="topo">       
        <div className="conteudoParabens text-white">
            <div className="AlinhaParabens">
                <div className="col-md-auto">
                    <img src={Img} className="imgParabens"/>
                </div>
                <div>
                    <br/>
                    <br/>
                </div>
                <div id="botao">
                    <Link className="btnParabens" type="submit" to='/'>VOLTAR A HOME</Link>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Parabens