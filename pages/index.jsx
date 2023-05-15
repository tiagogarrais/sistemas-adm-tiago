import { useSession } from 'next-auth/react'
import Contador from '../components/contador-regressivo/Contador'
import Link from 'next/link'
import ambientes from '../public/images/ambientes.jpg'
import brainstorming from '../public/images/brainstorming.jpg'
import transportes from '../public/images/transportes.jpg'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        {sessionStorage.setItem('email', session.user.email)}
        <div>
          <div className="button">
            <Link href="/cadastro/cadastro">Meu cadastro</Link>
          </div>
          <h2>Sistemas desenvolvidos para a UFCA - neste site</h2>

          <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <Link className="link" href="/ambientes/1">
                  <article>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <p className="text-lg">Ambientes</p>
                    </header>
                    <Image
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src={ambientes}
                    />
                  </article>
                </Link>
              </div>

              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <Link className="link" href="/brainstorming/brainstorming">
                  <article>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <p className="text-lg">Brainstorming</p>
                    </header>
                    <Image
                      alt="brainstorming campus Brejo Santo"
                      class="block h-auto w-full"
                      src={brainstorming}
                    />
                  </article>
                </Link>
              </div>

              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <Link className="link" href="/transportes/">
                  <article>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <p className="text-lg">Transportes</p>
                    </header>
                    <Image
                      alt="transportes campus Brejo Santo"
                      class="block h-auto w-full"
                      src={transportes}
                    />
                  </article>
                </Link>
              </div>
            </div>
          </div>

          <h2>Sistemas desenvolvidos para a UFCA - em outros sites</h2>

          <div className="button">
            <a href="https://ifeadm.16mb.com" target="_blank">
              Site IFE-ADM
            </a>
          </div>

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

          <h2>Redes Sociais Pessoais</h2>
          <div className="button">
            <a href="https://tiktok.com/@tiagoarraisdeholanda" target="_blank">
              TikTok
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div id="timer">
        <h2>
          <Contador />
        </h2>
      </div>
      <p>
        Aguarde a contagem regressiva, se acabar é necessário fazer login no
        site.
      </p>
    </div>
  )
}
