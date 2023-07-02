import Image from 'next/image'
import Link from 'next/link'

export default function informacoes() {
  const raioTransportes =
    'http://raiolaser.16mb.com/images/2/2a/Raio-transportes-ufca.jpeg'

  return (
    <>
      <div className="button">
        <Link href="/transportes">Voltar para a página de transportes</Link>
      </div>
      <h4>Dados gerais sobre viagem em veículos oficiais</h4>
      <div>
        <div className="center">
          <Image
            src={raioTransportes}
            width="1100"
            height="1100"
            alt="Atuação permitida do serviço de transportes: raio de 800 km à partir da sede - Juazeiro do Norte"
          ></Image>
        </div>
        Atenção: Atuação permitida do serviço de transporte terrestre da UFCA:
        Raio de 800 km à partir da sede - Juazeiro do Norte
      </div>
    </>
  )
}
