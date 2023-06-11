import { useSession } from 'next-auth/react'
import Contador from '../../components/contador-regressivo/Contador'
import ProximasViagens from '../../components/transportes/ProximasViagens'
import SolicitarVeiculo from '../../components/transportes/SolicitarVeiculo'

export default function Transportes() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <h1>Transportes do Instituto de Formação de Educadores</h1>
        <ProximasViagens />
        <SolicitarVeiculo />
      </div>
    )
  }

  return (
    <div>
      <Contador />
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  )
}
