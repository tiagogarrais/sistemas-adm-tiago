import { useSession } from 'next-auth/react'

export default function Listagem() {
  const { data: session } = useSession()

  if (session && session.user.email === 'tiago.arrais@ufca.edu.br') {
    return (
      <>
        <h1>Cadastro de ambientes</h1>
        <form>
          <label>
            Nome do ambiente:
            <input
              type="input"
              className="nomeAmbiente"
              placeholder="Nome do ambiente"
              id="nomeAmbiente"
            />
          </label>

          <label>
            Número da chave da porta:
            <input
              type="number"
              className="numeroChave"
              placeholder="Número da chave da porta"
              id="numeroChave"
            ></input>
          </label>

          <label>
            Largura (Leste-Oeste):
            <input
              type="number"
              className="larguraLesteOeste"
              placeholder="Use ponto para separar casas decimais"
              id="larguraLesteOeste"
              step="0.1"
              pattern="[0-9]\.[0-9]"
            ></input>
          </label>

          <label>
            Comprimento:
            <input
              type="number"
              className="comprimento"
              placeholder="Use ponto para separar casas decimais"
              id="comprimento"
              step="0.1"
              pattern="[0-9]\.[0-9]"
            ></input>
          </label>

          <label>
            Frequência semanal de limpeza completa do ambiente:
            <input
              type="number"
              className="freqSemanalLimpezaCompleta"
              placeholder="Frequência semanal"
              id="quantCafreqSemanalLimpezaCompletarteiras"
            ></input>
          </label>

          <label>
            Quantidade de carteiras:
            <input
              type="number"
              className="quantCarteiras"
              placeholder="Quantidade de carteiras"
              id="quantCarteiras"
            ></input>
          </label>

          <label>
            Possui suporte para instalação de projetor?
            <select
              type="select"
              className="suporteProjetor"
              placeholder="Possui suporte para instalação de projetor?"
              id="suporteProjetor"
            >
              <option
                className="escolherProjetor"
                value="Escolher"
                id="escolherProjetor"
              >
                Escolher
              </option>
              <option className="simProjetor" value="Sim" id="simProjetor">
                Sim
              </option>
              <option className="naoProjetor" value="Não" id="naoProjetor">
                Não
              </option>
            </select>
          </label>

          <label>
            Possui gaiola para instalação de projetor?
            <select
              type="select"
              className="gaiolaProjetor"
              placeholder="Possui gaiola para instalação de projetor?"
              id="gaiolaProjetor"
            >
              <option
                className="escolherGaiola"
                value="Escolher"
                id="escolherGaiola"
              >
                Escolher
              </option>
              <option className="simGaiola" value="Sim" id="simGaiola">
                Sim
              </option>
              <option className="naoGaiola" value="Não" id="naoGaiola">
                Não
              </option>
            </select>
          </label>

          <label>
            Possui projetor instalado?
            <select
              type="select"
              className="possuiProjetor"
              placeholder="Possui projetor instalado?"
              id="possuiProjetor"
            >
              <option
                className="escolherPossuiProjetor"
                value="Escolher"
                id="escolherPossuiProjetor"
              >
                Escolher
              </option>
              <option className="simProjetor" value="Sim" id="simProjetor">
                Sim
              </option>
              <option className="naoProjetor" value="Não" id="naoProjetor">
                Não
              </option>
            </select>
          </label>

          <label>
            Possui quadro / lousa?
            <select
              type="select"
              className="possuiQuadroLousa"
              placeholder="Possui quadro / lousa?"
              id="possuiQuadroLousa"
            >
              <option
                className="escolherPossuiQuadroLousa"
                value="Escolher"
                id="escolherPossuiQuadroLousa"
              >
                Escolher
              </option>
              <option
                className="simQuadroLousa"
                value="Sim"
                id="simQuadroLousa"
              >
                Sim
              </option>
              <option
                className="naoQuadroLousa"
                value="Não"
                id="naoQuadroLousa"
              >
                Não
              </option>
            </select>
          </label>

          <label>
            Possui condicionador de ar?
            <select
              type="select"
              className="possuiCondicionadorAr"
              placeholder="Possui condicionador de ar?"
              id="possuiCondicionadorAr"
            >
              <option
                className="escolherPossuiCondicionadorAr"
                value="Escolher"
                id="escolherPossuiCondicionadorAr"
              >
                Escolher
              </option>
              <option
                className="simCondicionadorAr"
                value="Sim"
                id="simCondicionadorAr"
              >
                Sim
              </option>
              <option
                className="naoCondicionadorAr"
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
              className="potenciaWattsCondicionadorAr"
              placeholder="potência em Watts"
              id="potenciaWattsCondicionadorAr"
            ></input>
          </label>

          <label>
            Tipo de teto:
            <select
              type="select"
              className="tipoTeto"
              placeholder="Selecione o tipo de teto"
              id="tipoTeto"
            >
              <option
                className="escolherTipoTeto"
                value="Escolher"
                id="escolherTipoTeto"
              >
                Escolher
              </option>
              <option
                className="lajeConcreto"
                value="Laje de concreto"
                id="lajeConcreto"
              >
                Laje de concreto
              </option>
              <option
                className="madeiraTelhasSemForro"
                value="Madeira e telhas sem forro"
                id="madeiraTelhasSemForro"
              >
                Madeira e telhas sem forro
              </option>
              <option
                className="madeiraTelhasComForroPVC"
                value="Madeira e telhas com forro (PVC)"
                id="madeiraTelhasComForroPVC"
              >
                Madeira e telhas com forro (PVC)
              </option>
              <option
                className="madeiraTelhasComForroGesso"
                value="Madeira e telhas com forro (gesso)"
                id="madeiraTelhasComForroGesso"
              >
                Madeira e telhas com forro (gesso)
              </option>
            </select>
          </label>
          <label>
            Tipo de iluminação:
            <select
              type="select"
              className="tipoIluminacao"
              placeholder="Selecione o tipo de iluminação"
              id="tipoIluminacao"
            >
              <option
                className="escolherTipoIluminacao"
                value="Escolher"
                id="escolherTipoIluminacao"
              >
                Escolher
              </option>
              <option
                className="lampadaFluorescente"
                value="Lâmpada tubular (fluorescente)"
                id="lampadaFluorescente"
              >
                Lâmpada tubular (fluorescente)
              </option>
              <option
                className="lampadaLED"
                value="Lâmpada tubular (LED)"
                id="lampadaLED"
              >
                Lâmpada tubular (LED)
              </option>
              <option
                className="posteLED"
                value="Poste maior que 4 metros (LED)"
                id="posteLED"
              >
                Poste maior que 4 metros (LED)
              </option>
              <option
                className="lampadaRosqueavel"
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
              className="quantLampadas"
              placeholder="Quantidade de lâmpadas"
              id="quantLampadas"
            ></input>
          </label>
        </form>
      </>
    )
  } else {
    return <h5>Você não possui permissão para acessar esta área do site</h5>
  }
}
