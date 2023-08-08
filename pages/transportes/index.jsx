import { useSession } from 'next-auth/react'
import Contador from '../../components/contador-regressivo/Contador'
import ProximasViagens from '../../components/transportes/ProximasViagens'
import Link from 'next/link'

export default function Transportes() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12">
        <h1>Transportes do Instituto de Formação de Educadores</h1>
        <div className="button">
          <Link href="/transportes/informacoes">
            Informações sobre o serviço de Transportes
          </Link>
        </div>
        <div className="button">
          <Link href="/transportes/solicita">Solicitar viagem</Link>
        </div>
        <div>
          <ProximasViagens />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Contador />
      <p>Para acessar este conteúdo é necessário fazer login</p>
    </div>
  )
}
