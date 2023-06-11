import React, { useState } from 'react'

export default function ProximasViagens() {
  const [proximasViagens, setProximasViagens] = useState([])

  async function buscarViagens() {
    const response = await fetch('/api/transportes/proximas-viagens')
    const data = await response.json()
    setProximasViagens(data)
  }

  React.useEffect(() => {
    buscarViagens()
  }, [])

  return (
    <>
      <h2>Próximas viagens</h2>
      <div className="tres-colunas">
        {proximasViagens.map(proximasViagens => (
          <>
            <article>
              <h4>Data da viagem: {`${proximasViagens.dataIda}`}</h4>
              <p>A cidade destino é: {`${proximasViagens.cidade}`}</p>
              <p>O veículo confirmado: {`${proximasViagens.veiculo}`}</p>
              <p>Horário da viagem: {`${proximasViagens.horaIda}`}</p>
              <p>Data do retorno: {`${proximasViagens.dataRetorno}`}</p>
              <p>Hora do retorno: {`${proximasViagens.horaRetorno}`}</p>
            </article>
          </>
        ))}
      </div>
    </>
  )
}
