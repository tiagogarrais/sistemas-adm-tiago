import { useSession } from 'next-auth/react'
import ListagemAmbientes from '../../components/buscar-ambiente/Listagem-ambientes'

export default function Listagem() {
  const { data: session } = useSession()

  if (session) {
    return <ListagemAmbientes />
  }
}
