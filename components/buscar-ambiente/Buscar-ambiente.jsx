import { useSession } from 'next-auth/react'
import { useState } from 'react'

export function BuscarAmbiente() {
  const { data: session } = useSession()
  const [sala, setSala] = useState('')

  function buscarSala(event) {
    event.preventDefault()

    if (sala === '') {
      document.getElementById('aviso').innerHTML =
        'Você precisa informar o número da sala.'
      return
    }

    if (isNaN(sala) === true) {
      document.getElementById('aviso').innerHTML =
        'O valor que você informou não é um número.'
      return
    }

    let regex = /ufca\.edu.br$/
    let testeEmailUfca = regex.test(session.user.email)
    if (testeEmailUfca === false) {
      document.getElementById('aviso').innerHTML =
        'Você precisa fazer login com um e-mail @ufca.edu.br para acessar as informações.'
      return
    }

    document.getElementById('aviso').innerHTML =
      'Buscando as informações, aguarde...'

    let link = '/ambientes/' + sala
    window.location.href = link
  }

  return (
    <table>
      <td>
        Pesquisar outro ambiente
        <form className="form" onSubmit={buscarSala}>
          <input
            placeholder="Qual o número da sala?"
            onChange={event => setSala(event.target.value)}
            value={sala}
          />
          <button type="submit">Verificar</button>
          <p
            id="aviso"
            style={{ backgroundColor: 'yellow', color: 'black' }}
          ></p>
        </form>
      </td>
    </table>
  )
}
