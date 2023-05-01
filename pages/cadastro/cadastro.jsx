import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import BuscarCadastro from '../../components/BuscarCadastro'
import SalvarNovoCadastro from '../../components/cadastro/SalvarNovoCadastro'

export default function Cadastro() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <BuscarCadastro />
        <SalvarNovoCadastro />
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
