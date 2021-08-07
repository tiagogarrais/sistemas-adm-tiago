import Image from 'next/image'
import admLogo from '../src/assets/images/adm-logo.png'
import portaoEntradaIfe from '../src/assets/images/portaoEntradaIfe.jpg'
import Link from 'next/dist/client/link'

export default function Cabecalho() {
  return (
    <div className='cabecalho'>
      <Link href="/">
        <a>
          <Image
            src={portaoEntradaIfe}
            alt="Portão de entrada do Instituto de Formação de Educadores"
            width={1100}
            height={400}
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <h1>
            Painel da Administração - Instituto de Formação de Educadores
          </h1>
        </a>
      </Link>
    </div>

  )
}