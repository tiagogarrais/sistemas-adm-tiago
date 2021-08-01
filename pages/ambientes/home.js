import axios from 'axios'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

export default function Ambientes() {
    const [session] = useSession()

    const [responsavelEnvio, setResponsavelEnvio] = useState('')
    const [numeroIdentificacao, setNumeroIdentificacao] = useState('')
    const [nomeAmbiente, setNomeAmbiente] = useState('')
    const [tipoTeto, setTipoTeto] = useState('')
    const [larguraLesteOeste, setLarguraLesteOeste] = useState('')
    const [comprimento, setComprimento] = useState('')
    const [altura, setAltura] = useState('')
    const [observacao, setObservacao] = useState('')
    const [servidorResponsavel, setServidorResponsavel] = useState('')
    const [serventeLimpeza, setServenteLimpeza] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [produtividadeRecomendada, setProdutividadeRecomendada] = useState('')
    const [tipo, setTipo] = useState('')

    function buscarAmbientesConferidos() {
        axios.get('../../api/ambientes/buscarAmbientesConferidos')
            .then(function (response) {
                exibirAmbientesConferidos(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }

    function buscarAmbientesNaoConferidos() {
        axios.get('../../api/ambientes/buscarAmbientesNaoConferidos')
            .then(function (response) {
                exibirAmbientesNaoConferidos(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }

    function exibirAmbientesConferidos(ambientesConferidos) {
        let output = ''
        output += '<table>'
        output += '<tr>'
        output += '<th>Número</th>'
        output += '<th>Nome do Ambiente</th>'
        output += '<th>Servidor Responsável</th>'
        output += '<th>Responsável pelo envio</th>'
        output += '<th>Atualizar</th>'
        output += '</tr>'


        for (let ambientesConferido of ambientesConferidos) {

            output += '<tr>'
            output += `<td>${ambientesConferido.numeroIdentificacao}</td>`
            output += `<td>${ambientesConferido.nomeAmbiente}</td>`
            output += `<td>${ambientesConferido.servidorResponsavel}</td>`
            output += `<td>${ambientesConferido.responsavelEnvio}</td>`
            output += "<td><button>Atualizar</button></td>"
            output += '</tr>'
        }

        output += '</table>'

        document.getElementById('tabela-com-dados').innerHTML = output
    }

    function exibirAmbientesNaoConferidos(ambientesNaoConferidos) {
        let output = '<h3>Ambientes aguardando conferência pela nossa equipe</h3>'
        output += '<table>'
        output += '<tr>'
        output += '<th>Número</th>'
        output += '<th>Nome do Ambiente</th>'
        output += '<th>Servidor Responsável</th>'
        output += '<th>Responsável pelo envio</th>'
        output += '<th>Atualizar</th>'
        output += '</tr>'


        for (let ambienteNaoConferido of ambientesNaoConferidos) {

            output += '<tr>'
            output += `<td>${ambienteNaoConferido.numeroIdentificacao}</td>`
            output += `<td>${ambienteNaoConferido.nomeAmbiente}</td>`
            output += `<td>${ambienteNaoConferido.servidorResponsavel}</td>`
            output += `<td>${ambienteNaoConferido.responsavelEnvio}</td>`
            output += "<td><button>Atualizar</button></td>"
            output += '</tr>'
        }

        output += '</table>'

        document.getElementById('tabela-com-dados-adicionais').innerHTML = output
    }

    function handleCadastrarAmbiente(event) {
        event.preventDefault()
        let regex = /@ufca\.edu.br$/
        let testeEmailUfca = regex.test(session.user.email)
        if (testeEmailUfca === true) {
            axios.post(
                '/api/ambientes/enviarAmbiente',
                {
                    'numeroIdentificacao': numeroIdentificacao,
                    'nomeAmbiente': nomeAmbiente,
                    'tipoTeto': tipoTeto,
                    'larguraLesteOeste': larguraLesteOeste,
                    'comprimento': comprimento,
                    'altura': altura,
                    'observacao': observacao,
                    'servidorResponsavel': servidorResponsavel,
                    'serventeLimpeza': serventeLimpeza,
                    'classificacao': classificacao,
                    'produtividadeRecomendada': produtividadeRecomendada,
                    'tipo': tipo,
                    'responsavelEnvio': session.user.email,
                    'dataInformacao': Date()
                })
                .then(function (response) {
                    setNumeroIdentificacao('')
                    setNomeAmbiente('')
                    setTipoTeto('')
                    setLarguraLesteOeste('')
                    setComprimento('')
                    setAltura('')
                    setObservacao('')
                    setServidorResponsavel('')
                    setServenteLimpeza('')
                    setClassificacao('')
                    setProdutividadeRecomendada('')
                    setTipo('')
                    setResponsavelEnvio('')
                    window.alert('Recebemos suas informações. Obrigado!')
                })
                .catch(function (error) {
                    console.log(error);
                })
            return
        }
        document
            .getElementById('aviso')
            .innerHTML = "Você precisa de um e-mail institucional para enviar dados"
    }

    if (session) {
        return (

            <div className='conteudo'>
                <main>
                    <label>
                        <h2>Administração de salas e ambientes - Campus Brejo Santo</h2>
                        {buscarAmbientesConferidos()}
                        {buscarAmbientesNaoConferidos()}
                        <div id='tabela-com-dados'></div>
                        <div id='tabela-com-dados-adicionais'></div>


                        <form
                            className='form'
                            onSubmit={handleCadastrarAmbiente}
                        >
                            <h2>Cadastrar Ambiente</h2>
                            <small>Você precisa de um e-mail institucional para enviar dados</small>

                            <label>Responsável pelo cadastro:<br />
                                <input
                                    type="email"
                                    value={session.user.email}
                                    disabled
                                />
                            </label>

                            <label>Número de identificação:<br />
                                <input
                                    type="number"
                                    size="2"
                                    onChange={event => setNumeroIdentificacao(event.target.value)}
                                    value={numeroIdentificacao}
                                />
                            </label>

                            <label>Nome do ambiente:<br />
                                <input
                                    type="text"
                                    onChange={event => setNomeAmbiente(event.target.value)}
                                    value={nomeAmbiente}
                                />
                            </label>

                            <label>Tipo de teto:<br />
                                <select
                                    onChange={event => setTipoTeto(event.target.value)}
                                    value={tipoTeto}
                                >
                                    <option>Selecione uma opção</option>
                                    <option>Área sem telhado</option>
                                    <option>Laje de concreto</option>
                                    <option>Telhado com forro de PVC</option>
                                    <option>Telhado sem forro</option>
                                    <option>Telha metálica com isolante</option>
                                    <option>Tela sombrite</option>
                                </select>
                            </label>

                            <label>Largura (leste a oeste):<br />
                                <input
                                    type="number"
                                    onChange={event => setLarguraLesteOeste(event.target.value)}
                                    value={larguraLesteOeste}
                                />
                            </label>

                            <label>Comprimento (norte a sul):<br />
                                <input
                                    type="number"
                                    onChange={event => setComprimento(event.target.value)}
                                    value={comprimento}
                                />
                            </label>

                            <label>Altura:<br />
                                <input
                                    type="number"
                                    onChange={event => setAltura(event.target.value)}
                                    value={altura}
                                />
                            </label>

                            <label>Servidor responsável:<br />
                                <input
                                    type="text"
                                    onChange={event => setServidorResponsavel(event.target.value)}
                                    value={servidorResponsavel}
                                />
                            </label>

                            <label>Servente de limpeza:<br />
                                <input
                                    type="text"
                                    onChange={event => setServenteLimpeza(event.target.value)}
                                    value={serventeLimpeza}
                                />
                            </label>

                            <label>Classificação:<br />
                                <input
                                    type="text"
                                    onChange={event => setClassificacao(event.target.value)}
                                    value={classificacao}
                                />
                            </label>

                            <label>Produtividade recomendada:<br />
                                <input
                                    type="text"
                                    onChange={event => setProdutividadeRecomendada(event.target.value)}
                                    value={produtividadeRecomendada}
                                />
                            </label>

                            <label>Tipo:<br />
                                <input
                                    type="text"
                                    onChange={event => setTipo(event.target.value)}
                                    value={tipo}
                                />
                            </label>

                            <label>Reparo ou observação adicional?<br />
                                <textarea
                                    type="textarea"
                                    rows="6"
                                    cols="45"
                                    onChange={event => setObservacao(event.target.value)}
                                    value={observacao}
                                />
                            </label>

                            <button type="submit">Enviar</button>
                            <p id='aviso'></p>
                        </form>
                    </label>
                </main>
            </div>
        )
    }

    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}