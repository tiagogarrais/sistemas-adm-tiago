import { useSession, signIn } from "next-auth/react"

export default function VerCadastro() {

  const { data: session } = useSession()

  if (session) {
    return (
      <div className="conteudo">
            <p>Você está logado usando este e-mail: {session.user.email}</p>
      </div>
    )
  }
  return (
    <>
      <div className='conteudo'>
        <p>Para acessar este conteúdo é necessário fazer login</p>
        <button onClick={() => signIn()}>Entrar</button>
      </div>
    </>
  )
}