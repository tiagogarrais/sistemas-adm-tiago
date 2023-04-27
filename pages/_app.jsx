import '../styles/globals.css'
import '../styles/cabecalho.css'
import '../styles/conteudo.css'
import '../styles/rodape.css'
import '../styles/outros-sistemas.css'
import BarraLogin from '../components/BarraLogin'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react';
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (<>
    <SessionProvider session={session}>
      <Cabecalho />
      <BarraLogin />
      <hr />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Analytics />
      <hr />
      <Rodape />
    </SessionProvider>
  </>
  )
}