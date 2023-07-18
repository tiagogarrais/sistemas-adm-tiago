import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function Listagem() {
  const { data: session } = useSession()
  const [cadastroAmbiente, setcadastroAmbiente] = useState({})
  const [exibirAmbienteEnsino, setExibirAmbienteEnsino] = useState(false)

  const handleCheckboxChange = () => {
    setExibirAmbienteEnsino(!exibirAmbienteEnsino)
  }

  if (session && session.user.email === 'tiago.arrais@ufca.edu.br') {
    function onInputChange(evt) {
      console.log([evt.target.name], [evt.target.value])
      setcadastroAmbiente(prevState => ({
        ...prevState,
        [evt.target.name]: evt.target.value
      }))
    }

    async function btnPesquisaClick(ambiente) {
      event.preventDefault()

      const linkApiSala = `../api/ambientes/${ambiente}`
      const response = await fetch(linkApiSala)
      const dadosBrutos = await response.json()
      setDadosJson(dadosBrutos)
    }

    function btnSaveClick() {
      event.preventDefault()
      console.log(cadastroAmbiente)

      axios
        .post('/api/ambientes/ambientes', {
          numeroIdentificacao: cadastroAmbiente.numeroIdentificacao,
          nomeAmbiente: cadastroAmbiente.nomeAmbiente,
          telefone: cadastroAmbiente.telefone,
          tipoTeto: cadastroAmbiente.tipoTeto,
          larguraLesteOeste: cadastroAmbiente.larguraLesteOeste,
          comprimento: cadastroAmbiente.comprimento,
          altura: cadastroAmbiente.altura,
          frequenciaSemanalLimpeza: cadastroAmbiente.frequenciaSemanalLimpeza,
          possuigaiolaProjetor: cadastroAmbiente.possuiGaiolaProjetor,
          possuiCondicionadorAr: cadastroAmbiente.possuiCondicionadorAr,
          possuiProjetor: cadastroAmbiente.possuiProjetor,
          possuiQuadroLousa: cadastroAmbiente.possuiQuadroLousa,
          possuiSuporteProjetor: cadastroAmbiente.possuiSuporteProjetor,
          possuiCadeiraAcessivel: cadastroAmbiente.possuiCadeiraAcessivel,
          possuiMesaAcessivel: cadastroAmbiente.possuiMesaAcessivel,
          potenciaWattsCondicionadorAr:
            cadastroAmbiente.potenciaWattsCondicionadorAr,
          quantCarteiras: cadastroAmbiente.quantCarteiras,
          quantLampadas: cadastroAmbiente.quantLampadas,
          tipoIluminacao: cadastroAmbiente.tipoIluminacao,
          tipoTeto: cadastroAmbiente.tipoTeto
        })
        .then(function (res) {
          console.log('Dados enviados')
          // setSolicita({})
          // document.getElementById('btnSave').disabled = false
          // document.getElementById('btnSave').innerText = 'Salvar'
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    return (
      <>
        <h1>Atualizar dados de ambientes</h1>
        <div>
          <form id="pesquisa">
            <label>
              Número de identificação / Chave da porta:
              <input
                type="number"
                name="numeroIdentificacao"
                placeholder="Número da chave da porta"
                id="numeroIdentificacao"
                onChange={onInputChange}
                required
              ></input>
            </label>
            <button form="pesquisa" type="submit" onClick={btnPesquisaClick}>
              Enviar informações
            </button>
          </form>

          <form id="atualiza">
            <label>
              Nome do ambiente:
              <input
                type="input"
                name="nomeAmbiente"
                placeholder="Nome do ambiente"
                id="nomeAmbiente"
                onChange={onInputChange}
                required
              />
            </label>

            <label>
              Número do telefone, se houver:
              <input
                type="input"
                name="telefone"
                placeholder="Somente números com DDD"
                id="telefone"
                onChange={onInputChange}
                required
              ></input>
            </label>

            <label>
              Largura (Leste-Oeste):
              <input
                type="number"
                name="larguraLesteOeste"
                placeholder="Vírgula para separar casas decimais"
                id="larguraLesteOeste"
                step="0.1"
                pattern="[0-9]\.[0-9]"
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              Comprimento:
              <input
                type="number"
                name="comprimento"
                placeholder="Vírgula para separar casas decimais"
                id="comprimento"
                step="0.1"
                pattern="[0-9]\.[0-9]"
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              Altura:
              <input
                type="number"
                name="altura"
                placeholder="Vírgula para separar casas decimais"
                id="altura"
                step="0.1"
                pattern="[0-9]\.[0-9]"
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              Frequência semanal de limpeza completa do ambiente:
              <input
                type="number"
                name="frequenciaSemanalLimpeza"
                placeholder="Frequência semanal"
                id="frequenciaSemanalLimpeza"
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              <input
                type="checkbox"
                checked={exibirAmbienteEnsino}
                onChange={handleCheckboxChange}
              />
              É um ambiente de ensino como sala de aula, laboratório ou outros?
            </label>

            <div
              style={{ display: exibirAmbienteEnsino ? 'block' : 'none' }}
              id="ambienteEnsino"
              className="ambienteEnsino"
            >
              <label>
                Quantidade de carteiras:
                <input
                  type="number"
                  name="quantCarteiras"
                  placeholder="Quantidade de carteiras"
                  id="quantCarteiras"
                  onChange={onInputChange}
                ></input>
              </label>

              <label>
                Possui cadeira acessível?
                <select
                  type="select"
                  name="possuiCadeiraAcessível"
                  placeholder="Possui cadeira acessível?"
                  id="possuiCadeiraAcessível"
                  onChange={onInputChange}
                >
                  <option
                    name="escolherCadeiraAcessivel"
                    value="Escolher"
                    id="escolherCadeiraAcessivel"
                  >
                    Escolher
                  </option>
                  <option
                    name="simCadeiraAcessível"
                    value="Sim"
                    id="simCadeiraAcessível"
                  >
                    Sim
                  </option>
                  <option
                    name="naoCadeiraAcessível"
                    value="Não"
                    id="naoCadeiraAcessível"
                  >
                    Não
                  </option>
                </select>
              </label>

              <label>
                Possui mesa acessível?
                <select
                  type="select"
                  name="possuiMesaAcessível"
                  placeholder="Possui mesa acessível?"
                  id="possuiMesaAcessível"
                  onChange={onInputChange}
                >
                  <option
                    name="escolherMesaAcessivel"
                    value="Escolher"
                    id="escolherMesaAcessivel"
                  >
                    Escolher
                  </option>
                  <option
                    name="simMesaAcessível"
                    value="Sim"
                    id="simMesaAcessível"
                  >
                    Sim
                  </option>
                  <option
                    name="naoMesaAcessível"
                    value="Não"
                    id="naoMesaAcessível"
                  >
                    Não
                  </option>
                </select>
              </label>

              <label>
                Possui suporte para instalação de projetor?
                <select
                  type="select"
                  name="possuiSuporteProjetor"
                  placeholder="Possui suporte para instalação de projetor?"
                  id="possuiSuporteProjetor"
                  onChange={onInputChange}
                >
                  <option
                    name="escolherProjetor"
                    value="Escolher"
                    id="escolherProjetor"
                  >
                    Escolher
                  </option>
                  <option name="simProjetor" value="Sim" id="simProjetor">
                    Sim
                  </option>
                  <option name="naoProjetor" value="Não" id="naoProjetor">
                    Não
                  </option>
                </select>
              </label>

              <label>
                Possui gaiola para instalação de projetor?
                <select
                  type="select"
                  name="possuiGaiolaProjetor"
                  placeholder="Possui gaiola para instalação de projetor?"
                  id="possuiGaiolaProjetor"
                  onChange={onInputChange}
                >
                  <option
                    name="escolherGaiola"
                    value="Escolher"
                    id="escolherGaiola"
                  >
                    Escolher
                  </option>
                  <option name="simGaiola" value="Sim" id="simGaiola">
                    Sim
                  </option>
                  <option name="naoGaiola" value="Não" id="naoGaiola">
                    Não
                  </option>
                </select>
              </label>

              <label>
                Possui projetor instalado?
                <select
                  type="select"
                  name="possuiProjetor"
                  placeholder="Possui projetor instalado?"
                  id="possuiProjetor"
                  onChange={onInputChange}
                >
                  <option
                    name="escolherPossuiProjetor"
                    value="Escolher"
                    id="escolherPossuiProjetor"
                  >
                    Escolher
                  </option>
                  <option name="simProjetor" value="Sim" id="simProjetor">
                    Sim
                  </option>
                  <option name="naoProjetor" value="Não" id="naoProjetor">
                    Não
                  </option>
                </select>
              </label>

              <label>
                Possui quadro / lousa?
                <select
                  type="select"
                  name="possuiQuadroLousa"
                  placeholder="Possui quadro / lousa?"
                  id="possuiQuadroLousa"
                  onChange={onInputChange}
                >
                  <option
                    name="escolherPossuiQuadroLousa"
                    value="Escolher"
                    id="escolherPossuiQuadroLousa"
                  >
                    Escolher
                  </option>
                  <option name="simQuadroLousa" value="Sim" id="simQuadroLousa">
                    Sim
                  </option>
                  <option name="naoQuadroLousa" value="Não" id="naoQuadroLousa">
                    Não
                  </option>
                </select>
              </label>
            </div>

            <label>
              Possui condicionador de ar?
              <select
                type="select"
                name="possuiCondicionadorAr"
                placeholder="Possui condicionador de ar?"
                id="possuiCondicionadorAr"
                onChange={onInputChange}
                required
              >
                <option
                  name="escolherPossuiCondicionadorAr"
                  value="Escolher"
                  id="escolherPossuiCondicionadorAr"
                >
                  Escolher
                </option>
                <option
                  name="simCondicionadorAr"
                  value="Sim"
                  id="simCondicionadorAr"
                >
                  Sim
                </option>
                <option
                  name="naoCondicionadorAr"
                  value="Não"
                  id="naoCondicionadorAr"
                >
                  Não
                </option>
              </select>
            </label>

            <label>
              Qual a potência em Watts do condicionador de ar?
              <input
                type="number"
                name="potenciaWattsCondicionadorAr"
                placeholder="potência em Watts"
                id="potenciaWattsCondicionadorAr"
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              Tipo de teto:
              <select
                type="select"
                name="tipoTeto"
                placeholder="Selecione o tipo de teto"
                id="tipoTeto"
                onChange={onInputChange}
                required
              >
                <option
                  name="escolherTipoTeto"
                  value="Escolher"
                  id="escolherTipoTeto"
                >
                  Escolher
                </option>
                <option
                  name="lajeConcreto"
                  value="Laje de concreto"
                  id="lajeConcreto"
                >
                  Laje de concreto
                </option>
                <option
                  name="madeiraTelhasSemForro"
                  value="Madeira e telhas sem forro"
                  id="madeiraTelhasSemForro"
                >
                  Madeira e telhas sem forro
                </option>
                <option
                  name="madeiraTelhasComForroPVC"
                  value="Madeira e telhas com forro (PVC)"
                  id="madeiraTelhasComForroPVC"
                >
                  Madeira e telhas com forro (PVC)
                </option>
                <option
                  name="madeiraTelhasComForroGesso"
                  value="Madeira e telhas com forro (gesso)"
                  id="madeiraTelhasComForroGesso"
                >
                  Madeira e telhas com forro (gesso)
                </option>
                <option name="semTeto" value="Não possui teto" id="semTeto">
                  Área aberta, sem teto.
                </option>
              </select>
            </label>
            <label>
              Tipo de iluminação:
              <select
                type="select"
                name="tipoIluminacao"
                placeholder="Selecione o tipo de iluminação"
                id="tipoIluminacao"
                onChange={onInputChange}
                required
              >
                <option
                  name="escolherTipoIluminacao"
                  value="Escolher"
                  id="escolherTipoIluminacao"
                >
                  Escolher
                </option>
                <option
                  name="lampadaFluorescente"
                  value="Lâmpada tubular (fluorescente)"
                  id="lampadaFluorescente"
                >
                  Lâmpada tubular (fluorescente)
                </option>
                <option
                  name="lampadaLED"
                  value="Lâmpada tubular (LED)"
                  id="lampadaLED"
                >
                  Lâmpada tubular (LED)
                </option>
                <option
                  name="posteLED"
                  value="Poste maior que 4 metros (LED)"
                  id="posteLED"
                >
                  Poste maior que 4 metros (LED)
                </option>
                <option
                  name="lampadaRosqueavel"
                  value="Lâmpada rosqueável"
                  id="lampadaRosqueavel"
                >
                  Lâmpada rosqueável
                </option>
              </select>
            </label>

            <label>
              Quantidade de lâmpadas:
              <input
                type="number"
                name="quantLampadas"
                placeholder="Quantidade de lâmpadas"
                id="quantLampadas"
                onChange={onInputChange}
                required
              ></input>
            </label>
            <button form="atualiza" type="submit" onClick={btnSaveClick}>
              Enviar informações
            </button>
          </form>
        </div>
      </>
    )
  } else {
    return <h5>Você não possui permissão para acessar esta área do site</h5>
  }
}
