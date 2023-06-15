import React, { useState } from 'react'
import Image from 'next/image'
import minivan from '/public/images/transportes/minivan-spin.jpg'
import onibus from '/public/images/transportes/onibus-urbano.jpg'

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
                Veículo:{' '}
                {proximasViagens.veiculo == 'Minivan' ? (
                  <div className="center">
                    <Image
                      src={minivan}
                      alt="Minivan Spin"
                      height={250}
                      width={250}
                    />
                  </div>
                ) : (
                  <div className="center">
                    <Image
                      src={onibus}
                      alt="Ônibus urbano"
                      height={250}
                      width={250}
                    />
                  </div>
                )}
              </p>
            </article>
          </>
        ))}
      </div>
    </>
  )
}
