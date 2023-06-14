import React, { useState } from 'react'

export default function ProximasViagens() {
  const [proximasViagens, setProximasViagens] = useState([])
  const [diaIda, setDiaIda] = useState('')
  const [mesIda, setMesIda] = useState('')
  const [anoIda, setAnoIda] = useState('')
  const [horaIda, setHoraIda] = useState('')
  const [minutoIda, setMinutoIda] = useState('')
  const [diaVolta, setDiaVolta] = useState('')
  const [mesVolta, setMesVolta] = useState('')
  const [anoVolta, setAnoVolta] = useState('')
  const [horaVolta, setHoraVolta] = useState('')
  const [minutoVolta, setMinutoVolta] = useState('')

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
              <h4>
                Data da viagem: {proximasViagens.dataIda.slice(8, 10)}/
                {proximasViagens.dataIda.slice(5, 7)}/
                {proximasViagens.dataIda.slice(0, 4)}
              </h4>
              <p>Horário da viagem: {`${proximasViagens.horaIda}`}</p>
              <p>
                Data do retorno: {proximasViagens.dataRetorno.slice(8, 10)}/
                {proximasViagens.dataRetorno.slice(5, 7)}/
                {proximasViagens.dataRetorno.slice(0, 4)}
              </p>
              <p>Hora do retorno: {`${proximasViagens.horaRetorno}`}</p>
              <p>A cidade destino é: {`${proximasViagens.cidade}`}</p>
              <p>
                O veículo confirmado:{' '}
                {proximasViagens.veiculo == 'Minivan' ? 'É a SPIN' : 'Ônibus'}
              </p>
            </article>
          </>
        ))}
      </div>
    </>
  )
}
