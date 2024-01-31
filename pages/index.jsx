import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? sessionStorage.setItem("email", session.user.email) : ""}
      <div>
        <div className="button">
          <Link href="/cadastro/cadastro">Meu cadastro</Link>
        </div>
        <h2>Sistemas desenvolvidos para a UFCA - neste site</h2>

        <div className="container my-4 mx-auto md:px-12">
          <div className="flex flex-wrap">
            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <Link className="link" href="/ambientes/listagem">
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Ambientes IFE</b>
                  </header>
                  <p>
                    Informações técnicas atualizadas sobre todos os ambientes do
                    campus Brejo Santo
                  </p>
                </article>
              </Link>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <Link className="link" href="/brainstorming/brainstorming">
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Brainstorming</b>
                  </header>
                  <p>
                    Sistema criado para coletar ideias sobre o tema
                    Infraestrutura Física do campus Brejo Santo.
                  </p>
                </article>
              </Link>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <Link className="link" href="/transportes/">
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Transportes</b>
                  </header>
                  <p>
                    Solicitar veículos, verificar o andamento de solicitações e
                    dar transparência ao uso dos veículos oficiais do campus
                    Brejo Santo.
                  </p>
                </article>
              </Link>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <Link className="link" href="/compras/compras">
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Compras IFE</b>
                  </header>
                  <p>
                    Informações e sistemas criados para apoiar o processo de
                    compras no campus Brejo Santo.
                  </p>
                </article>
              </Link>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <Link className="link" href="/empresta/empresta">
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Empréstimos IFE</b>
                  </header>
                  <p>
                    Informações e sistemas criados para apoiar a atividade de
                    empréstimos no campus Brejo Santo.
                  </p>
                </article>
              </Link>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <a
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1SS8IzJZL9aUk9iKRTvBVN7mMRuy-afMtAVqzOJeOI84/edit#gid=0"
              >
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Reserva de ambientes</b>
                  </header>
                  <p>
                    Informações e sistemas criados para apoiar a atividade de
                    reserva de ambientes no campus Brejo Santo.
                  </p>
                </article>
              </a>
            </div>
          </div>
        </div>

        <h2>Sistemas desenvolvidos para a UFCA - em outros sites</h2>

        <div className="button">
          <a href="https://processos.ifeadm.com.br" target="_blank">
            Processos Administrativos IFE
          </a>
        </div>

        <div className="button">
          <a href="http://raiolaser.16mb.com" target="_blank">
            WikiAdm
          </a>
        </div>

        <div className="button">
          <a href="https://conexaofuturo.com.br" target="_blank">
            Plataforma de cursos
          </a>
        </div>

        <h2>Biblioteca de objetos digitais</h2>

        <div className="button">
          <a
            href="https://processos.ifeadm.com.br/tiago-processos/como-verificar-se-o-dea-desfiblilador-externo-automatico-esta-funcionando-adequadamente/"
            target="_blank"
          >
            Como verificar se o Desfibrilador Externo Automático - DEA está
            funcionando adequadamente?
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=63"
            target="_blank"
          >
            Conhecendo os sólidos geométricos 1
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=64"
            target="_blank"
          >
            Conhecendo os sólidos geométricos 2
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=57"
            target="_blank"
          >
            Curiosidades sobre a floresta amazônica
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=58"
            target="_blank"
          >
            Animais da Amazônia
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=59"
            target="_blank"
          >
            Jogo da memória - Tema: Araucárias
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=60"
            target="_blank"
          >
            Mata atlântica
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=61"
            target="_blank"
          >
            Consciência Negra
          </a>
        </div>
      </div>
    </div>
  );
}
