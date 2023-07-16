import { useRouter } from 'next/router'
import { useQRCode } from 'next-qrcode'

export function MostrarAmbiente() {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiSala = '../api/ambientes/' + ambiente
  const { Canvas } = useQRCode()
  const linkDestaPagina = 'https://admtiago.com.br/ambientes/' + ambiente

  fetch(linkApiSala)
    .then(function (dadosBrutos) {
      return dadosBrutos.json()
    })
    .then(function (dadosJson) {
      if (dadosJson.nomeAmbiente != null) {
        document.getElementById('nomeAmbiente').innerText =
          dadosJson.nomeAmbiente
      }

      if (dadosJson.tipoTeto != null) {
        document.getElementById(
          'tipoTeto'
        ).innerHTML = `<p>Tipo de teto: ${dadosJson.tipoTeto}</p>`
      }

      if (dadosJson.telefone != null) {
        document.getElementById(
          'telefone'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.larguraLesteOeste != null) {
        document.getElementById(
          'largura'
        ).innerHTML = `<p>Largura: ${dadosJson.largura}</p>`
      }

      if (dadosJson.comprimento != null) {
        document.getElementById(
          'comprimento'
        ).innerHTML = `<p>Comprimento: ${dadosJson.comprimento}</p>`
      }

      if (dadosJson.altura != null) {
        document.getElementById(
          'altura'
        ).innerHTML = `<p>Altura: ${dadosJson.altura}</p>`
      }

      if (dadosJson.possuigaiolaProjetor != null) {
        document.getElementById(
          'possuigaiolaProjetor'
        ).innerHTML = `<p>Possui gaiola para projetor? ${dadosJson.possuigaiolaProjetor}</p>`
      }

      if (dadosJson.possuiCondicionadorAr != null) {
        document.getElementById(
          'possuiCondicionadorAr'
        ).innerHTML = `<p>Possui ar-condicionado? ${dadosJson.possuiCondicionadorAr}</p>`
      }

      if (dadosJson.frequenciaSemanalLimpeza != null) {
        document.getElementById(
          'frequenciaSemanalLimpeza'
        ).innerHTML = `<p>Frequência semanal de limpeza: ${dadosJson.frequenciaSemanalLimpeza}</p>`
      }

      if (dadosJson.possuiProjetor != null) {
        document.getElementById(
          'possuiProjetor'
        ).innerHTML = `<p>Possui projetor? ${dadosJson.possuiProjetor}</p>`
      }

      if (dadosJson.possuiQuadroLousa != null) {
        document.getElementById(
          'possuiQuadroLousa'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.possuiSuporteProjetor != null) {
        document.getElementById(
          'possuiSuporteProjetor'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.possuiCadeiraAcessível != null) {
        document.getElementById(
          'possuiCadeiraAcessível'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.possuiMesaAcessível != null) {
        document.getElementById(
          'possuiMesaAcessível'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.potenciaWattsCondicionadorAr != null) {
        document.getElementById(
          'potenciaWattsCondicionadorAr'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.quantCarteiras != null) {
        document.getElementById(
          'quantCarteiras'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.quantLampadas != null) {
        document.getElementById(
          'quantLampadas'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.tipoIluminacao != null) {
        document.getElementById(
          'tipoIluminacao'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.tipoTeto != null) {
        document.getElementById(
          'tipoTeto'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      if (dadosJson.tipo != null) {
        document.getElementById(
          'tipo'
        ).innerHTML = `<p>Número do telefone: ${dadosJson.telefone}</p>`
      }

      document.getElementById('areaM2').innerText = (
        dadosJson.larguraLesteOeste * dadosJson.comprimento
      ).toFixed(1)
    })
    .catch(function (e) {
      console.log('Erro capturado, consulte o código para mais informações')
    })

  return (
    <div>
      <h2 id="nomeAmbiente"></h2>
      <p>Chave número: {ambiente}</p>

      <span id="tipo"></span>

      <span id="frequenciaSemanalLimpeza"></span>

      <span id="tipoTeto"></span>

      <span id="telefone"></span>

      <span id="larguraLesteOeste"></span>

      <span id="comprimento"></span>

      <span id="altura"></span>

      <span id="areaM2"></span>

      <span id="possuigaiolaProjetor"></span>

      <span id="possuiCondicionadorAr"></span>

      <span id="possuiProjetor"></span>

      <span id="possuiQuadroLousa"></span>

      <span id="possuiSuporteProjetor"></span>

      <span id="possuiCadeiraAcessível"></span>

      <span id="possuiMesaAcessível"></span>

      <span id="tipoTeto"></span>

      <span id="potenciaWattsCondicionadorAr"></span>

      <span id="quantCarteiras"></span>

      <span id="quantLampadas"></span>

      <span id="tipoIluminacao"></span>

      <span id="tipoTeto"></span>

      <p>Link desta página: {linkDestaPagina}</p>
      <div className="center">
        <Canvas
          text={linkDestaPagina}
          options={{
            level: 'M',
            margin: 3,
            scale: 4,
            width: 200
          }}
        />
      </div>
    </div>
  )
}
