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
                    Infraestrutura Física do campus Brejo Santo. Participe com
                    suas ideias ou simplesmente consulte as ideias cadastradas.{" "}
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
                    Sistema criado para solicitar veículos, verificar o
                    andamento de solicitações e dar transparência ao uso dos
                    veículos oficiais.
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>

        <div className="container my-4 mx-auto md:px-12">
          <div className="flex flex-wrap">
            <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
              <Link className="link" href="/descricao-tecnica">
                <article className="min-h-300 min-h-full">
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <b>Descrição Técnica para Licitação</b>
                  </header>
                  <p>
                    Descrições técnicas de itens que foram ou que serão
                    comprados do campus Brejo Santo.
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>

        <div className="button">
          <Link href="/compras/compras">Compras</Link>
        </div>

        <div className="button">
          <Link href="/empresta/empresta">Empréstimos</Link>
        </div>

        <div className="button">
          <a
            href="https://docs.google.com/spreadsheets/d/1SS8IzJZL9aUk9iKRTvBVN7mMRuy-afMtAVqzOJeOI84/edit#gid=0"
            target="_blank"
          >
            Reserva de ambientes
          </a>
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="button">
            <a
              href="https://ifeadm.16mb.com/relatoriosadmufca/ifeadm/relatorios/ambientes-ife-frequencia-limpeza.php"
              target="_blank"
            >
              Relatório de frequência de limpeza e serventes
            </a>
          </div>

          <div className="button">
            <a href="https://processos.ifeadm.16mb.com" target="_blank">
              Processos Administrativos IFE
            </a>
          </div>

          <div className="button">
            <a href="http://raiolaser.16mb.com" target="_blank">
              WikiAdm
            </a>
          </div>

          <h2>
            Sistemas desenvolvidos para compartilhar conteúdo didático e
            instrucional
          </h2>

          <div className="button">
            <a href="https://conexaofuturo.com.br" target="_blank">
              Plataforma de cursos
            </a>
          </div>

          <h2>Loja virtual</h2>

          <div className="button">
            <a href="https://feiralivrebrejosanto.com.br" target="_blank">
              Feira Livre Brejo Santo
            </a>
          </div>

          <h2>Redes Sociais Corporativas</h2>

          <div className="button">
            <a href="https://instagram.com/comprestellamaris" target="_blank">
              Loja Stella Maris
            </a>
          </div>

          <div className="button">
            <a href="https://instagram.com/paodastellamaris" target="_blank">
              Pão da Stella Maris
            </a>
          </div>

          <div className="button">
            <a href="https://facebook.com/feiralivrebrejosanto" target="_blank">
              Site Feira Livre Brejo Santo
            </a>
          </div>

          <h2>Criações e Hobbies</h2>
          <div className="button">
            <a
              href="https://www.tiktok.com/@tiagoarraisdeholanda/video/7223301127473827078"
              target="_blank"
            >
              Como fazer o Pão da Stella Maris?
            </a>
          </div>

          <div className="button">
            <a
              href="https://processos.ifeadm.16mb.com/tiago-processos/como-verificar-se-o-dea-desfiblilador-externo-automatico-esta-funcionando-adequadamente/"
              target="_blank"
            >
              Como verificar se o Desfibrilador Externo Automático - DEA está
              funcionando adequadamente?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
