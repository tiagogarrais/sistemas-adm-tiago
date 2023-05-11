import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

export default function BuscarCadastro() {
  React.useEffect(() => {
    buscarCadastro()
  }, [])

  async function buscarCadastro() {
    const response = await fetch(
      '../api/cadastro/cadastro?' + 'email=' + session.user.email
    )
    const data = await response.json()

    if (data === null) {
      setNomeCadastrado('Não cadastrado')
      setTelefoneCadastrado('Não cadastrado')
      setEmailCadastrado('Não cadastrado')
      setDataCadastro('Não cadastrado')
      return
    }

    setNomeCadastrado(data.nome)
    setTelefoneCadastrado(data.telefone)
    setEmailCadastrado(data.email)
    setDataCadastro(data.dataInformacao)
  }

  const { data: session } = useSession()

  const [nomeCadastrado, setNomeCadastrado] = useState('Carregando...')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('Carregando...')
  const [emailCadastrado, setEmailCadastrado] = useState('Carregando...')
  const [dataCadastro, setDataCadastro] = useState('Carregando...')

  if (session)
    return (
      <div>
        <h2>Meus dados</h2>
        <p>Nome: {nomeCadastrado}</p>
        <p>E-mail: {emailCadastrado}</p>
        <p>Telefone: {telefoneCadastrado}</p>
        <p>Cadastrado em: {dataCadastro}</p>
      </div>
    )
  return 'Não permitido'
}
