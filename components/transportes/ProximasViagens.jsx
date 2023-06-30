import React, { useState } from 'react'
import Image from 'next/image'
import minivan from '/public/images/transportes/minivan-spin.jpg'
import onibus from '/public/images/transportes/onibus-urbano.jpg'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function ProximasViagens() {
  const [proximasViagens, setProximasViagens] = useState([])
  const { data: session } = useSession()
  const [statusViagem, setStatusViagem] = useState()

  function alterarStatus(evt) {
    setStatusViagem(prevState => ({
      ...prevState,
      [evt.target.className]: evt.target.value
    }))

    axios.patch('api/transportes/transportes', {
      _id: proximasViagens._id,
      statusViagem: statusViagem
    })
  }

  async function buscarViagens() {
    const response = await fetch('/api/transportes/proximas-viagens')
    const viagens = await response.json()
    setProximasViagens(viagens)

    if (session.user.email === 'tiago.arrais@ufca.edu.br') {
      const elements = Array.from(
        document.getElementsByClassName('statusViagem')
      )
      elements.forEach(elem => {
        elem.disabled = false
      })
    } else {
      console.log('Usuário não tem permissão para alterar status')
    }
  }

  function converterData(data) {
    const dataConvertida = Date.parse(data)
    const dataLocal = new Intl.DateTimeFormat('pt-BR').format(dataConvertida)
    return dataLocal
  }

  function converterHora(data) {
    const dataConvertida = Date.parse(data)
    const horaLocal = new Intl.DateTimeFormat('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).format(dataConvertida)
    return horaLocal
  }

  React.useEffect(() => {
    buscarViagens()
  }, [])

  return (
    <>
      <h2>Próximas viagens</h2>

      <div className="bloco">
        {proximasViagens.map(proximasViagens => (
          <>
            <div className="container mx-auto px-4 md:px-12">
              <article>
                <h3>
                  Viagem para{' '}
                  {`${proximasViagens.cidade} - ${proximasViagens.uf}`}
                </h3>
                <h4>
                  <select
                    id="statusViagem"
                    className="statusViagem"
                    disabled
                    onChange={alterarStatus}
                  >
                    <option id="recebida" className="recebida" value="recebida">
                      Recebida
                    </option>
                    <option
                      id="confirmada"
                      className="confirmada"
                      value="confirmada"
                    >
                      Confirmada
                    </option>
                  </select>
                </h4>
                <p>Data da viagem: {converterData(proximasViagens.dataIda)}</p>
                <p>
                  Horário da viagem: {converterHora(proximasViagens.dataIda)}
                </p>
                <p>
                  Data do retorno: {converterData(proximasViagens.dataRetorno)}
                </p>
                <p>
                  Hora do retorno: {converterHora(proximasViagens.dataRetorno)}
                </p>
                <p>
                  Veículo:{' '}
                  {proximasViagens.veiculo == 'Minivan' ? (
                    <>
                      <div className="center">
                        <Image
                          src={minivan}
                          alt="Minivan Spin"
                          height={250}
                          width={250}
                        />
                      </div>
                      <p>Minivan Spin (1 a 6 passageiros)</p>
                    </>
                  ) : (
                    <>
                      <div className="center">
                        <Image
                          src={onibus}
                          alt="Ônibus urbano"
                          height={250}
                          width={250}
                        />
                      </div>
                      <p>Ônibus urbano (7 a 44 passageiros)</p>
                    </>
                  )}
                </p>
              </article>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
