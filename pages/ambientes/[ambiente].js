import { useSession } from 'next-auth/react'
//import Head from 'next/head'
//import { Footer } from '../../components/footer/Footer'
//import { MenuSuperior } from '../../components/menu-superior/MenuSuperior'
//import { NaoLogado } from '../../components/nao-logado/NaoLogado'
import { BuscarAmbiente } from '../../components/buscar-ambiente/Buscar-ambiente'
import { MostrarAmbiente } from '../../components/mostrar-ambiente/Mostrar-ambiente'
import Link from 'next/link'

export default function Ambientes() {
  const tituloPagina = 'Ambientes IFE'
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        {/* <Head> */}
          <title>{tituloPagina}</title>
          <meta name="description" content={tituloPagina} />
          <link rel="icon" href="/favicon.ico" />
        {/* </Head> */}
        {/* <MenuSuperior /> */}
        <main>
          <h1>{tituloPagina}</h1>
          <MostrarAmbiente />
          <hr/>

<h2>Listagem de ambientes do campus Brejo Santo</h2>

<ul><Link href={{pathname: '/ambientes/1'}}> 1-Entrada principal - Externa</Link></ul>
<ul><Link href={{pathname: '/ambientes/2'}}> 2-Recepção</Link></ul>
<ul><Link href={{pathname: '/ambientes/3'}}> 3-Administração</Link></ul>
<ul><Link href={{pathname: '/ambientes/4'}}> 4-Sala de aula 10 e Miniauditório</Link></ul>
<ul><Link href={{pathname: '/ambientes/5'}}> 5-Brinquedoteca</Link></ul>
<ul><Link href={{pathname: '/ambientes/6'}}> 6-Gabinete Docente - chave 6</Link></ul>
<ul><Link href={{pathname: '/ambientes/7'}}> 7-Banheiro infantil</Link></ul>
<ul><Link href={{pathname: '/ambientes/8'}}> 8-Gabinete Docente - chave 8</Link></ul>
<ul><Link href={{pathname: '/ambientes/9'}}> 9-Depósito de material de limpeza</Link></ul>
<ul><Link href={{pathname: '/ambientes/10'}}> 10-Cantina / Cozinha</Link></ul>
<ul><Link href={{pathname: '/ambientes/11'}}> 11-Banheiro acessível Masculino 1</Link></ul>
<ul><Link href={{pathname: '/ambientes/12'}}> 12-Banheiro Acessível Feminino 1</Link></ul>
<ul><Link href={{pathname: '/ambientes/13'}}> 13-Banheiro feminino 1</Link></ul>
<ul><Link href={{pathname: '/ambientes/14'}}> 14-Banheiro masculino 1</Link></ul>
<ul><Link href={{pathname: '/ambientes/15'}}> 15-Laboratório de Química</Link></ul>
<ul><Link href={{pathname: '/ambientes/16'}}> 16-Sala de aula 11</Link></ul>
<ul><Link href={{pathname: '/ambientes/17'}}> 17-Sala de aula 12</Link></ul>
<ul><Link href={{pathname: '/ambientes/18'}}> 18-Depósito de reagentes</Link></ul>
<ul><Link href={{pathname: '/ambientes/19'}}> 19-Apoio acadêmico</Link></ul>
<ul><Link href={{pathname: '/ambientes/20'}}> 20-Rádio</Link></ul>
<ul><Link href={{pathname: '/ambientes/21'}}> 21-Estúdio de gravação</Link></ul>
<ul><Link href={{pathname: '/ambientes/22'}}> 22-Laboratório de Informática 1</Link></ul>
<ul><Link href={{pathname: '/ambientes/23'}}> 23-Laboratório de Informática 2</Link></ul>
<ul><Link href={{pathname: '/ambientes/24'}}> 24-Rack DTI</Link></ul>
<ul><Link href={{pathname: '/ambientes/25'}}> 25-Gabinete Docente - chave 25</Link></ul>
<ul><Link href={{pathname: '/ambientes/26'}}> 26-Sala de aula 09</Link></ul>
<ul><Link href={{pathname: '/ambientes/27'}}> 27-Sala de aula 08</Link></ul>
<ul><Link href={{pathname: '/ambientes/28'}}> 28-Sala de aula 07</Link></ul>
<ul><Link href={{pathname: '/ambientes/29'}}> 29-L@bmatec</Link></ul>
<ul><Link href={{pathname: '/ambientes/30'}}> 30-Biblioteca</Link></ul>

<ul><Link href={{pathname: '/ambientes/31'}}> 31-Sala de estudo 2 - Biblioteca</Link></ul>
<ul><Link href={{pathname: '/ambientes/32'}}> 32-Sala de estudo 1 - Biblioteca</Link></ul>
<ul><Link href={{pathname: '/ambientes/33'}}> 33-Sala de processamento técnico - Biblioteca</Link></ul>
<ul><Link href={{pathname: '/ambientes/34'}}> 34-Acesso Diretoria e reunião</Link></ul>
<ul><Link href={{pathname: '/ambientes/35'}}> 35-Sala de reuniões</Link></ul>
<ul><Link href={{pathname: '/ambientes/36'}}> 36-Secretaria</Link></ul>
<ul><Link href={{pathname: '/ambientes/37'}}> 37-Diretoria e Vice Diretoria</Link></ul>
<ul><Link href={{pathname: '/ambientes/38'}}> 38-Copa</Link></ul>
<ul><Link href={{pathname: '/ambientes/39'}}> 39-Coordenações</Link></ul>


40 	Palco e refeitório
41 	Praça interna
100 	Entrada principal - Interna
101 	Sala de aula 01
102 	Sala de aula 02
103 	Sala de aula 03
104 	Sala de aula 04
105 	Sala de aula 05
106 	Sala de aula 06
107 	Gabinete Docente - chave 107
108 	Banheiro feminino 2
109 	Banheiro masculino 2
110 	Banheiro feminino 3
111 	Banheiro masculino 3
112 	Apoio Horto / Projetos Institucionais
115 	Gabinete Docente - chave 115
116 	Banheiro acessível feminino 2
117 	Banheiro acessível masculino 2
119 	Laboratório de Física
120 	Laboratório de Biologia
121 	Fluxo Laminar
123 	Autoclave
124 	Casa de gás
125 	Casa de energia
126 	Banheiro masculino servidores
127 	Banheiro feminino servidores
129 	Guarita
130 	Banheiro Guarita
131 	Barrilete
132 	Depósito de Manutenção
134 	Sala de apoio ao discente
135 	Gabinete Docente - chave 135
136 	Gabinete Docente - chave 136
137 	Gabinete Docente - chave 137
138 	Estacionamento e bicicletário
139 	Horto didático
140 	Calçada para a rua
141 	Vaga deficiente, idosos ate corredor banheiros acessiveis
142 	Jardim da recepção
143 	Corredor sala de aula 10, acesso direção, copa, até saída para o bicicletário
144 	Corredor praça interna até horto didático
145 	Corredor sala de aula 1, 2, 3, 4, 5 até cruzamento com o outro corredor
146 	Corredor centro acadêmico até laboratório de informática
147 	Corredor biblioteca até sala de aula 9
148 	Corredor banheiro feminino 1 até sala de reagentes
149 	Corredor laboratórios física, biologia, autoclave até casa de gás




          <hr/>
          <BuscarAmbiente />
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
  return <p>Não</p>
}