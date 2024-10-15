import React, { useState, useEffect } from "react";
import Image from "next/image";
import minivan from "/public/images/transportes/minivan-spin.jpg";
import onibus from "/public/images/transportes/onibus-urbano.jpg";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProximasViagens() {
  const router = useRouter();
  const { data: session } = useSession();
  const [proximasViagens, setProximasViagens] = useState([]);
  const [statusAlterado, setStatusAlterado] = useState("");

  function alterarStatus(evt) {
    if (
      session.user.email !== "natacha.pinho@ufca.edu.br" &&
      session.user.email !== "ife@ufca.edu.br" &&
      session.user.email !== "alexsandra.tavares@ufca.edu.br" &&
      session.user.email !== "clarisse.alves@ufca.edu.br" &&
      session.user.email !== "daniel.brandom@ufca.edu.br"
    ) {
      const options = Array.from(
        document.getElementsByClassName("statusViagem")
      );
      options.forEach((option) => {
        option.disabled = true;
      });
      return;
    }

    setStatusAlterado(evt.target.value);
  }

  function atualizarStatus(_idStatus) {
    axios
      .patch("/api/transportes/transportes", {
        _id: _idStatus,
        statusViagem: statusAlterado,
      })
      .then(function (res) {
        router.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function enviarEmailConfirmacao(proximasViagens) {
    event.preventDefault();

    //Capturar e converter a data da ida
    const dataIdaRecebida = new Date(proximasViagens.dataIda);
    const diaIda = dataIdaRecebida.getDate();
    const mesIda = dataIdaRecebida.getMonth();
    const anoIda = dataIdaRecebida.getFullYear();
    const horaIda = dataIdaRecebida.getHours();
    const minutoIda = dataIdaRecebida.getMinutes();
    const dataIdaConvertida = `${String(diaIda).padStart(2, "0")}/${String(
      mesIda + 1
    ).padStart(2, "0")}/${anoIda}`;
    const horaIdaConvertida = `${String(horaIda).padStart(2, "0")}:${String(
      minutoIda
    ).padStart(2, "0")}`;

    //Capturar e converter a data do retorno
    const dataRetornoRecebida = new Date(proximasViagens.dataRetorno);
    const diaRetorno = dataRetornoRecebida.getDate();
    const mesRetorno = dataRetornoRecebida.getMonth();
    const anoRetorno = dataRetornoRecebida.getFullYear();
    const horaRetorno = dataRetornoRecebida.getHours();
    const minutoRetorno = dataRetornoRecebida.getMinutes();
    const dataRetornoConvertida = `${String(diaRetorno).padStart(
      2,
      "0"
    )}/${String(mesRetorno + 1).padStart(2, "0")}/${anoRetorno}`;
    const horaRetornoConvertida = `${String(horaRetorno).padStart(
      2,
      "0"
    )}:${String(minutoRetorno).padStart(2, "0")}`;

    //Enviar o e-mail com o status da viagem
    axios
      .post("/api/email/enviar", {
        email: proximasViagens.email,
        copia: [
          "natacha.pinho@ufca.edu.br",
          "alexsandra.tavares@ufca.edu.br",
          "marcos.francisco@ufca.edu.br",
          "ife@ufca.edu.br",
          "clarisse.alves@ufca.edu.br",
          "daniel.brandom@ufca.edu.br",
        ],
        subject: `Transportes IFE - Status: ${proximasViagens.statusViagem}`,
        message: `
        <p>
        <strong>A viagem para ${proximasViagens.cidade} - ${proximasViagens.uf} no dia ${dataIdaConvertida} foi atualizada para a seguinte situação: ${proximasViagens.statusViagem}</strong>
        </p>
        <p>
        <strong>Responsável pela solicitação</strong>
        <br>
        Viagem solicitada por: ${proximasViagens.nome}
        <br>
        Telefone para contato: ${proximasViagens.telefone}
        </p>

        <p>
        <strong>Dados da viagem</strong>
        Objetivo: ${proximasViagens.objetivo}<br>
        Veículo: ${proximasViagens.veiculo}<br>
        Tipo de solicitação: ${proximasViagens.tipo}<br>
        Destino: ${proximasViagens.cidade} - ${proximasViagens.uf}<br>
        Partida: ${dataIdaConvertida} saída às ${horaIdaConvertida}<br>
        Retorno: ${dataRetornoConvertida} retornando às ${horaRetornoConvertida}<br>
        Mais detalhes sobre a viagem podem ser consultados no site <a href="https://admtiago.com.br/transportes">https://admtiago.com.br/transportes</a>
        </p>

        
        <p>
        <strong>Informes gerais</strong><br>
        O uso do cinto de segurança é obrigatório enquanto o veículo permanecer ligado.<br>
        Os horários devem ser rigorosamente cumpridos para não extrapolar a carga horária permitida pela legislação ou atrasar outras viagens.
        </p>
        
        
        Atenciosamente,<br>

        <p>Administração do Instituto de Formação de Educadores<br>   
        Campus Brejo Santo</p>
        
        <p>Sistema desenvolvido por Adm. Tiago das Graças Arrais - CRA 11.660</p>
        
        <p>
        Atenção: Para responder esta mensagem selecione a opção "Responder para todos", assim , toda a nossa equipe recebe e pode agir de forma rápida e eficaz.
        </p>
        ${proximasViagens._id}
        `,
      })
      .catch(function (error) {
        console.log(error);
        window.alert(
          "Tente novamente! Houve algum erro no envio da solicitação."
        );
      })
      .then(
        window.alert("Confira se o e-mail chegou na sua caixa de entrada!")
      );
  }

  function desabilitarCampos() {
    //Desabilitar campos que são privativos dos operadores do sistema.
    if (
      session.user.email !== "natacha.pinho@ufca.edu.br" &&
      session.user.email !== "alexsandra.tavares@ufca.edu.br" &&
      session.user.email !== "clarisse.alves@ufca.edu.br" &&
      session.user.email !== "daniel.brandom@ufca.edu.br"
    ) {
      const options = Array.from(
        document.getElementsByClassName("statusViagem")
      );
      options.forEach((option) => {
        option.disabled = true;
      });

      const buttonsSubmit = Array.from(
        document.getElementsByClassName("enviarAtualizacao")
      );
      buttonsSubmit.forEach((button) => {
        button.hidden = true;
      });

      const divsOperadores = Array.from(
        document.getElementsByClassName("operadores")
      );
      divsOperadores.forEach((button) => {
        button.hidden = true;
      });

      const selects = Array.from(document.getElementsByTagName("select"));
      selects.forEach((select) => {
        select.hidden = true;
      });
    }
  }

  function converterData(data) {
    const dataConvertida = Date.parse(data);
    const dataLocal = new Intl.DateTimeFormat("pt-BR").format(dataConvertida);
    return dataLocal;
  }

  function converterHora(data) {
    const dataConvertida = Date.parse(data);
    const horaLocal = new Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).format(dataConvertida);
    return horaLocal;
  }

  React.useEffect(() => {
    async function buscarViagens() {
      try {
        const response = await fetch("/api/transportes/proximas-viagens");
        const viagens = await response.json();
        setProximasViagens(viagens);
      } catch (error) {
        console.error("Erro ao buscar informações do banco de dados:", error);
      }
    }
    buscarViagens();
  }, []);

  function useInterval(callback, delay) {
    useEffect(() => {
      const intervalId = setInterval(callback, delay);

      return () => {
        clearInterval(intervalId);
      };
    }, [callback, delay]);
  }

  useInterval(desabilitarCampos, 600);

  return (
    <>
      <h2>Próximas viagens</h2>
      <div className="flex flex-wrap">
        {proximasViagens.map((proximasViagens) => (
          <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <article>
                <p className="font-mono text-xs">Cód: {proximasViagens._id}</p>
                <form>
                  <div className="center">
                    <input
                      type="hidden"
                      className="_id"
                      value={proximasViagens._id}
                      id={proximasViagens._id}
                    ></input>
                  </div>

                  <select className="statusViagem" onChange={alterarStatus}>
                    <option className="" value=""></option>

                    <option className="recebida" value="Recebida">
                      Recebida
                    </option>

                    <option className="aprovada" value="Aprovada pela Direção">
                      Aprovada pela Direção
                    </option>

                    <option className="confirmada" value="Confirmada">
                      Confirmada
                    </option>

                    <option
                      className="solicitanteCancelou"
                      value="Solicitante cancelou"
                    >
                      Solicitante Cancelou
                    </option>

                    <option className="naoAtendida" value="Não atendida">
                      Não atendida
                    </option>
                  </select>

                  <div className="center">
                    <button
                      type="button"
                      className="enviarAtualizacao"
                      onClick={() =>
                        atualizarStatus(
                          document.getElementById(proximasViagens._id).value
                        )
                      }
                    >
                      Atualizar informações
                    </button>
                  </div>
                </form>

                <form>
                  <div className="center">
                    <button
                      className="operadores"
                      onClick={() => enviarEmailConfirmacao(proximasViagens)}
                    >
                      Enviar status da viagem
                    </button>
                  </div>
                </form>

                <h3>{converterData(proximasViagens.dataIda)} </h3>
                <h4>{proximasViagens.statusViagem}</h4>

                <p>
                  Destino: {`${proximasViagens.cidade} - ${proximasViagens.uf}`}
                </p>
                <p>Solicitante: {proximasViagens.nome}</p>
                <p>
                  {proximasViagens.veiculo == "Minivan" ? (
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

                {/* Este botão ficará oculto até que esteja com sua funcionalidade completa.
                
                {session.user.email === proximasViagens.email &&
                proximasViagens.statusViagem === 'Recebida' ? (
                  <div className="center">
                    <button
                      onClick={() => {
                        window.alert(
                          'Isto ainda não funciona aqui. Entre em contato pelo e-mail.'
                        )
                      }}
                    >
                      Alterar Solicitação
                    </button>
                  </div>
                ) : (
                  ''
                )} */}
                <br />

                <b>
                  <p>Objetivo da viagem:</p>
                </b>
                <p> {proximasViagens.objetivo}</p>
                <br />
                <p>Data da viagem: {converterData(proximasViagens.dataIda)}</p>
                <p>
                  Horário da viagem: {converterHora(proximasViagens.dataIda)}
                </p>
                <p>
                  Data do retorno: {converterData(proximasViagens.dataRetorno)}
                </p>
                <p>
                  Horário do retorno:{" "}
                  {converterHora(proximasViagens.dataRetorno)}
                </p>
                <div id="infoAdicionais">
                  <br />
                  <b>
                    <p>Informações adicionais</p>
                  </b>
                  <p>Saída da praça central? {proximasViagens.saidaCentro}</p>
                  <p>Embarque em Abaiara? {proximasViagens.saidaAbaiara}</p>
                  <br />
                  <b>
                    <p>Solicitação com prioridade?</p>
                  </b>
                  <p>1. {proximasViagens.objetivo1}</p>
                  <p>2. {proximasViagens.objetivo2}</p>
                  <p>3. {proximasViagens.objetivo3}</p>
                  <p>4. {proximasViagens.objetivo4}</p>
                  <p>5. {proximasViagens.objetivo5}</p>
                  <p>6. {proximasViagens.objetivo6}</p>
                </div>
              </article>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
