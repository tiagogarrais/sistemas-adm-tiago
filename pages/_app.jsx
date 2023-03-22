import '../styles/globals.css'
import '../styles/cabecalho.css'
import '../styles/conteudo.css'
import '../styles/rodape.css'
import '../styles/outros-sistemas.css'
import BarraLogin from '../components/BarraLogin'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { SessionProvider } from 'next-auth/react'
import BotaoPadrao from '../components/BotaoPadrao'


export default function MyApp({
  Component,
  pageProps: {session, ...pageProps},

})

{
  return (<>
    <SessionProvider session={session}>
      <BarraLogin />
      <hr />
      <Cabecalho />
      <Component {...pageProps} />
      <hr />
      <div id='menu-inferior'>
        <BotaoPadrao nome='Página inicial' href='/' />
      </div>
      <Rodape />
    </SessionProvider>
  </>
  )
}