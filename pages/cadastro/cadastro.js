import axios from 'axios'
import { useSession, signIn } from 'next-auth/react'
import React, { Suspense, useState } from 'react'
import loading from '../../components/loading/loading.svg'

export default function Cadastro() {
  const { data: session } = useSession()
  const [cadastro, setCadastro] = useState({})
  const [nomeCadastrado, setNomeCadastrado] = useState('Carregando...')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('Carregando...')
  const [emailCadastrado, setEmailCadastrado] = useState('Carregando...')
  const [dataCadastro, setDataCadastro] = useState('Carregando...')

  React.useEffect(() => {
    buscarCadastro()
  }, [])

  async function buscarCadastro() {
    const response = await fetch(
      '/api/cadastro/cadastro?' + 'email=' + session.user.email
    )
    const data = await response.json()

    if (data === null) {
      setNomeCadastrado('Não cadastrado')
      setTelefoneCadastrado('Não cadastrado')
      return
    }

    setNomeCadastrado(data.nomeCompleto)
    setTelefoneCadastrado(data.telefone)
    setEmailCadastrado(data.email)
    setDataCadastro(data.dataInformacao)

  }

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
    axios
      .post('/api/cadastro/cadastro', {
        nomeCompleto: cadastro.nome,
        email: cadastro.email,
        telefone: cadastro.telefone,
        dataInformacao: Date()
      })
      .then(function (res) {
        cadastro.nome =''
        cadastro.telefone=''
        buscarCadastro()
      })
      .catch(function (error) {
        console.log(error)
        window.alert('Houve um erro no processamento da requisição')
      })
  }

  if (session) {
    cadastro.email = session.user.email
    return (
      <div className="conteudo">

        <h2>Meus dados</h2>        
          <p>{nomeCadastrado}</p>
          <p>{emailCadastrado}</p>
          <p>{telefoneCadastrado}</p>
          <p>Cadastrado em: {dataCadastro}</p>
      

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
        <input type="button" value="Salvar" onClick={btnSaveClick} />
      </div >
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
