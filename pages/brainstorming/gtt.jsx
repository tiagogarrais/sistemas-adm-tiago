import { useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function Gtt() {
  const { data: session } = useSession()
  const [ideias, setIdeias] = useState([])
  const [grauPrioridadeGtt, setGrauPrioridadeGtt] = useState([])

  async function buscarIdeias() {
    const response = await fetch('/api/brainstorming/buscarIdeias')
    const data = await response.json()
    setIdeias(data)
  }

  function gravarGrauPrioridadeGtt() {
    setGrauPrioridadeGtt('teste')
    axios
      .post('/api/brainstorming/enviarGrauPrioridadeGtt', {
        _id: ObjectId('6111241eba342600084e75a6'),
        grauPrioridadeGtt: grauPrioridadeGtt
      })
      .then(function (response) {
        setGrauPrioridadeGtt('')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (session) {
    return (
      <div>
        <button onClick={() => buscarIdeias()}>Atualizar</button>
        <h2>Dados do Brainstorming para o GTT</h2>
        {ideias.map(ideiasRecebidas => (
          <>
            <div>
              <div>
                <h4>{`${ideiasRecebidas.ideia}`}</h4>
                <p>{`${ideiasRecebidas.endereco}`}</p>
                <p>
                  Definido como {`${ideiasRecebidas.grauPrioridade}`} pela
                  pessoa que cadastrou a ideia.
                </p>
                Grau prioridade definido pelo GTT:
                <select onChange={gravarGrauPrioridadeGtt}>
                  <option>Escolher uma das opções</option>
                  <option value="Prioridade 1 - Urgente">
                    Prioridade 1 - Urgente
                  </option>
                  <option value="Prioridade 2 - Alta">
                    Prioridade 2 - Alta
                  </option>
                  <option value="Prioridade 3 - Média">
                    Prioridade 3 - Média
                  </option>
                  <option value="Prioridade 4 - Baixa">
                    Prioridade 4 - Baixa
                  </option>
                </select>
              </div>
            </div>
          </>
        ))}
      </div>
    )
  }

  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
