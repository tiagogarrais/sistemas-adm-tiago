import { useRouter } from 'next/router'

export function MostrarAmbiente() {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiSala = '../api/ambientes/' + ambiente

  fetch(linkApiSala)
    .then(function (dadosBrutos) {
      return dadosBrutos.json()
    })
    .then(function (dadosJson) {
      if (dadosJson.nomeAmbiente != null) {
        document.getElementById('nomeAmbiente').innerText =
          dadosJson.nomeAmbiente
      }

      if (dadosJson.responsabilidadeLimpeza != null) {
        document.getElementById('responsabilidadeLimpeza').innerText =
          dadosJson.responsabilidadeLimpeza
      }
      if (dadosJson.frequenciaSemanalLimpeza != null) {
        document.getElementById('frequenciaSemanalLimpeza').innerText =
          dadosJson.frequenciaSemanalLimpeza
      }
    })
    .catch(function (e) {
      console.log('Erro capturado, consulte o código para mais informações')
    })

  return (
    <>
      <h2 id="nomeAmbiente">Nome do ambiente</h2>
      Chave número: {ambiente}
      <table>
        <h3>LIMPEZA DO AMBIENTE</h3>
        <tr />
        <td>
          Servente de limpeza: <span id="responsabilidadeLimpeza"></span>
        </td>
        <tr />
        <td>
          <label>
            A limpeza completa deste ambiente é executada{' '}
            <span id="frequenciaSemanalLimpeza"></span> vez(s) por semana.
          </label>
        </td>
        <tr />
      </table>
    </>
  )
}
