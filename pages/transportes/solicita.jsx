import { useSession } from 'next-auth/react'
import SolicitarVeiculo from '../../components/transportes/SolicitarVeiculo'

export default function Solicita() {
  const { data: session } = useSession()

  return <SolicitarVeiculo />
}
