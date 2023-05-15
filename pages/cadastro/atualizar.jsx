import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import SalvarNovoCadastro from '../../components/cadastro/SalvarNovoCadastro'
import Link from 'next/link'

export default function Cadastro() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Link href="/">Voltar para a página principal</Link>
        <div id="cadastro">
          <SalvarNovoCadastro />
        </div>
        <div className="button">
          <Link href="/">Voltar para a página principal</Link>
        </div>
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
