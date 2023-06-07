import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import minivan from '../public/images/transportes/minivan-spin.jpg'
import onibus from '../public/images/transportes/onibus-urbano.jpg'
import ListaPassageiros from './ListaPassageiros'

export default function SolicitarVeiculo() {
  const [solicita, setSolicita] = useState({
    saidaAbaiara: 'Não',
    saidaCentro: 'Não',
    saidaIfe: 'Não',
    objetivo1: 'Não marcado',
    objetivo2: 'Não marcado',
    objetivo3: 'Não marcado',
    objetivo4: 'Não marcado',
    objetivo5: 'Não marcado',
    objetivo6: 'Não marcado',
    objetivo7: 'Não marcado'
  })
  const { data: session } = useSession()
  const [nomeCadastrado, setNomeCadastrado] = useState('Carregando...')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('Carregando...')
  const [emailCadastrado, setEmailCadastrado] = useState('Carregando...')

  function onInputChange(evt) {
    setSolicita(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }))
  }

  function onCheckboxChange(evt) {
    setSolicita(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.checked === true ? 'Sim' : 'Não'
    }))
  }

  function onObjetivoChange(evt) {
    setSolicita(prevState => ({
      ...prevState,
      [evt.target.id]:
        evt.target.checked === true ? evt.target.value : 'Não marcado'
    }))
  }

  React.useEffect(() => {
    buscarCadastro()
  }, [])

  async function buscarCadastro() {
    const response = await fetch(
      '../api/cadastro/cadastro?' + 'email=' + session.user.email
    )
    const data = await response.json()

    if (data === null) {
      setNomeCadastrado('Não cadastrado')
      setTelefoneCadastrado('Não cadastrado')
      setEmailCadastrado('Não cadastrado')
      return
    }

    setNomeCadastrado(data.nome)
    setTelefoneCadastrado(data.telefone)
    setEmailCadastrado(data.email)
  }

  const raioTransportes =
    'http://raiolaser.16mb.com/images/2/2a/Raio-transportes-ufca.jpeg'

  if (session) {
    solicita.email = session.user.email
    nomeCadastrado ? (solicita.nome = nomeCadastrado) : ''
    telefoneCadastrado ? (solicita.telefone = telefoneCadastrado) : ''
    solicita.veiculo ? '' : (solicita.veiculo = 'Minivan')
    return (
      <div>
        <form>
          <div>
            <h2>Requisitar Transporte</h2>
            <p>
              Seu nome é <strong>{nomeCadastrado}</strong>. Todas as
              confirmações e respostas referentes a esta solicitação serão
              enviadas no e-mail <strong>{emailCadastrado}</strong>. O Telefone
              para contato é <strong>{telefoneCadastrado}</strong>.
            </p>
            <div className="button">
              <Link href="/cadastro/atualizar">Atualizar cadastro</Link>
            </div>

            <h3>Dados gerais sobre viagem em veículos oficiais</h3>

            <div>
              Atenção: Atuação permitida do serviço de transporte terrestre da
              UFCA: Raio de 800 km à partir da sede - Juazeiro do Norte
              <Image
                src={raioTransportes}
                width={500}
                height={500}
                alt="Atuação permitida do serviço de transportes: raio de 800 km à partir da sede - Juazeiro do Norte"
              ></Image>
              <div className="button">
                <a
                  href="http://raiolaser.16mb.com/index.php/Uso_dos_ve%C3%ADculos_oficiais_da_UFCA_campus_Brejo_Santo#Atua.C3.A7.C3.A3o:_Raio_de_800_km_.C3.A0_partir_da_sede_-_Juazeiro_do_Norte.3B"
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar raio de atuação do serviço de transportes do IFE
                </a>
              </div>
            </div>

            <h3>Qual o veículo que melhor atende sua demanda??</h3>
            <div>
              <label>
                <input
                  type="radio"
                  name="veiculo"
                  id="minivan"
                  value="Minivan"
                  onChange={onInputChange}
                ></input>
                <Image src={minivan} width={300} height={300} alt="Minivan" />
                Até 6 passageiros + 1 motorista
              </label>

              <label>
                <input
                  type="radio"
                  name="veiculo"
                  id="onibus"
                  value="Ônibus"
                  onChange={onInputChange}
                ></input>
                <Image src={onibus} width={300} height={300} alt="Minivan" />
                Até 44 passageiros + 1 motorista
              </label>
            </div>

            <h3>{solicita.nome}, você também vai no veículo?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  name="solicitanteVai"
                  value="Sim"
                  required
                  onChange={onInputChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="solicitanteVai"
                  value="Não"
                  onChange={onInputChange}
                />
                Não
              </label>
            </div>

            <h3>Sobre a viagem</h3>

            <label>
              Qual o estado(UF) de destino?
              <br />
              <select id="estado" onChange={onInputChange} name="uf" required>
                <option name="estado" value="Ceará" id="ceara" selected>
                  Ceará
                </option>
                <option name="estado" value="Alagoas" id="alagoas">
                  Alagoas
                </option>
                <option name="estado" value="Bahia" id="bahia">
                  Bahia
                </option>
                <option name="estado" value="Maranhão" id="maranhao">
                  Maranhão
                </option>
                <option name="estado" value="Paraíba" id="paraiba">
                  Paraíba
                </option>
                <option name="estado" value="Pernambuco" id="pernambuco">
                  Pernambuco
                </option>
                <option name="estado" value="Piauí" id="piaui">
                  Piauí
                </option>
                <option
                  name="estado"
                  value="Rio Grande do Norte"
                  id="rio-grande-do-norte"
                >
                  Rio Grande do Norte
                </option>
                <option name="estado" value="Sergipe" id="sergipe">
                  Sergipe
                </option>
              </select>
            </label>

            <label>
              Qual a cidade destino?
              <input
                type="text"
                id="cidade"
                name="cidade"
                required
                onChange={onInputChange}
                value={solicita.cidade}
              ></input>
            </label>

            <label>
              Data da viagem
              <input
                type="date"
                name="Data da ida"
                id="dataIda"
                onChange={onInputChange}
                value={solicita.dataIda}
                required
              />
            </label>

            <label>
              Hora da saída
              <input
                type="time"
                name="Horário de saída"
                id="horaIda"
                onChange={onInputChange}
                value={solicita.horaIda}
                required
              />
            </label>

            <label>
              Data do retorno
              <input
                type="date"
                name="Data do retorno"
                id="dataRetorno"
                onChange={onInputChange}
                value={solicita.dataRetorno}
                required
              />
            </label>
            <label>
              Hora retorno
              <input
                type="time"
                name="Hora do retorno"
                id="horaRetorno"
                onChange={onInputChange}
                value={solicita.horaRetorno}
                required
              />
            </label>

            <h3>Local de saída</h3>
            <p>Se for necessário pode-se marcar mais de uma opção.</p>

            <label>
              <input
                type="checkbox"
                name="localSaida1"
                id="saidaIfe"
                value="Prédio Sede do IFE"
                onChange={onCheckboxChange}
                autoComplete="off"
              />
              Prédio Sede do IFE, Bairro Centro.
            </label>

            <label>
              <input
                type="checkbox"
                name="localSaida2"
                id="saidaCentro"
                value="Praça Dionísio Rocha de Lucena, Bairro Centro."
                onChange={onCheckboxChange}
              />
              Praça Dionísio Rocha de Lucena, Bairro Centro.
            </label>

            <label>
              <input
                type="checkbox"
                name="localSaida3"
                id="saidaAbaiara"
                value="Posto Abaiara (quando não houver desvio de trajeto)"
                onChange={onCheckboxChange}
              />
              Posto Abaiara (quando não houver desvio de trajeto)
            </label>

            <h3>A viagem atenderá algum dos objetivos abaixo relacionados?</h3>
            <p>
              Essas solicitações possuem fluxo de aprovação automática pois
              foram definidas como prioridade pelo Conselho da Unidade
              Acadêmica.
            </p>

            <label htmlFor="objetivo1">
              <input
                type="checkbox"
                name="objetivo1"
                id="objetivo1"
                value="Recebimento de avaliadores do MEC"
                onChange={onObjetivoChange}
              />
              Recebimento de avaliadores do MEC
            </label>

            <label htmlFor="objetivo2">
              <input
                type="checkbox"
                name="objetivo2"
                id="objetivo2"
                value="Reuniões agendadas pelo setor de transportes com os motoristas"
                onChange={onObjetivoChange}
              />
              Reuniões agendadas pelo setor de transportes com os motoristas
            </label>

            <label htmlFor="objetivo3">
              <input
                type="checkbox"
                name="objetivo3"
                id="objetivo3"
                value="Reunião com calendário definido previamente e que envolve representação do IFE"
                onChange={onObjetivoChange}
              />
              Reunião com calendário definido previamente e que envolve
              representação do IFE
            </label>

            <label htmlFor="objetivo4">
              <input
                type="checkbox"
                name="objetivo4"
                id="objetivo4"
                value="Mudança de prédio"
                onChange={onObjetivoChange}
              />
              Mudança de prédio
            </label>

            <label htmlFor="objetivo5">
              <input
                type="checkbox"
                name="objetivo5"
                id="objetivo5"
                value="Eventos de colação de grau"
                onChange={onObjetivoChange}
              />
              Eventos de colação de grau
            </label>

            <label htmlFor="objetivo6">
              <input
                type="checkbox"
                name="objetivo6"
                id="objetivo6"
                value="Montagem de estande na ExpoBrejo"
                onChange={onObjetivoChange}
              />
              Montagem de estande na ExpoBrejo
            </label>

            <label htmlFor="objetivo7">
              <input
                type="checkbox"
                name="objetivo7"
                id="objetivo7"
                value="Revisões dos veículos, quando estas não puderem ser feitas em datas sem agendamentos"
                onChange={onObjetivoChange}
              />
              Revisões dos veículos, quando estas não puderem ser feitas em
              datas sem agendamentos
            </label>
            <button onClick={() => console.log(solicita)}>Verificar</button>

            <h3>Qual o tipo da solicitação?</h3>

            <label htmlFor="com-motorista">
              <input
                type="radio"
                name="tipo"
                id="com-motorista"
                value="Veículo com motorista"
                required
              />
              Veículo com motorista
            </label>

            <label htmlFor="sem-motorista">
              <input
                type="radio"
                name="tipo"
                id="sem-motorista"
                value="Veículo sem motorista"
              />
              Veículo sem motorista (É necessário apresentar Portaria
              autorizando a condução para a retirada do veículo)
            </label>

            <h3>
              Esta solicitação vai atender a demanda de qual setor ou grupo?
            </h3>

            <label htmlFor="alunos">
              <input
                type="radio"
                name="setor"
                value="Alunos do IFE"
                id="alunos"
                required
              />
              Alunos do IFE
            </label>

            <label htmlFor="assistencia">
              <input
                type="radio"
                name="setor"
                id="assistencia"
                value="Apoio ao discente - IFE"
              />
              Apoio ao discente - IFE
            </label>

            <label htmlFor="direcao">
              <input
                type="radio"
                name="setor"
                id="direcao"
                value="Direção do IFE"
              />
              Direção do IFE
            </label>

            <label htmlFor="biologia">
              <input
                type="radio"
                name="setor"
                id="biologia"
                value="Licenciatura em Biologia"
              />
              Licenciatura em Biologia
            </label>

            <label htmlFor="fisica">
              <input
                type="radio"
                name="setor"
                id="fisica"
                value="Licenciatura em Física"
              />
              Licenciatura em Física
            </label>

            <label htmlFor="matematica">
              <input
                type="radio"
                name="setor"
                id="matematica"
                value="Licenciatura em Matemática"
              />
              Licenciatura em Matemática
            </label>

            <label htmlFor="pedagogia">
              <input
                type="radio"
                name="setor"
                id="pedagogia"
                value="Licenciatura em Pedagogia"
              />
              Licenciatura em Pedagogia
            </label>

            <label htmlFor="quimica">
              <input
                type="radio"
                name="setor"
                id="quimica"
                value="Licenciatura em Química"
              />
              Licenciatura em Química
            </label>

            <label htmlFor="licnm">
              <input
                type="radio"
                name="setor"
                id="licnm"
                value="Licenciatura Interdisciplinar em Ciências Naturais e Matemática"
              />
              Licenciatura Interdisciplinar em Ciências Naturais e Matemática
            </label>

            <ListaPassageiros />
          </div>
        </form>
        <button type="submit" onClick={() => console.log(solicita)}>
          Enviar dados
        </button>
      </div>
    )
  }

  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
