import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function BarraLogin() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div id="barra-login">
          <button onClick={() => signOut()}>Desconectar</button>
          Bem vindo(a) {session.user.email}
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
