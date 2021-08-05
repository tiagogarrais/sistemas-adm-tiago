import axios from 'axios'
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";

export default function Brainstorming() {
    const [session] = useSession()
    const [ideias, setIdeias] = useState([])
    const [ideia, setIdeia] = useState('')
    const [localAplicacao, setLocalAplicacao] = useState('')
    const [grauPrioridade, setGrauPrioridade] = useState('')
    const [endereco, setEndereco] = useState('')

    async function buscarIdeias() {
        const response = await fetch('/api/brainstorming/buscarIdeias')
        const data = await response.json()
        setIdeias(data)
    }

    function handleEnviarFormulario(event) {
        event.preventDefault()

        let regex = /ufca\.edu.br$/
        let testeEmailUfca = regex.test(session.user.email)
        if (testeEmailUfca === false) {
            document.getElementById('aviso').innerHTML = 'Você precisa de um e-mail @ufca.edu.br para enviar dados.'
            return
        }

        document.getElementById('aviso').innerHTML = `Aguarde alguns instantes, estamos enviado suas informações.`
        axios.post(
            '/api/brainstorming/enviarIdeia',
            {
                'ideia': ideia,
                'localAplicacao': localAplicacao,
                'responsavelEnvio': session.user.email ? session.user.email : '',
                'dataInformacao': Date()
            })
            .then(function (response) {
                document.getElementById('aviso').innerHTML = `Recebemos suas informações em ${Date()}. Obrigado!`
                setIdeia('')
                buscarIdeias()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    if (session) {
        return (
            <div>
                <h2>Brainstorming IFE - Tema infraestrutura física <br/>(reformas, construções e melhorias)</h2>
                <h3>Ideias já recebidas</h3>
                <ol>
                    {ideias.map(ideiasRecebidas => (
                        <>
                            <p key={ideiasRecebidas.id}>{`${ideiasRecebidas.localAplicacao} ➜ ${ideiasRecebidas.ideia}`} </p>
                            <hr />
                        </>
                    ))}
                </ol>

                <form
                    className='form'
                    onSubmit={handleEnviarFormulario}
                >
                    <h2>Enviar ideia</h2>

                    <label>
                        <textarea
                            type="textarea"
                            rows="6"
                            cols="55"
                            onChange={event => setIdeia(event.target.value)}
                            value={ideia}
                        />
                    </label>

                    <label>Em qual setor essa ideia deve ser aplicada?<br />
                        <select
                            onChange={event => setLocalAplicacao(event.target.value)}
                            value={localAplicacao}
                        >
                            <option>Selecione uma opção</option>
                            <option>Licenciatura Interdisciplinar em Ciências Naturais e Matemática</option>
                            <option>Licenciatura em Biologia</option>
                            <option>Licenciatura em Física</option>
                            <option>Licenciatura em Matemática</option>
                            <option>Licenciatura em Pedagogia</option>
                            <option>Ambientes Administrativos</option>
                            <option>Áreas comuns</option>

                        </select>
                    </label>

                    <label>Em qual endereço essa ideia deve ser implementada?<br />
                        <select
                            onChange={event => setEndereco(event.target.value)}
                            value={endereco}
                        >
                            <option>Selecione uma opção</option>
                            <option>Campus Brejo Santo, bairro Centro</option>
                            <option>Terreno em processo de cessão, bairro Renê Lucena</option>
                        </select>
                    </label>

                    <label>Qual o grau de prioridade a UFCA deveria dar para implementar essa ideia?<br />
                        <select
                            onChange={event => setGrauPrioridade(event.target.value)}
                            value={grauPrioridade}
                        >
                            <option>Selecione uma opção</option>
                            <option>Prioridade 1 - Urgente</option>
                            <option>Prioridade 2 - Alta</option>
                            <option>Prioridade 3 - Média</option>
                            <option>Prioridade 4 - Baixa</option>
                        </select>
                    </label>

                    <p id='aviso'></p>
                    <button type="submit" onClickCapture={buscarIdeias}>Enviar</button>
                </form>

            </div>
        )
    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>
    )
}