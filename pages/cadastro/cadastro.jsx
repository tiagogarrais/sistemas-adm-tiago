import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import BuscarCadastro from '../../components/cadastro/BuscarCadastro'
import Link from 'next/link'

export default function Cadastro() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className="button">
          <Link href="/">Voltar para a página principal</Link>
        </div>
        <div id="cadastro">
          <BuscarCadastro />
        </div>
        <div className="button">
          <Link href={'/cadastro/atualizar'}>Atualizar cadastro</Link>
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
