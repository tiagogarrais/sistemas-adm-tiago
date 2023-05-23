import { useSession } from 'next-auth/react'
import { MostrarAmbiente } from '../../components/mostrar-ambiente/Mostrar-ambiente'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Listagem from './listagem'
import { NodeNextRequest } from 'next/dist/server/base-http/node'

export default function Ambientes() {
  const tituloPagina = 'Ambientes IFE'
  const { data: session } = useSession()

  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiFoto = '/images/ambientes/' + ambiente + '.jpg'

  function imprimir() {
    document.getElementById('titulo').style.display = 'none'
    document.getElementById('titulo-pagina').style.display = 'none'
    document.getElementById('barra-login').style.display = 'none'
    document.getElementById('listagem').style.display = 'none'
    document.getElementById('imprimir').style.display = 'none'
  }

  if (session) {
    return (
      <div>
        <title>{tituloPagina}</title>
        <meta name="description" content={tituloPagina} />
        <main>
          <Link id="listagem" className="button" href="/ambientes/listagem">
            Listagem de ambientes - campus Brejo Santo
          </Link>
          <h1 id="titulo-pagina">{tituloPagina}</h1>
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
          <button id="imprimir" onClick={imprimir}>
            Versão para impressão
          </button>
          <hr />
        </main>
      </div>
    )
  }
  return <p>Não</p>
}
