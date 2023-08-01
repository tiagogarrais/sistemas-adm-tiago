import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function DescricaoTecnica() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <h1>Descrição técnica</h1>
        <h4>Sistema em desenvolvimento</h4>
        <Link href="/descricao-tecnica/cadastrar-item">
          <button>Cadastrar novo item</button>
        </Link>
      </>
    )
  }

  return (
    <div>
      <p>Aguarde 5 segundos ou faça login para ter acesso a este conteúdo.</p>
    </div>
  )
}
