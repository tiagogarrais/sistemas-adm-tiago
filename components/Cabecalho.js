import Image from 'next/image'
import admLogo from '../src/assets/images/adm-logo.svg'
import Link from 'next/dist/client/link'

export default function Cabecalho() {

  return (

    <div className='cabecalho'>
      <Link href="/">
        <a>
          <Image
            src={admLogo}
            alt="Logomarca da Administração"
            width={70}
            height={70}
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