import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Controles() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/ver-controles")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  function calcularProximaExecucao(dataUltimaExecucao, frequencia) {
    const hoje = new Date();
    const ultimaExecucao = new Date(Date.parse(dataUltimaExecucao));
    ultimaExecucao.setDate(ultimaExecucao.getDate() + frequencia);
    const diffTime = ultimaExecucao.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  const confirmarExecucao = async (controleId, email, nome) => {
    const confirmado = window.confirm(
      "Deseja confirmar a execução desta tarefa?"
    );
    if (confirmado) {
      const response = await fetch("/api/v1/atualizar-controles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          controleId: controleId,
          email: email,
          nome: nome,
        }),
      });
      if (response.ok) {
        // Atualizar localmente os dados após a confirmação
        const newData = data.map((controle) => {
          if (controle._id === controleId) {
            const hoje = new Date();
            controle.dataUltimaExecucao = hoje.toISOString(); // Atualiza a dataUltimaExecucao para a data atual
          }
          return controle;
        });
        setData(newData);
        alert("Tarefa confirmada com sucesso!");
      } else {
        alert(
          "Ocorreu um erro ao confirmar a tarefa. Tente novamente mais tarde."
        );
      }
    }
  };

  if (isLoading) return <p>Buscando informações...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <h2>Painel de Controle - Administração campus Brejo Santo</h2>
      <div className="container my-4 mx-auto md:px-12">
        <div className="flex flex-wrap">
          {data.map((controle, index) => (
            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <article className="min-h-300 min-h-full">
                <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                  <h4>
                    <b>{controle.nome}</b>
                  </h4>
                </header>
                <p>{controle.descricao}</p>
                <p>
                  <b>
                    Próxima execução em até{" "}
                    {calcularProximaExecucao(
                      controle.dataUltimaExecucao,
                      parseInt(controle.intervaloEmDias)
                    )}{" "}
                    dia(s)
                  </b>{" "}
                </p>
                <p>
                  Este processo é executado a cada {controle.intervaloEmDias}{" "}
                  dias
                </p>
                {session && (
                  <button
                    onClick={() =>
                      confirmarExecucao(
                        controle._id,
                        session.user.email,
                        controle.nome
                      )
                    }
                  >
                    Confirmar execução
                  </button>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
