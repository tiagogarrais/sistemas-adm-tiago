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
        document.getElementById('telefone').innerText = dadosJson.telefone
      }

      if (dadosJson.larguraLesteOeste != null) {
        document.getElementById('largura').innerText =
          dadosJson.larguraLesteOeste
      }

      if (dadosJson.comprimento != null) {
        document.getElementById('comprimento').innerText = dadosJson.comprimento
      }

      if (dadosJson.altura != null) {
        document.getElementById('altura').innerText = dadosJson.altura
      }

      if (dadosJson.possuigaiolaProjetor != null) {
        document.getElementById('possuigaiolaProjetor').innerText =
          dadosJson.possuigaiolaProjetor
      }

      if (dadosJson.possuiCondicionadorAr != null) {
        document.getElementById('possuiCondicionadorAr').innerText =
          dadosJson.possuiCondicionadorAr
      }

      if (dadosJson.frequenciaSemanalLimpeza != null) {
        document.getElementById('frequenciaSemanalLimpeza').innerText =
          dadosJson.frequenciaSemanalLimpeza
      }

      if (dadosJson.possuiProjetor != null) {
        document.getElementById('possuiProjetor').innerText =
          dadosJson.possuiProjetor
      }

      if (dadosJson.possuiQuadroLousa != null) {
        document.getElementById('possuiQuadroLousa').innerText =
          dadosJson.possuiQuadroLousa
      }

      if (dadosJson.possuiSuporteProjetor != null) {
        document.getElementById('possuiSuporteProjetor').innerText =
          dadosJson.possuiSuporteProjetor
      }

      if (dadosJson.possuiCadeiraAcessível != null) {
        document.getElementById('possuiCadeiraAcessível').innerText =
          dadosJson.possuiCadeiraAcessível
      }

      if (dadosJson.possuiMesaAcessível != null) {
        document.getElementById('possuiMesaAcessível').innerText =
          dadosJson.possuiMesaAcessível
      }

      if (dadosJson.potenciaWattsCondicionadorAr != null) {
        document.getElementById('potenciaWattsCondicionadorAr').innerText =
          dadosJson.potenciaWattsCondicionadorAr
      }

      if (dadosJson.quantCarteiras != null) {
        document.getElementById('quantCarteiras').innerText =
          dadosJson.quantCarteiras
      }

      if (dadosJson.quantLampadas != null) {
        document.getElementById('quantLampadas').innerText =
          dadosJson.quantLampadas
      }

      if (dadosJson.tipoIluminacao != null) {
        document.getElementById('tipoIluminacao').innerText =
          dadosJson.tipoIluminacao
      }

      if (dadosJson.tipoTeto != null) {
        document.getElementById('tipoTeto').innerText = dadosJson.tipoTeto
      }

      if (dadosJson.tipo != null) {
        document.getElementById('tipo').innerText = dadosJson.tipo
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
      <p>
        A limpeza completa deste ambiente é executada{' '}
        <span id="frequenciaSemanalLimpeza"></span> vez(s) por semana.
      </p>

      <p>
        Tipo de ambiente: <span id="tipo"></span>
      </p>

      <span id="tipoTeto"></span>

      <p>
        Número do telefone: <span id="telefone"></span>
      </p>

      <p>
        Largura em metros: <span id="larguraLesteOeste"></span>
      </p>

      <p>
        Comprimento: <span id="comprimento"></span>
      </p>

      <p>
        Altura: <span id="altura"></span>
      </p>

      <p>
        Área em metros quadrados: <span id="areaM2"></span>
      </p>

      <p>
        Possui gaiola para projetor? <span id="possuigaiolaProjetor"></span>
      </p>

      <p>
        Possui ar-condicionado? <span id="possuiCondicionadorAr"></span>
      </p>

      <p>
        Possui projetor? <span id="possuiProjetor"></span>
      </p>

      <p>
        Possui quadro / lousa? <span id="possuiQuadroLousa"></span>
      </p>

      <p>
        Possui suporte para projetor? <span id="possuiSuporteProjetor"></span>
      </p>

      <p>
        Possui cadeira acessível?{' '}
        <span id="tippossuiCadeiraAcessíveloTeto"></span>
      </p>

      <p>
        Possui mesa acessível? <span id="possuiMesaAcessível"></span>
      </p>

      <p>
        Tipo de teto: <span id="tipoTeto"></span>
      </p>

      <p>
        Potência em Watts do ar-condicionado:{' '}
        <span id="potenciaWattsCondicionadorAr"></span>
      </p>

      <p>
        Quantidade de carteiras: <span id="quantCarteiras"></span>
      </p>

      <p>
        Quantidade de lâmpadas: <span id="quantLampadas"></span>
      </p>

      <p>
        Tipo de Iluminação: <span id="tipoIluminacao"></span>
      </p>

      <p>
        Tipo de teto: <span id="tipoTeto"></span>
      </p>

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
