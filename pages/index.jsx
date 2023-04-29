import { useSession, signIn } from 'next-auth/react'
import Contador from '../components/contador-regressivo/Contador'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        {sessionStorage.setItem('email', session.user.email)}

        <div>
          <h2>Sistemas desenvolvidos para a UFCA</h2>
          <Link className="link" href="/brainstorming/brainstorming">
            Brainstorming
          </Link>
          <Link className="link" href="/ambientes/0">
            Ambientes IFE
          </Link>
          <Link className="link" href="/transportes/">
            Transportes IFE
          </Link>
          <a
            href="https://ifeadm.16mb.com/relatoriosadmufca/ifeadm/relatorios/ambientes-ife-frequencia-limpeza.php"
            target="_blank"
          >
            Frequência de limpeza
          </a>
          <a href="https://processos.ifeadm.16mb.com" target="_blank">
            Processos Administrativos IFE
          </a>

          <a href="https://ifeadm.16mb.com" target="_blank">
            Site IFE-ADM
          </a>

          <a href="http://raiolaser.16mb.com" target="_blank">
            WikiAdm
          </a>

          <h2>
            Sistemas desenvolvidos para compartilhar conteúdo didático e
            instrucional
          </h2>
          <a href="https://conexaofuturo.com.br" target="_blank">
            Plataforma de cursos
          </a>

          <h2>Loja virtual</h2>

          <a href="https://feiralivrebrejosanto.com.br" target="_blank">
            Feira Livre Brejo Santo
          </a>

          <h2>Redes Sociais Corporativas</h2>

          <a href="https://instagram.com/comprestellamaris" target="_blank">
            Loja Stella Maris
          </a>

          <a href="https://instagram.com/paodastellamaris" target="_blank">
            Pão da Stella Maris
          </a>

          <a href="https://facebook.com/feiralivrebrejosanto" target="_blank">
            Site Feira Livre Brejo Santo
          </a>

          <h2>Redes Sociais Pessoais</h2>

          <a href="https://tiktok.com/@tiagoarraisdeholanda" target="_blank">
            TikTok
          </a>
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
