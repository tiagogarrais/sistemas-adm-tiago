import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import minivan from '../public/images/transportes/minivan-spin.jpg'
import onibus from '../public/images/transportes/onibus-urbano.jpg'

export default function SolicitarVeiculo() {
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

  const { data: session } = useSession()
  const [nomeCadastrado, setNomeCadastrado] = useState('Carregando...')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('Carregando...')
  const [emailCadastrado, setEmailCadastrado] = useState('Carregando...')

  const raioTransportes =
    'http://raiolaser.16mb.com/images/2/2a/Raio-transportes-ufca.jpeg'

  if (session) {
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
              <Link href="/cadastro/atualizar">
                Se as informações estiverem incorretas clique aqui para
                atualizar o seu cadastro
              </Link>
            </div>

            <h3>Qual o veículo que melhor atende sua demanda??</h3>
            <div id="duas-colunas">
              <label htmlFor="veiculo">
                <input
                  type="radio"
                  name="veiculo"
                  value="SPIN - 6 vagas + motorista"
                  id="minivan"
                  required
                />
                <Image
                  alt="Minivan Spin"
                  src={minivan}
                  width={500}
                  height={500}
                  onClick={() => {
                    document.getElementById('minivan').checked = true
                  }}
                />
              </label>
              <p>
                A minivan Spin pode transportar até 6 passageiros + 1 motorista
              </p>

              <label htmlFor="tipo">
                <input
                  type="radio"
                  name="veiculo"
                  value="Ônibus - 44 vagas + motorista"
                  id="onibus"
                ></input>
                <Image
                  alt="Ônibus urbano"
                  src={onibus}
                  width={500}
                  height={500}
                  onClick={() => {
                    document.getElementById('onibus').checked = true
                  }}
                />
              </label>
              <p>
                O ônibus urbano pode transportar até 44 passageiros + 1
                motorista
              </p>
            </div>

            <h3>Dados da viagem</h3>

            <p>
              Atenção: Atuação permitida do serviço de transporte terrestre da
              UFCA: Raio de 800 km à partir da sede - Juazeiro do Norte
            </p>
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

            <label>
              UF destino
              <br />
              <select id="estado" name="estado">
                <option value="CE">Ceará</option>
                <option value="AL">Alagoas</option>
                <option value="BA">Bahia</option>
                <option value="MA">Maranhão</option>
                <option value="PB">Paraíba</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="SE">Sergipe</option>
              </select>
            </label>

            <label>
              Cidade destino <input type="text" required></input>
            </label>

            <label>
              Data da viagem
              <input type="date" name="data-ida" id="data-ida" required />
            </label>

            <label>
              Hora da saída
              <input type="time" name="hora-ida" id="hora-ida" required />
            </label>

            <label>
              Data do retorno
              <input
                type="date"
                name="data-retorno"
                id="data-retorno"
                required
              />
            </label>
            <label>
              Hora retorno
              <input
                type="time"
                name="hora-retorno"
                id="hora-retorno"
                required
              />
            </label>

            <h3>Local de saída</h3>
            <p>Se for necessário pode-se marcar mais de uma opção.</p>

            <label htmlFor="local1">
              <input
                type="checkbox"
                name="local1"
                id="local1"
                value="Prédio Sede do IFE, Bairro Centro."
                defaultChecked
              />
              Prédio Sede do IFE, Bairro Centro.
            </label>

            <label htmlFor="local2">
              <input
                type="checkbox"
                name="local2"
                id="local2"
                value="Praça Dionísio Rocha de Lucena, Bairro Centro."
              />
              Praça Dionísio Rocha de Lucena, Bairro Centro.
            </label>

            <label htmlFor="local3">
              <input
                type="checkbox"
                name="local3"
                id="local3"
                value="Posto Abaiara (quando não houver desvio de trajeto)"
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
              />
              Recebimento de avaliadores do MEC
            </label>

            <label htmlFor="objetivo2">
              <input
                type="checkbox"
                name="objetivo2"
                id="objetivo2"
                value="Reuniões agendadas pelo setor de transportes com os motoristas"
              />
              Reuniões agendadas pelo setor de transportes com os motoristas
            </label>

            <label htmlFor="objetivo3">
              <input
                type="checkbox"
                name="objetivo3"
                id="objetivo3"
                value="Reunião com calendário definido previamente e que envolve representação do IFE"
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
              />
              Mudança de prédio
            </label>

            <label htmlFor="objetivo5">
              <input
                type="checkbox"
                name="objetivo5"
                id="objetivo5"
                value="Eventos de colação de grau"
              />
              Eventos de colação de grau
            </label>

            <label htmlFor="objetivo6">
              <input
                type="checkbox"
                name="objetivo6"
                id="objetivo6"
                value="Montagem de estande na ExpoBrejo"
              />
              Montagem de estande na ExpoBrejo
            </label>

            <label htmlFor="objetivo7">
              <input
                type="checkbox"
                name="objetivo7"
                id="objetivo7"
                value="Revisões dos veículos, quando estas não puderem ser feitas em datas sem agendamentos"
              />
              Revisões dos veículos, quando estas não puderem ser feitas em
              datas sem agendamentos
            </label>

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
                value="Assistência estudantil do IFE"
              />
              Assistência estudantil do IFE
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

            <h3>O solicitante também vai no veículo?</h3>
            <label htmlFor="solicitante-vai">
              <input
                type="radio"
                name="solicitante-vai"
                value={true}
                required
              />
              Sim
              <br />
              <input type="radio" name="solicitante-vai" value={false} />
              Não
            </label>

            <h3>Listagem de passageiros</h3>
            <label>
              <table>
                <tr>
                  <th>Número</th>
                  <th>Nome</th>
                  <th>Documento</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>9</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>13</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>14</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>15</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>17</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>18</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>20</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>21</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>22</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>23</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>24</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>25</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>27</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>28</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>29</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>30</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>31</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>32</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>33</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>34</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>35</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>36</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>37</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>38</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>39</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>40</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>41</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>42</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>43</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>44</td>
                  <td>
                    <input type="text" placeholder="Nome completo"></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Doc de identificação ou SIAPE"
                    ></input>
                  </td>
                </tr>
              </table>
            </label>

            <button type="submit">Enviar dados</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
