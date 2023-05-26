import Link from 'next/dist/client/link'
import { useSession, signOut } from 'next-auth/react'

export default function Cabecalho() {
  const { data: session } = useSession()

  return (
    <div>
      <h1 id="titulo">www.admtiago.com.br</h1>
      <div>
        <article>
          Respeito - Responsabilidade - Inovação - Transparência
        </article>
      </div>
    </div>
  )
}
