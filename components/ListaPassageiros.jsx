import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function ListaPassageiros() {
  const { data: session } = useSession()
  const [passageiros, setPassageiros] = useState({})

  function addPassageiro() {
    if (!document.getElementById('identificacao').value) {
      return
    }

    if (!document.getElementById('nome').value) {
      return
    }

    setPassageiros({
      nome: document.getElementById('nome').value,
      documento: document.getElementById('identificacao').value
    })

    console.log(passageiros)
  }

  return (
    <>
      <h3>Lista de Passageiros</h3>

      <p>1</p>
      <input type="text" id="nome" placeholder="Nome completo"></input>
      <input
        type="text"
        id="identificacao"
        placeholder="Identidade, matrícula ou SIAPE"
      ></input>

      <article onClick={addPassageiro}>Adicionar passageiro(a)</article>
    </>
  )
}
