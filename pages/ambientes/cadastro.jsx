import { useSession } from 'next-auth/react'

export default function Listagem() {
  const { data: session } = useSession()

  if (session && session.user.email === 'tiago.arrais@ufca.edu.br') {
    return (
      <>
        <h1>Cadastro de ambientes</h1>
        <form>
          <input
            type="input"
            className="nomeAmbiente"
            placeholder="Nome do ambiente"
          ></input>
        </form>
      </>
    )
  } else {
    return 'Você não possui permissão para acessar esta função'
  }
}
