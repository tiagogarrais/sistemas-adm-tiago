import { useSession, signIn } from 'next-auth/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import BuscarCadastro from './BuscarCadastro'

export default function SalvarNovoCadastro() {
  const { data: session } = useSession()
  const [cadastro, setCadastro] = useState({})
  const router = useRouter()

  function onInputChange(evt) {
    setCadastro(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value
    }))
  }

  function deletarCadastro() {
    axios
      .delete('/api/cadastro/cadastro?' + 'email=' + cadastro.email)
      .then(function (res) {
        document.getElementById('nome').value = ''
        document.getElementById('telefone').value = ''
        setCadastro({})
        window.alert('Cadastro deletado')
        document.getElementById('btnSave').disabled = false
        document.getElementById('btnSave').innerText = 'Salvar'
        router.push('/cadastro/cadastro')
      })
      .catch(function (error) {
        console.log(error)
      })
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

    if (cadastro.cpf === undefined) {
      window.alert('Para atualizar o cadastro você precisa digitar seu CPF')
      return
    }

    document.getElementById('btnSave').disabled = true
    document.getElementById('btnSave').innerText = 'Aguarde...'

    axios
      .post('/api/cadastro/cadastro', {
        nome: cadastro.nome,
        email: cadastro.email,
        telefone: cadastro.telefone,
        cpf: cadastro.cpf,
        dataInformacao: Date()
      })
      .then(function (res) {
        document.getElementById('nome').value = ''
        document.getElementById('telefone').value = ''
        document.getElementById('cpf').value = ''

        setCadastro({})
        window.alert('Informações atualizadas')
        document.getElementById('btnSave').disabled = false
        document.getElementById('btnSave').innerText = 'Salvar'
        router.push('/cadastro/cadastro')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if (session) {
    cadastro.email = session.user.email
    return (
      <div>
        <BuscarCadastro />
        <h2>Atualizar dados</h2>
        <label for="nome">
          Nome
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
        <label for="cpf">
          CPF
          <input
            type="text"
            id="cpf"
            value={cadastro.cpf}
            onChange={onInputChange}
          />
        </label>
        <button id="btnSave" value="Salvar" onClick={btnSaveClick}>
          Salvar
        </button>

        <button id="deletarCadastro" value="Deletar" onClick={deletarCadastro}>
          Apagar meu cadastro
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
