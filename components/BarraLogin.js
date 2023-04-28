import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function BarraLogin() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div id="barra-login">
          Bem vindo(a) {session.user.email}
          <Link href='./'>Página principal</Link>
          <button nome="Meu cadastro" href="/cadastro/cadastro" />
          <button onClick={() => signOut()}><button nome="Desconectar" href="/"/></button>
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
