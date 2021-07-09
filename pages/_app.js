import '../styles/globals.css'
import '../styles/barra-login.css'
import '../styles/cabecalho.css'
import '../styles/conteudo.css'
import '../styles/rodape.css'
import '../styles/outros-sistemas.css'
import BarraLogin from '../components/BarraLogin'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return (<>
    <Provider session={pageProps.session} >
      <BarraLogin />
      <hr/>
      <Cabecalho />
      <Component {...pageProps} />
      <hr/>
      <Rodape />
    </Provider>
  </>
  )
}

export default MyApp
