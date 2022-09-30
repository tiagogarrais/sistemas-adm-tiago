import Link from 'next/dist/client/link'

export default function Cabecalho() {
  return (
    <div className='cabecalho'>
      <Link href="/">
        <a>
          <h1>
            Portfólio digital do Adm. Tiago Arrais (CRA 11660)
          </h1>
        </a>
      </Link>
    </div>

  )
}