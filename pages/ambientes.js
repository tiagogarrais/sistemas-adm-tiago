import { useSession } from 'next-auth/client'
import { useState } from 'react'

export default function Ambientes() {
    const [session] = useSession()

    const [numeroIdentificacao, setNumeroIdentificacao] = useState('')
    const [nomeAmbiente, setNomeAmbiente] = useState('')
    const [tipoTeto, setTipoTeto] = useState('')
    const [largura, setLargura] = useState('')
    const [comprimento, setComprimento] = useState('')
    const [altura, setAltura] = useState('')
    const [observacao, setObservacao] = useState('')
    const [servidorResponsavel, setServidorResponsavel] = useState('')
    const [serventeLimpeza, setServenteLimpeza] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [produtividadeRecomendada, setProdutividadeRecomendada] = useState('')
    const [tipo, setTipo] = useState('')

    function handleCadastrarAmbiente(event) {
        event.preventDefault()

        let regex = /@ufca\.edu.br$/
        let testeEmailUfca = regex.test(session.user.email)

        if (testeEmailUfca === true) {
            return (
                console.log("E-mail da UFCA pode fazer envio de informações")
            )
        }
        console.log('Dados não podem ser enviados')
    }

    if (session) {
        return (
            <div className='conteudo'>

                <main>
                    <label>
                        <form
                            className='form'
                            onSubmit={handleCadastrarAmbiente}
                        >
                            <h3>Campus Brejo Santo - Cadastrar Ambiente</h3>


                            <label>responsável pelo cadastro:<br />
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
                                    onChange={event => setLargura(event.target.value)}
                                    value={largura}
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