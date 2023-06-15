import { useSession } from 'next-auth/react'
import Link from 'next/link'
import ambientes from '../public/images/ambientes.jpg'
import brainstorming from '../public/images/brainstorming.jpg'
import transportes from '../public/images/transportes.jpg'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div>
      {session ? sessionStorage.setItem('email', session.user.email) : ''}
      <div>
        <div className="button">
          <Link href="/cadastro/cadastro">Meu cadastro</Link>
        </div>
        <h2>Sistemas desenvolvidos para a UFCA - neste site</h2>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <Link className="link" href="/ambientes/1">
                <article>
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <p className="text-lg">Ambientes</p>
                  </header>
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full"
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
                    className="block h-auto w-full"
                    src={brainstorming}
                  />
                </article>
              </Link>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <Link className="link" href="/transportes/">
                <article>
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <p className="text-lg">Transportes (Em desenvolvimento)</p>
                  </header>
                  <Image
                    alt="transportes campus Brejo Santo"
                    className="block h-auto w-full"
                    src={transportes}
                  />
                </article>
              </Link>
            </div>
          </div>
        </div>

        <h2>Sistemas desenvolvidos para a UFCA - em outros sites</h2>

        <div className="container my-12 mx-auto px-4 md:px-12">
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
  )
}
