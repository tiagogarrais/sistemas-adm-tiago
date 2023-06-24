export default function limpeza() {
  fetch('/api/ambientes/exibir-ambientes').then(function (dadosBrutos) {
    return dadosBrutos.json()
  })

  return (
    <>
      <h2>Limpeza</h2>
      <label>
        Qual o nome do ambiente?
        <select id="ambiente" name="ambiente" required>
          <option name="ambiente" value="Recepcao" id="recepcao" selected>
            Recepção
          </option>
        </select>
      </label>
    </>
  )
}
