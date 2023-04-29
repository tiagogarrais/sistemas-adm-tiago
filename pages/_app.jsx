import BarraLogin from '../components/BarraLogin'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <>
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
