import axios from 'axios'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'

export default function Cadastro() {
  const { data: session } = useSession()
  const [cadastro, setCadastro] = useState({})
  const [nomeCadastrado, setNomeCadastrado] = useState('')

  async function buscarCadastro() {
    const response = await fetch('/api/cadastro/buscarCadastro')
    const data = await response.json()
    setNomeCadastrado(data.nomeCompleto)
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
        dataInformacao: Date()
      })
      .then(function (response) {
        console.log('Cadastro atualizado')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (session) {
    cadastro.email = session.user.email

    return (
      <div className="conteudo">
        <button onClick={buscarCadastro}>Mostrar meus dados</button>
        <p>Nome: {nomeCadastrado}</p>
        <p>E-mail: {cadastro.email}</p>

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

        <label for="email">
          E-mail
          <input type="text" id="email" value={cadastro.email} readOnly />
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
