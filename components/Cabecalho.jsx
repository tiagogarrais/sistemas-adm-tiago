import Link from 'next/dist/client/link'
import { useSession, signOut } from 'next-auth/react'

export default function Cabecalho() {
  const { data: session } = useSession()

  return (
    <div>
      <h1 id="titulo">Portfólio digital - Adm. Tiago Arrais</h1>
    </div>
  )
}
