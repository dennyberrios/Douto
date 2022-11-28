import React from 'react'
import Contatocss from "./Contato.module.css"

export default function Contato() {
  return (
    <div>
        <main className={Contatocss.mainContato}>
            <form className={Contatocss.formContato}>
                <div class={Contatocss.title}>
                    <div className={Contatocss.divTitulo}><h1>Contate-nos</h1></div>
                    <div className={Contatocss.divTitulo}><p>Quer contar algo para o Douto? Aqui você pode solicitar suporte, recursos, relatar problemas ou
                        fazer aquele elogio bacana. Conte comigo!</p></div>
                </div>
                <div className={Contatocss.box}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            placeholder="Nome" required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="E-mail" required />
                    </div>
                    <div className={Contatocss.dropdownFeed}>
                        <label>Ajude com seu:</label>
                        <div>
                            <select className="form-select" aria-label="Default select example" required>
                                <option selected>--selecione uma opção</option>
                                <option value="1">Feedback</option>
                                <option value="2">Reportar bug</option>
                                <option value="3">Suporte</option>
                                <option value="4">Solicitar Recursos</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="mensagem"></textarea>
                    </div>
                    <div className="col-12">
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" for="invalidCheck">
                                Envie-me uma cópia desta mensagem.
                            </label>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                    </div>
                    <div className={Contatocss.bt}>
                        <button type="submit" className="btn" id={Contatocss.botao}>Enviar</button>
                    </div>
                </div>
            </form>
        </main>
    </div>
  )
}