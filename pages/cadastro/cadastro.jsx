import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import BuscarCadastro from '../../components/cadastro/BuscarCadastro'
import SalvarNovoCadastro from '../../components/cadastro/SalvarNovoCadastro'
import Link from 'next/link'

export default function Cadastro() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <BuscarCadastro />
        <Link href="/">Voltar para a página principal</Link>
        <SalvarNovoCadastro />
        <Link href="/">Voltar para a página principal</Link>
      </>
    )
  }
  return (
    <>
      <div>
        <p>Para acessar este conteúdo é necessário fazer login</p>
        <button onClick={() => signIn()}>Entrar</button>
      </div>
    </>
  )
}
