import { useSession, signIn } from 'next-auth/react'
import React, { useState } from 'react'
import axios from 'axios'

export default function SalvarNovoCadastro() {
  const { data: session } = useSession()
  const [cadastro, setCadastro] = useState({})
  const [nomeCadastrado, setNomeCadastrado] = useState('Carregando...')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('Carregando...')
  const [emailCadastrado, setEmailCadastrado] = useState('Carregando...')
  const [dataCadastro, setDataCadastro] = useState('Carregando...')

  function onInputChange(evt) {
    setCadastro(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value
    }))
  }

  function btnSaveClick() {
    if (cadastro.nome === undefined) {
      window.alert(
        'Para atualizar o cadastro você precisa digitar seu nome completo'
      )
      return
    }

    if (cadastro.telefone === undefined) {
      window.alert(
        'Para atualizar o cadastro você precisa digitar seu telefone'
      )
      return
    }

    //document.getElementById('btnSave').disabled = true

    setNomeCadastrado('Aguarde...')
    setTelefoneCadastrado('Aguarde...')
    setEmailCadastrado('Aguarde...')
    setDataCadastro('Aguarde...')

    axios
      .post('/api/cadastro/cadastro', {
        nome: cadastro.nome,
        email: cadastro.email,
        telefone: cadastro.telefone,
        dataInformacao: Date()
      })
      .then(function (res) {
        cadastro.nome = ''
        cadastro.telefone = ''
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (session) {
    cadastro.email = session.user.email
    return (
      <div>
        <h2>Atualizar dados</h2>
        <label for="nome">
          Nome completo
          <input
            type="text"
            id="nome"
            value={cadastro.nome}
            onChange={onInputChange}
          />
        </label>

        <label for="telefone">
          Telefone
          <input
            type="text"
            id="telefone"
            value={cadastro.telefone}
            onChange={onInputChange}
          />
        </label>
        <button id="btnSave" value="Salvar" onClick={btnSaveClick}>
          Salvar
        </button>
      </div>
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
