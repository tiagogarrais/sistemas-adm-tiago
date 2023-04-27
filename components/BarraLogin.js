import { useSession, signIn, signOut } from 'next-auth/react'
import BotaoPadrao from './BotaoPadrao'

export default function BarraLogin() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div id="barra-login">
          Bem vindo(a) {session.user.email}
          <BotaoPadrao nome="Página principal" href="/" />
          <BotaoPadrao nome="Meu cadastro" href="/cadastro/cadastro" />
          <button onClick={() => signOut()}><BotaoPadrao nome="Desconectar" href="/"/></button>
        </div>
      </>
    )
  }

  return (
    <>
      <div id="barra-login">
        Não logado
        <button onClick={() => signIn()}>Entrar</button>
      </div>
    </>
  )
}
