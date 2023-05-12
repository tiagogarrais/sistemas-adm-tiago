import { useSession } from 'next-auth/react'
import Contador from '../components/contador-regressivo/Contador'
import Link from 'next/link'

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

          <div className="button">
            <Link className="link" href="/brainstorming/brainstorming">
              Brainstorming
            </Link>
          </div>

          <div className="button">
            <Link className="link" href="/ambientes/1">
              Ambientes IFE
            </Link>
          </div>

          <div className="button">
            <Link className="link" href="/transportes/">
              Transportes IFE
            </Link>
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
