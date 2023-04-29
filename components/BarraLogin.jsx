import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function BarraLogin() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div id="barra-login">
          Bem vindo(a) {session.user.email}
          <Link href="/">Página principal</Link>
          <Link href="/cadastro/cadastro">Meu cadastro</Link>
          <button onClick={() => signOut()}>Desconectar</button>
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
