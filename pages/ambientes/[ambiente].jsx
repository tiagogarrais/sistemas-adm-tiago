import { useSession } from 'next-auth/react'
import { MostrarAmbiente } from '../../components/mostrar-ambiente/Mostrar-ambiente'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Listagem from './listagem'

export default function Ambientes() {
  const tituloPagina = 'Ambientes IFE'
  const { data: session } = useSession()

  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiFoto = '/images/ambientes/' + ambiente + '.jpg'

  if (session) {
    return (
      <div>
        <title>{tituloPagina}</title>
        <meta name="description" content={tituloPagina} />
        <main>
          <Link className="button" href="/ambientes/listagem">
            Listagem de ambientes - campus Brejo Santo
          </Link>
          <h1>{tituloPagina}</h1>
          <div className="center">
            <div>
              <Image
                src={linkApiFoto}
                alt="Foto do ambiente"
                width={1500}
                height={1500}
              />
            </div>
          </div>
          <MostrarAmbiente />
          <hr />
          <hr />
        </main>
      </div>
    )
  }
  return <p>Não</p>
}
