import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

export default function Brainstorming() {
  const { data: session } = useSession()
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

  React.useEffect(() => {
    buscarIdeias()
  }, [])

  function handleEnviarFormulario(event) {
    event.preventDefault()

    if (ideia === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa escrever alguma coisa no campo ideia.'
      return
    }

    if (localAplicacao === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa escolher uma das opções no campo "Em qual setor essa ideia deve ser aplicada?".'
      return
    }

    if (endereco === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa escolher uma das opções no campo "Em qual endereço essa ideia deve ser implementada?".'
      return
    }

    if (grauPrioridade === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa escolher "Qual o grau de prioridade a UFCA deveria dar para implementar essa ideia".'
      return
    }

    let regex = /ufca\.edu.br$/
    let testeEmailUfca = regex.test(session.user.email)
    if (testeEmailUfca === false) {
      document.getElementById('aviso').innerHTML =
        'Você precisa de um e-mail @ufca.edu.br para enviar dados.'
      return
    }

    document.getElementById(
      'aviso'
    ).innerHTML = `Aguarde alguns instantes, estamos enviado suas informações.`

    axios
      .post('/api/brainstorming/enviar-ideia', {
        ideia: ideia,
        localAplicacao: localAplicacao,
        endereco: endereco,
        grauPrioridade: grauPrioridade,
        responsavelEnvio: session.user.email ? session.user.email : '',
        dataInformacao: Date()
      })
      .then(function (response) {
        document.getElementById(
          'aviso'
        ).innerHTML = `Recebemos suas informações em ${Date()}. Obrigado!`
        setIdeia('')
        setLocalAplicacao('')
        setEndereco('')
        setGrauPrioridade('')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (session) {
    return (
      <div>
        <h1>
          <strong>
            Brainstorming IFE - Tema infraestrutura física <br />
            (reformas, construções e melhorias)
          </strong>
        </h1>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/ShBleATmuqU"
          title="Brainstorming"
        />

        <form onSubmit={handleEnviarFormulario}>
          <h2>Enviar ideia</h2>
          Sua ideia:
          <label>
            <textarea
              style={{ backgroundColor: '#EFEFEF' }}
              type="textarea"
              rows="6"
              cols="55"
              onChange={event => setIdeia(event.target.value)}
              value={ideia}
            />
          </label>
          Em qual setor essa ideia deve ser aplicada?
          <label>
            <br />
            <select
              onChange={event => setLocalAplicacao(event.target.value)}
              value={localAplicacao}
            >
              <option>Selecione uma opção</option>
              <option>
                Licenciatura Interdisciplinar em Ciências Naturais e Matemática
              </option>
              <option>Licenciatura em Biologia</option>
              <option>Licenciatura em Física</option>
              <option>Licenciatura em Química</option>
              <option>Licenciatura em Matemática</option>
              <option>Licenciatura em Pedagogia</option>
              <option>Ambientes Administrativos</option>
              <option>Áreas comuns</option>
            </select>
          </label>
          Em qual endereço essa ideia deve ser implementada?
          <label>
            <br />
            <select
              onChange={event => setEndereco(event.target.value)}
              value={endereco}
            >
              <option>Selecione uma opção</option>
              <option>Campus Brejo Santo, bairro Centro</option>
              <option>Terreno em processo de cessão, bairro Renê Lucena</option>
            </select>
          </label>
          Qual o grau de prioridade a UFCA deveria dar para implementar essa
          <label>
            ideia?
            <br />
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
          <p id="aviso" style={{ backgroundColor: 'yellow' }}></p>
          <div className="center">
            <button type="submit" onClickCapture={buscarIdeias}>
              Enviar
            </button>
          </div>
        </form>

        <h2>
          <strong>Até o momento, coletamos {ideias.length} ideias</strong>
        </h2>

        <div>
          {ideias.map(ideiasRecebidas => (
            <>
              <tr>
                <br />
                <p>
                  A ideia recebida foi: {`${ideiasRecebidas.ideia}`} Essa ideia
                  deve ser aplicada no seguinte endereço:{' '}
                  {`${ideiasRecebidas.endereco}`}
                  {'. '}
                  Essa ideia foi classificada como:{' '}
                  {`${ideiasRecebidas.grauPrioridade}`}. O setor de aplicação
                  dessa ideia é: {`${ideiasRecebidas.localAplicacao}`}.
                </p>
                <strong>
                  {' '}
                  <br /> <hr />{' '}
                </strong>
              </tr>
            </>
          ))}
          == Fim das ideias recebidas ==
        </div>
      </div>
    )
  }
  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
