import { useSession } from 'next-auth/react'
import Contador from '../../components/contador-regressivo/Contador'
import ProximasViagens from '../../components/transportes/ProximasViagens'
import Image from 'next/image'
import Link from 'next/link'

export default function Transportes() {
  const { data: session } = useSession()
  const raioTransportes =
    'http://raiolaser.16mb.com/images/2/2a/Raio-transportes-ufca.jpeg'
  if (session) {
    return (
      <div>
        <h1>Transportes do Instituto de Formação de Educadores</h1>
        <p>
          Atenção: Este sistema ainda está em fase de desenvolvimento. As
          solicitações oficiais de transporte do campus Brejo Santo devem ser
          solicitadas pelo site
        </p>
        <p>
          <a href="https://ifeadm.16mb.com/transportes">
            https://ifeadm.16mb.com/transportes
          </a>
        </p>
        <div className="button">
          <Link href="/transportes/solicita">Solicitar viagem</Link>
        </div>
        <h4>Dados gerais sobre viagem em veículos oficiais</h4>
        <div>
          <div className="center">
            <Image
              src={raioTransportes}
              width="1100"
              height="1100"
              alt="Atuação permitida do serviço de transportes: raio de 800 km à partir da sede - Juazeiro do Norte"
            ></Image>
          </div>
          Atenção: Atuação permitida do serviço de transporte terrestre da UFCA:
          Raio de 800 km à partir da sede - Juazeiro do Norte
        </div>

        <ProximasViagens />
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
