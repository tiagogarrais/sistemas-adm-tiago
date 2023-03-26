import { useSession } from 'next-auth/react'
//import Head from 'next/head'
//import { Footer } from '../../components/footer/Footer'
//import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
//import { NaoLogado } from '../../components/nao-logado/NaoLogado'
import { BuscarAmbiente } from '../../components/buscar-ambiente/Buscar-ambiente'
import { MostrarAmbiente } from '../../components/mostrar-ambiente/Mostrar-ambiente'

export default function Ambientes() {
  const tituloPagina = 'Ambientes IFE'
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        {/* <Head> */}
          <title>{tituloPagina}</title>
          <meta name="description" content={tituloPagina} />
          <link rel="icon" href="/favicon.ico" />
        {/* </Head> */}
        {/* <MenuSuperior /> */}
        <main>
          <h1>{tituloPagina}</h1>
          <MostrarAmbiente />
          <hr/>
          <BuscarAmbiente />
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
  return <p>Não</p>
}