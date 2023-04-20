import axios from 'axios'
import { useSession, signIn } from 'next-auth/react'
import React, { useState } from 'react'

export default function Cadastro() {
  const { data: session } = useSession()
  const [cadastro, setCadastro] = useState({})
  const [nomeCadastrado, setNomeCadastrado] = useState('')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('')
  const [emailCadastrado, setEmailCadastrado] = useState('')

  React.useEffect(() => {
    buscarCadastro()
  }, [])

  async function buscarCadastro() {
    const response = await fetch('/api/cadastro/buscarCadastro')
    const data = await response.json()
    setNomeCadastrado(data.nomeCompleto)
    setTelefoneCadastrado(data.telefone)
    setEmailCadastrado(data.email)
  }

  function onInputChange(evt) {
    setCadastro(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value
    }))
  }

  function btnSaveClick() {
    axios
      .post('/api/cadastro/enviarCadastro', {
        nomeCompleto: cadastro.nome,
        email: cadastro.email,
        telefone: cadastro.telefone,
        dataInformacao: Date()
      })
      .then(function (response) {
        window.alert('Cadastro atualizado')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (session) {
    cadastro.email = session.user.email

    return (
      <div className="conteudo">
        <h2>Mostrar meus dados</h2>
        <p>Nome: {nomeCadastrado}</p>
        <p>Telefone: {telefoneCadastrado}</p>
        <p>E-mail: {emailCadastrado}</p>

        <h2>Atualizar dados</h2>
        <label for="nome">
          Nome completo
          <input
            type="text"
            placeholder={nomeCadastrado}
            id="nome"
            value={cadastro.nome}
            onChange={onInputChange}
          />
        </label>

        <label for="telefone">
          Telefone
          <input
            type="text"
            placeholder={telefoneCadastrado}
            id="telefone"
            value={cadastro.telefone}
            onChange={onInputChange}
          />
        </label>

        <input type="button" value="Salvar" onClick={btnSaveClick} />
      </div>
    )
  }
  return (
    <>
      <div className="conteudo">
        <p>Para acessar este conteúdo é necessário fazer login</p>
        <button onClick={() => signIn()}>Entrar</button>
      </div>
    </>
  )
}
