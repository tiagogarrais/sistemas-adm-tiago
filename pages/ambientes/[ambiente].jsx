import { useSession } from 'next-auth/react'
import { BuscarAmbiente } from '../../components/buscar-ambiente/Buscar-ambiente'
import { MostrarAmbiente } from '../../components/mostrar-ambiente/Mostrar-ambiente'
import Link from 'next/link'

export default function Ambientes() {
  const tituloPagina = 'Ambientes IFE'
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <title>{tituloPagina}</title>
        <meta name="description" content={tituloPagina} />
        <main>
          <h2>{tituloPagina}</h2>
          <MostrarAmbiente />
          <hr />
          <h2>Ambientes do campus Brejo Santo</h2>
          <ul>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/1' }}>
                {' '}
                1 - Entrada principal - Externa
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/2' }}>
                {' '}
                2 - Recepção
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/3' }}>
                {' '}
                3 - Administração
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/4' }}>
                {' '}
                4 - Sala de aula 10 e Miniauditório
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/5' }}>
                {' '}
                5 - Brinquedoteca
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/6' }}>
                {' '}
                6 - Gabinete Docente - chave 6
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/7' }}>
                {' '}
                7 - Banheiro infantil
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/8' }}>
                {' '}
                8 - Gabinete Docente - chave 8
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/9' }}>
                {' '}
                9 - Depósito de material de limpeza
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/10' }}>
                {' '}
                10 - Cantina / Cozinha
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/11' }}>
                {' '}
                11 - Banheiro acessível Masculino 1
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/12' }}>
                {' '}
                12 - Banheiro Acessível Feminino 1
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/13' }}>
                {' '}
                13 - Banheiro feminino 1
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/14' }}>
                {' '}
                14 - Banheiro masculino 1
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/15' }}>
                {' '}
                15 - Laboratório de Química
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/16' }}>
                {' '}
                16 - Sala de aula 11
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/17' }}>
                {' '}
                17 - Sala de aula 12
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/18' }}>
                {' '}
                18 - Depósito de reagentes
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/19' }}>
                {' '}
                19 - Apoio acadêmico
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/20' }}>
                {' '}
                20 - Rádio
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/21' }}>
                {' '}
                21 - Estúdio de gravação
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/22' }}>
                {' '}
                22 - Laboratório de Informática 1
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/23' }}>
                {' '}
                23 - Laboratório de Informática 2
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/24' }}>
                {' '}
                24 - Rack DTI
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/25' }}>
                {' '}
                25 - Gabinete Docente - chave 25
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/26' }}>
                {' '}
                26 - Sala de aula 09
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/27' }}>
                {' '}
                27 - Sala de aula 08
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/28' }}>
                {' '}
                28 - Sala de aula 07
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/29' }}>
                {' '}
                29 - L@bmatec
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/30' }}>
                {' '}
                30 - Biblioteca
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/31' }}>
                {' '}
                31 - Sala de estudo 2 - Biblioteca
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/32' }}>
                {' '}
                32 - Sala de estudo 1 - Biblioteca
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/33' }}>
                {' '}
                33 - Sala de processamento técnico - Biblioteca
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/34' }}>
                {' '}
                34 - Acesso Diretoria e reunião
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/35' }}>
                {' '}
                35 - Sala de reuniões
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/36' }}>
                {' '}
                36 - Secretaria
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/37' }}>
                {' '}
                37 - Diretoria e Vice Diretoria
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/38' }}>
                {' '}
                38 - Copa
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/39' }}>
                {' '}
                39 - Coordenações
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/40' }}>
                {' '}
                40 - Palco e refeitório
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/41' }}>
                {' '}
                41 - Praça interna
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/100' }}>
                {' '}
                100 - Entrada Principal - Interna
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/101' }}>
                {' '}
                101 - Sala de aula 01
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/102' }}>
                {' '}
                102 - Sala de aula 02
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/103' }}>
                {' '}
                103 - Sala de aula 03
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/104' }}>
                {' '}
                104 - Sala de aula 04
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/105' }}>
                {' '}
                105 - Sala de aula 05
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/106' }}>
                {' '}
                106 - Sala de aula 06
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/107' }}>
                {' '}
                107 - Gabinete Docente - chave 107
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/108' }}>
                {' '}
                108 - Banheiro feminino 2
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/109' }}>
                {' '}
                109 - Banheiro masculino 2
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/110' }}>
                {' '}
                110 - Banheiro feminino 3
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/111' }}>
                {' '}
                111 - Banheiro masculino 3
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/112' }}>
                {' '}
                112 - Apoio Horto / Projetos Institucionais
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/113' }}>
                {' '}
                113 - Entrada
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/114' }}>
                {' '}
                114 - Entrada
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/115' }}>
                {' '}
                115 - Gabinete Docente - chave 115
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/116' }}>
                {' '}
                116 - Banheiro acessível feminino 2
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/117' }}>
                {' '}
                117 - Banheiro acessível masculino 2
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/119' }}>
                {' '}
                119 - Laboratório de Física
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/120' }}>
                {' '}
                120 - Laboratório de Biologia
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/121' }}>
                {' '}
                121 - Fluxo Laminar
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/123' }}>
                {' '}
                123 - Autoclave
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/124' }}>
                {' '}
                124 - Casa de gás
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/125' }}>
                {' '}
                125 - Casa de energia
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/126' }}>
                {' '}
                126 - Banheiro masculino servidores
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/127' }}>
                {' '}
                127 - Banheiro feminino servidores
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/129' }}>
                {' '}
                129 - Guarita
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/130' }}>
                {' '}
                130 - Banheiro Guarita
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/131' }}>
                {' '}
                131 - Barrilete
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/132' }}>
                {' '}
                132 - Depósito de manutenção
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/134' }}>
                {' '}
                134 - Sala de apoio ao discente
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/135' }}>
                {' '}
                135 - Gabinete Docente - chave 135
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/136' }}>
                {' '}
                136 - Gabinete Docente - chave 136
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/137' }}>
                {' '}
                137 - Gabinete Docente - chave 137
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/138' }}>
                {' '}
                138 - Estacionamento e bicicletário
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/139' }}>
                {' '}
                139 - Horto didático
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/140' }}>
                {' '}
                140 - Calçada para a rua
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/141' }}>
                {' '}
                141 - Vaga deficiente, idosos ate corredor banheiros acessiveis
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/142' }}>
                {' '}
                142 - Jardim da recepção
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/143' }}>
                {' '}
                143 - Corredor sala de aula 10, acesso direção, copa, até saída
                para o bicicletário
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/144' }}>
                {' '}
                144 - Corredor praça interna até horto didático
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/145' }}>
                {' '}
                145 - Corredor sala de aula 1, 2, 3, 4, 5 até cruzamento com o
                outro corredor
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/146' }}>
                {' '}
                146 - Corredor centro acadêmico até laboratório de informática
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/147' }}>
                {' '}
                147 - Corredor biblioteca até sala de aula 9
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/148' }}>
                {' '}
                148 - Corredor banheiro feminino 1 até sala de reagentes
              </Link>
            </li>
            <li>
              <Link className="link" href={{ pathname: '/ambientes/149' }}>
                {' '}
                149 - Corredor laboratórios física, biologia, autoclave até casa
                de gás
              </Link>
            </li>
          </ul>
          <hr />
          <BuscarAmbiente />

          <hr />
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
  return <p>Não</p>
}
