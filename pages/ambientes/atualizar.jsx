import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

export default function Atualizar() {
  const { data: session } = useSession()
  const [cadastroAmbiente, setCadastroAmbiente] = useState({})
  const [exibirAmbienteEnsino, setExibirAmbienteEnsino] = useState(false)
  const [dadosJson, setDadosJson] = useState({})
  const [pesquisa, setPesquisa] = useState('')

  const [nomeAmbiente, setNomeAmbiente] = useState('')
  const [telefone, setTelefone] = useState('')
  const [larguraLesteOeste, setLarguraLesteOeste] = useState('')
  const [comprimento, setComprimento] = useState('')
  const [altura, setAltura] = useState('')
  const [frequenciaSemanalLimpeza, setFrequenciaSemanalLimpeza] = useState('')
  const [possuigaiolaProjetor, setPossuigaiolaProjetor] = useState('')
  const [possuiProjetor, setPossuiProjetor] = useState('')
  const [possuiQuadroLousa, setPossuiQuadroLousa] = useState('')
  const [possuiSuporteProjetor, setPossuiSuporteProjetor] = useState('')
  const [possuiCadeiraAcessivel, setPossuiCadeiraAcessivel] = useState('')
  const [possuiMesaAcessivel, setPossuiMesaAcessivel] = useState('')
  const [possuiCondicionadorAr, setPossuiCondicionadorAr] = useState('')
  const [potenciaWattsCondicionadorAr, setPotenciaWattsCondicionadorAr] =
    useState('')
  const [quantCarteiras, setQuantCarteiras] = useState('')
  const [quantLampadas, setQuantLampadas] = useState('')
  const [tipoIluminacao, setTipoIluminacao] = useState('')
  const [tipoTeto, setTipoTeto] = useState('')

  const tipoIluminacaoOptions = [
    'Escolher',
    'Lâmpada tubular (fluorescente)',
    'Lâmpada tubular (LED)',
    'Poste maior que 4 metros (LED)',
    'Lâmpada rosqueável'
  ]

  const tipoTetoOptions = [
    'Laje de concreto',
    'Madeira e telhas sem forro',
    'Madeira e telhas com forro (PVC)',
    'Madeira e telhas com forro (gesso)',
    'Área aberta, sem teto'
  ]

  const handleCheckboxChange = () => {
    setExibirAmbienteEnsino(!exibirAmbienteEnsino)
  }

  if (session && session.user.email === 'tiago.arrais@ufca.edu.br') {
    function onInputChange(evt) {
      setCadastroAmbiente(prevState => ({
        ...prevState,
        [evt.target.name]: evt.target.value
      }))
      console.log(cadastroAmbiente)
    }

    function onChangePesquisa(evt) {
      setPesquisa(evt.target.value)
    }

    async function btnPesquisaClick(event) {
      event.preventDefault()

      const linkApiSala = '/api/ambientes/' + pesquisa
      const response = await fetch(linkApiSala)
      const dadosBrutos = await response.json()
      setDadosJson(dadosBrutos)

      setNomeAmbiente(dadosBrutos.nomeAmbiente)
      setTelefone(dadosBrutos.telefone)
      setLarguraLesteOeste(dadosBrutos.larguraLesteOeste)
      setComprimento(dadosBrutos.comprimento)
      setAltura(dadosBrutos.altura)
      setFrequenciaSemanalLimpeza(dadosBrutos.frequenciaSemanalLimpeza)
      setPossuigaiolaProjetor(dadosBrutos.possuigaiolaProjetor)
      setPossuiProjetor(dadosBrutos.possuiProjetor)
      setPossuiQuadroLousa(dadosBrutos.possuiQuadroLousa)
      setPossuiSuporteProjetor(dadosBrutos.possuiSuporteProjetor)
      setPossuiCadeiraAcessivel(dadosBrutos.possuiCadeiraAcessível)
      setPossuiMesaAcessivel(dadosBrutos.possuiMesaAcessível)
      setPossuiCondicionadorAr(dadosBrutos.possuiCondicionadorAr)
      setPotenciaWattsCondicionadorAr(dadosBrutos.potenciaWattsCondicionadorAr)
      setQuantCarteiras(dadosBrutos.quantCarteiras)
      setQuantLampadas(dadosBrutos.quantLampadas)
      setTipoIluminacao(dadosBrutos.tipoIluminacao)
      setTipoTeto(dadosBrutos.tipoTeto)
    }

    function btnSaveClick(event) {
      event.preventDefault()

      axios
        .post('/api/ambientes/ambientes', cadastroAmbiente)
        .then(function (res) {
          // Lógica adicional após o envio dos dados
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    return (
      <>
        <Link id="listagem" className="button" href="/ambientes/listagem">
          Voltar para a listagem de ambientes
        </Link>
        <h1>Atualizar dados de ambientes</h1>
        <div>
          <form id="pesquisa">
            Qual o número do ambiente que você vai atualizar?
            <label>
              <input
                type="number"
                name="numeroIdentificacao"
                placeholder="Número da chave da porta"
                id="numeroIdentificacao"
                onChange={onChangePesquisa}
                value={pesquisa}
                min="0"
                required
              />
              <button form="pesquisa" type="submit" onClick={btnPesquisaClick}>
                Consultar
              </button>
            </label>
          </form>

          <form id="atualiza">
            <label>
              Nome do ambiente:
              <input
                type="input"
                name="nomeAmbiente"
                placeholder="Nome do ambiente"
                id="nomeAmbiente"
                //onChange={onInputChange}
                value={nomeAmbiente}
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
                value={telefone}
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
                value={larguraLesteOeste}
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
                value={comprimento}
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
                value={altura}
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              <input
                type="checkbox"
                name="possuiCondicionadorAr"
                id="possuiCondicionadorAr"
                onChange={onInputChange}
                checked={possuiCondicionadorAr}
              />
              Possui ar-condicionado?
            </label>

            <label>
              Frequência semanal de limpeza completa do ambiente:
              <input
                type="number"
                name="frequenciaSemanalLimpeza"
                placeholder="Frequência semanal"
                id="frequenciaSemanalLimpeza"
                value={frequenciaSemanalLimpeza}
                onChange={onInputChange}
              ></input>
            </label>

            <label>
              Tipo de iluminação:
              <select
                type="select"
                name="tipoIluminacao"
                placeholder="Selecione o tipo de iluminação"
                id="tipoIluminacao"
                onChange={onInputChange}
                value={tipoIluminacao}
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
                value={quantLampadas}
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
                value={tipoTeto}
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
              <input
                type="checkbox"
                checked={exibirAmbienteEnsino}
                onChange={handleCheckboxChange}
              />
              É um ambiente de ensino?
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
                  value={quantCarteiras}
                ></input>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="possuiCadeiraAcessível"
                  id="possuiCadeiraAcessível"
                  onChange={onInputChange}
                  checked={possuiCadeiraAcessivel}
                />
                Possui cadeira acessível?
              </label>

              <label>
                <input
                  type="checkbox"
                  name="possuiMesaAcessível"
                  id="possuiMesaAcessível"
                  onChange={onInputChange}
                  checked={possuiMesaAcessivel}
                />
                Possui mesa acessível?
              </label>

              <label>
                <input
                  type="checkbox"
                  name="possuiSuporteProjetor"
                  id="possuiSuporteProjetor"
                  onChange={onInputChange}
                  checked={possuiSuporteProjetor}
                />
                Possui suporte para instalação de projetor?
              </label>

              <label>
                <input
                  type="checkbox"
                  id="possuiGaiolaProjetor"
                  name="possuiGaiolaProjetor"
                  onChange={onInputChange}
                  checked={possuigaiolaProjetor}
                />
                Possui gaiola para instalação de projetor?
              </label>

              <label>
                <input
                  type="checkbox"
                  onChange={onInputChange}
                  name="possuiProjetor"
                  id="possuiProjetor"
                  checked={possuiProjetor}
                />
                Possui projetor instalado?
              </label>

              <label>
                <input
                  type="checkbox"
                  onChange={onInputChange}
                  id="possuiQuadroLousa"
                  name="possuiQuadroLousa"
                  checked={possuiQuadroLousa}
                />
                Possui quadro / lousa?
              </label>
            </div>

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
