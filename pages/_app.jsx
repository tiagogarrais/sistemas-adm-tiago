import BarraLogin from '../components/BarraLogin'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <>
      <Head>
        <title>admtiago.com.br</title>
        <meta
          name="Tiago das Graças Arrais"
          content="Serviços digitais"
          charset="utf-8"
          lang="pt-BR"
        />
      </Head>
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
        <Rodape />
      </SessionProvider>
    </>
  )
}
