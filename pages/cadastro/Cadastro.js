import axios from 'axios'
import { useSession, signIn } from 'next-auth/react'
import React, { useState } from 'react'

export default function Cadastro() {
  const { data: session } = useSession()
  const [cadastro, setCadastro] = useState({})
  const [nomeCadastrado, setNomeCadastrado] = useState('')
  const [telefoneCadastrado, setTelefoneCadastrado] = useState('')

  React.useEffect(() => {
    buscarCadastro()
  }, [])

  async function buscarCadastro() {
    const response = await fetch('/api/cadastro/buscarCadastro')
    const data = await response.json()
    
    if(data===null){
      setNomeCadastrado('Não cadastrado')
      setTelefoneCadastrado('Não cadastrado')
      return
    }

    setNomeCadastrado(data.nomeCompleto)
    setTelefoneCadastrado(data.telefone)
  }

  function onInputChange(evt) {
    setCadastro(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value
    }))
  }

  function btnSaveClick() {

    if (cadastro.nome === undefined) {
      window.alert('Para atualizar o cadastro você precisa digitar seu nome completo')
      return
    }

    if (cadastro.telefone === undefined) {
      window.alert('Para atualizar o cadastro você precisa digitar seu telefone')
      return
    }

    axios.post('/api/cadastro/enviarCadastro', {
        nomeCompleto: cadastro.nome,
        email: cadastro.email,
        telefone: cadastro.telefone,
        dataInformacao: Date()
      })
      .then(function (response) {
        buscarCadastro()
      })
      .catch(function (error) {
        console.log(error)
        buscarCadastro()
      })
  }

  if (session) {
    cadastro.email = session.user.email

    return (
      <div className="conteudo">
        <h2>Mostrar meus dados</h2>
        <p>Nome: {nomeCadastrado}</p>
        <p>Telefone: {telefoneCadastrado}</p>

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
